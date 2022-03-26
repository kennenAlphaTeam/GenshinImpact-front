import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/myprofile' element={<PrivateProfile />} />
        <Route path='/input-cookie' element={<InputCookie />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate replace to='/myprofile' />} />
      </Routes>
    </div>
  );
};
export default App;
