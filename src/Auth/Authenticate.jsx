import React, { useState } from 'react';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigate from '../components/Navigate/Navigate';
import Update from '../pages/Profile/Update';
import Profile from '../pages/Profile/Profile';
import Product from '../pages/Dish/Product';

const Authenticate = () => {
  const [id, setId] = useState();

  const handleGetId = (value) => {
    setId(value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home getId={handleGetId} />} />
        <Route path='/products/:id' element={<Product ProductId={id} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/update' element={<Update />} />
      </Routes>
      <Navigate />
    </BrowserRouter>
  );
};

export default Authenticate;
