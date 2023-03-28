import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Products from '../../services/products';
import { colors } from '../../styles';
import { FoodContainer, Image, Information, Info, Back } from './ui';

const Product = ({ ProductId }) => {
  const navigate = useNavigate();

  const [dish, setDish] = useState({
    name: '',
    price: 0,
    description: '',
    picture_url: '',
  });
  const { description, name, picture_url, price } = dish;

  useEffect(() => {
    Products.getProduct(ProductId).then((prod) => {
      setDish({
        ...dish,
        name: prod.name,
        description: prod.description,
        price: prod.price,
        picture_url: prod.picture_url,
      });
    });
  }, []);

  return (
    <div>
      <Back>
        <Link onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </Link>
      </Back>
      <FoodContainer>
        <Image src={picture_url} alt={name} />
        <Information>
          <Info color={`${colors.black}`}>{name}</Info>
          <Info color={`${colors.orange}`}>${price / 100}</Info>
          <h3>Description</h3>
          <Info>{description}</Info>
        </Information>
      </FoodContainer>
    </div>
  );
};

export default Product;
