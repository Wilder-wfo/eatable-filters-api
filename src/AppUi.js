import styled from "@emotion/styled";
import { colors } from "./styles";


const Section = styled.section`
  margin: 30px auto;
`;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  position: relative;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 262px;
  height: 262px;
  border-radius: 100%;
  background-color: ${colors.white};
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
  gap: 20px;

  p {
    color: ${colors.orange};
    font-weight: 600;
    font-size: 10px;
    line-height: 86.84%;
  }
`;

const Description = styled.p``;

const Bg = styled.img`
  position: absolute;
  z-index: -10;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LoadingContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = styled.div`
  width: 64px;
  height: 64px;
  border: 2px solid;
  border-color: ${colors.orange} ${colors.orange} ${colors.orange} transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {Section, Container, Circle, Description, Bg, LoadingContainer, Loading}