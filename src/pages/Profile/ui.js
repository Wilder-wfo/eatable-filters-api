import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const ProfileContainer = styled.div`
  padding: 0 25px;
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
  }
`;

const UserDataDiv = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 14px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

  p {
    padding: 8px;
    border-bottom: 1px solid ${colors.background};
    color: rgba(0, 0, 0, 0.6);
    line-height: 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding: 2px;

  h3 {
    color: ${colors.black};
    font-size: ${typography.text.lg};
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${colors.orange};
    cursor: pointer;
    :hover {
      text-decoration: underline;
      transform: scale(1.05);
    }
  }
`;

const Header = styled.div`
  position: relative;
  a {
    position: absolute;
  }
  a svg {
    width: 20px;
    height: 20px;
  }
`;

export { UserDataDiv, TitleContainer, ProfileContainer, Header };
