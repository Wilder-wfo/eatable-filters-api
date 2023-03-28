import styled from '@emotion/styled';
import { colors, typography } from '../styles';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eatable = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  gap: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-image: radial-gradient(
    circle,
    ${colors.white} 0%,
    ${colors.gray.light} 100%
  );
`;

const Paragraph = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 86.84%;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${colors.orange};
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledLink = styled.button`
  ${typography.text.lg}
  border: none;
  width: 130px;
  padding: 8px;
  font-weight: 600;
  letter-spacing: 0.8px;
  background: transparent;
  &.active {
    border-bottom: 4px solid ${colors.orange};
  }
`;

export { LoginContainer, Eatable, Paragraph, Nav, StyledLink };
