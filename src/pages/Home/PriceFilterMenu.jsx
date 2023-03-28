import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import HomeContext from '../../contexts/HomeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  gap: 8px;
  /* regular/M */

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* black */

  color: #333333;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const DollarImg = styled.label`
  position: absolute;
  padding: 8px;
  color: #8e8e8e;
`;
const Input = styled.input`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 36px;
  gap: 8px;

  width: 102px;
  height: 36px;

  /* White */

  background: #ffffff;
  /* orange */

  border: 1px solid #fa4a0c;
  border-radius: 8px;
`;

export default function PriceFilterMenu() {
  const { setPrices, prices } = useContext(HomeContext);
  return (
    <Container>
      <span>Price</span>
      <InputsContainer>
        <div>
          <DollarImg htmlFor='min'>
            <RiMoneyDollarCircleFill />
          </DollarImg>
          <Input
            type='number'
            placeholder='min'
            id='min'
            value={prices.min}
            onChange={(e) =>
              setPrices({ min: e.target.value, max: prices.max })
            }
          />
        </div>
        -
        <div>
          <DollarImg htmlFor='max'>
            <RiMoneyDollarCircleFill />
          </DollarImg>
          <Input
            type='number'
            placeholder='max'
            id='max'
            value={prices.max}
            onChange={(e) =>
              setPrices({ min: prices.min, max: e.target.value })
            }
          />
        </div>
      </InputsContainer>
    </Container>
  );
}
