import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/myprofile' element={<PrivateProfile />} />
        <Route path='/login' element={<InputCookie />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
