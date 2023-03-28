import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../components/Form/ui';
import { colors } from '../../styles';
import { useAuth } from '../../useContext/useContext';
import { ProfileContainer, TitleContainer, UserDataDiv } from './ui';

const Profile = () => {
  const { user, logout } = useAuth();
  const { name, email, phone, address } = user;

  function handleLogout() {
    logout();
  }

  return (
    <ProfileContainer>
      <h2>My Profile</h2>
      <>
        <TitleContainer>
          <h3>Personal details</h3>
          <Link to={'update'}>Change</Link>
        </TitleContainer>
        <UserDataDiv>
          <p
            style={{
              fontSize: '24px',
              lineHeight: '23px',
              color: `${colors.black}`,
              fontWeight: '600',
              borderBottom: 'none',
            }}
          >
            {name || 'add your name'}
          </p>
          <p>{email}</p>
          <p>{phone}</p>
          <p style={{ borderBottom: 'none' }}>
            {address || 'add your address'}
          </p>
        </UserDataDiv>
        <>
          <StyledButton
            style={{ width: '100%', marginTop: '350px' }}
            onClick={handleLogout}
          >
            log out
          </StyledButton>
        </>
      </>
    </ProfileContainer>
  );
};

export default Profile;
