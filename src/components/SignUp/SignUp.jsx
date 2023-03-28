import React, { useState } from 'react';
import { useAuth } from '../../useContext/useContext';
import Form from '../Form/Form';

const SignUp = () => {
  const { signUp } = useAuth();

  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(signUpData);
  };
  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        Sign up
      </Form>
    </div>
  );
};

export default SignUp;
