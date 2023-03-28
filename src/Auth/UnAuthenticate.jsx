import React, { useState } from 'react';
import eatable from '../assets/eatable.svg';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import { Eatable, LoginContainer, Nav, Paragraph, StyledLink } from './ui';

const UnAuthenticate = () => {
  const [active, setActive] = useState('login');

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const inLogin = active === 'login' ? 'active' : '';
  const isSignup = active === 'signup' ? 'active' : '';
  
  return (
    <LoginContainer>
      <Eatable>
        <img src={eatable} alt='Eatable' style={{ width: '200px' }} />
        <Paragraph>Foot for Everyone</Paragraph>
        <Nav>
          <Nav style={{ position: 'absolute', top: '40px' }}>
            <StyledLink className={inLogin} id={'login'} onClick={handleClick}>
              Login
            </StyledLink>
            <StyledLink
              className={isSignup}
              id={'signup'}
              onClick={handleClick}
            >
              Sign up
            </StyledLink>
          </Nav>
        </Nav>
      </Eatable>
      {active === 'login' ? <Login /> : <SignUp />}
    </LoginContainer>
  );
};

export default UnAuthenticate;
