import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { useSelector } from 'react-redux';
import { RootState } from './features/redux';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const data = useSelector((state: RootState) => state);
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<PrivateProfile />} />
        <Route path='/inputcookie' element={<InputCookie />} />
      </Routes>
    </div>
  );
};
export default App;
