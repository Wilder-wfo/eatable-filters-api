import styled from '@emotion/styled';
import { typography } from '../../styles';

const FoodContainer = styled.div`
  height: 80vh;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  padding: 0 30px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  position: absolute;
  margin-top: -50px;
`;

const Information = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Info = styled.p`
  color: ${(props) => props.color};
  text-align: justify;
  margin: 4px 0;
  padding: 0 2px;

  :nth-of-type(3n + 1),
  :nth-of-type(3n + 2) {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  :nth-of-type(3n + 3) {
    font-weight: 400;
    ${typography.text.xl}
  }
`;

const Back = styled.div`
  a svg {
    width: 20px;
    height: 20px;
  }
`;

export { FoodContainer, Image, Information, Info, Back };
