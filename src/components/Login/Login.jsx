import React, { useState } from 'react';
import { useAuth } from '../../useContext/useContext';
import Form from '../Form/Form';

const Login = () => {
  const { login } = useAuth();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginData);
  };

  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        Login
      </Form>
    </div>
  );
};

export default Login;
