import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { StyledButton } from '../../components/Form/ui';
import Input from '../../components/Input/Input';
import { useAuth } from '../../useContext/useContext';
import { Header, ProfileContainer, TitleContainer, UserDataDiv } from './ui';

const Update = () => {
  const navigate = useNavigate();
  const { user, upDate } = useAuth();
  const { name, email, phone, address } = user;

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    upDate(data);
  };

  return (
    <ProfileContainer>
      <Header>
        <Link onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </Link>
        <h2>My Profile</h2>
      </Header>
      <>
        <TitleContainer>
          <h3>Update personal details</h3>
        </TitleContainer>
        <form onSubmit={handleSubmit}>
          <UserDataDiv>
            <Input
              label={'Name'}
              name={'name'}
              id={'name'}
              placeholder={name}
              onChange={handleChange}
            />
            <Input
              label={'Email'}
              name={'email'}
              id={'email'}
              placeholder={email}
              onChange={handleChange}
            />
            <Input
              label={'Phone'}
              name={'phone'}
              id={'phone'}
              placeholder={phone}
              onChange={handleChange}
            />
            <Input
              label={'Address'}
              name={'address'}
              id={'address'}
              placeholder={address}
              onChange={handleChange}
            />
          </UserDataDiv>
          <>
            <StyledButton style={{ width: '100%', marginTop: '200px' }}>
              Update
            </StyledButton>
          </>
        </form>
      </>
    </ProfileContainer>
  );
};

export default Update;
