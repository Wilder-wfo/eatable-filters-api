import styled from '@emotion/styled';
import { HiHome } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import React from 'react';
import { colors } from '../../styles/colors';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px 20px;
  background-image: radial-gradient(
    circle,
    ${colors.white} 0%,
    ${colors.gray.light} 100%
  );
  height: 50px;
  left: 0;
  right: 0;
  margin: auto;

  a {
    color: ${colors.gray.dark};
  }

  a.active {
    color: ${colors.orange};
    filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.8));
  }
`;

const IconHome = styled(HiHome)`
  width: 35px;
  height: 35px;
`;

const IconUser = styled(FaUser)`
  width: 30px;
  height: 30px;
`;

const status = ({ isActive }) => (isActive ? 'active' : '');

const Navigate = () => {
  return (
    <>
      <Nav>
        <NavLink to={'/'} className={status}>
          <IconHome />
        </NavLink>
        <NavLink to={'/profile'} className={status}>
          <IconUser />
        </NavLink>
      </Nav>
    </>
  );
};

export default Navigate;
