import styled from '@emotion/styled';
import React, { useReducer } from 'react';
import { useEffect, useState } from 'react';
import HomeContext from '../../contexts/HomeContext';
import Products from '../../services/products';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';

import PriceFilterMenu from './PriceFilterMenu';
import Search from './Search';
import TypeFilterMenu from './TypeFilterMenu';
import { FiSearch } from 'react-icons/fi';
import { colors } from '../../styles';

const Container = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 15px;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 70px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

const Results = styled.div`
  /* SemiBold/XL */

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;

  /* black */

  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  svg {
    width: 120px;
    height: 120px;
    color: ${colors.gray.dark};
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function reducer(state, action) {
  switch (action.type) {
    case 'getCategories':
      action.products.forEach((product) => {
        //pushes only unique element
        if (state.filter((c) => c.name == product.category).length === 0) {
          state.push({ name: product.category, selected: false });
        }
      });
      if (state.filter((c) => c.selected == true).length === 0) {
        state[0].selected = true;
      }
      return state;
    case 'setSelected':
      return state.map((category) => {
        if (category.name == action.name) {
          return { name: category.name, selected: true };
        } else {
          return { name: category.name, selected: false };
        }
      });
    default:
      throw new Error('Action not found');
  }
}

function getSelected(state) {
  const element = state.filter((c) => c.selected);
  return element[0].name;
}

export default function Home({ getId }) {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);
  const [prices, setPrices] = useState({ min: 0, max: Infinity });
  const [search, setSearch] = useState();

  useEffect(() => {
    Products.get()
      .then((products) => {
        if (search) {
          setProducts(
            products.filter((prod) =>
              prod.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
          );
        } else {
          dispatch({ type: 'getCategories', products: products });
          const selected = getSelected(state);
          const prodFilterByCat = products.filter(
            (prod) => prod.category === selected
          );
          const prodFilterByPrices = prodFilterByCat.filter(
            (prod) =>
              prod.price / 100 >= prices.min && prod.price / 100 <= prices.max
          );
          setProducts(prodFilterByPrices);
        }
      })
      .catch(console.error);
  }, [state, prices, search]);

  return (
    <HomeContext.Provider
      value={{
        categories: state,
        dispatch: dispatch,
        setPrices: setPrices,
        prices: prices,
        search,
        setSearch,
      }}
    >
      <Container>
        <Search />
        {search ? (
          <Results>
            {products.length === 0 && <FiSearch />}
            <span>Found {products.length} results</span>
          </Results>
        ) : (
          <>
            <TypeFilterMenu />
            <PriceFilterMenu />
          </>
        )}

        <CardContainer>
          {products.map((product) => (
            <ProductLink
              to={`/products/${product.id}`}
              key={product.id}
              onClickCapture={() => getId(product.id)}
            >
              <FoodCard dish={product} />
            </ProductLink>
          ))}
        </CardContainer>
      </Container>
    </HomeContext.Provider>
  );
}
