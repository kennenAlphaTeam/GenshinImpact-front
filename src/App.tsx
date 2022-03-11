import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { useSelector } from 'react-redux';
import { RootState } from './features/redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { cookieGet } from './features/cookie/Cookie';
import Login from './components/Login/Login';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/myprofile' element={<PrivateProfile />} />
        <Route path='/login' element={<InputCookie />} />
      </Routes>
    </div>
  );
};
export default App;
