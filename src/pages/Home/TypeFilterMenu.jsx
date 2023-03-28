import styled from '@emotion/styled';
import { useContext, useEffect, useReducer, useState } from 'react';
import HomeContext from '../../contexts/HomeContext';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  overflow: auto;
`;
const Item = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  padding: 0 8.5px 10px 8.5px;
  color: ${(props) => (props.selected ? '#FA4A0C' : '#9A9A9D')};
  border-bottom: ${(props) => (props.selected ? 'solid' : 'none')};
  cursor: pointer;
  ${(props) =>
    props.selected && 'box-shadow: 0px 4px 4px rgba(196, 63, 21, 0.1);'};
`;
function ItemFilterMenu({ name, selected = false, dispatch }) {
  return (
    <Item
      selected={selected}
      onClick={() => dispatch({ type: 'setSelected', name: name })}
    >
      {name}
    </Item>
  );
}
function toTitle(text) {
  return text
    .split('')
    .map((l, i) => (i == 0 ? l.toUpperCase() : l))
    .join('');
}

export default function TypeFilterMenu() {
  const { categories, dispatch } = useContext(HomeContext);

  return (
    <Container>
      {categories.map((category, index) => {
        return (
          <ItemFilterMenu
            key={category.name}
            name={category.name}
            selected={category.selected}
            dispatch={dispatch}
          />
        );
      })}
    </Container>
  );
}
