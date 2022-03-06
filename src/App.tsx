import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { useSelector } from 'react-redux';
import { RootState } from './features/redux';

const App = () => {
  const cookie = useSelector((state: RootState) => state.cookieReducer.cookie);
  return (
    <div className='main'>
      {cookie === '' ? <InputCookie /> : <PrivateProfile />}
    </div>
  );
};
export default App;
