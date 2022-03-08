import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { useSelector } from 'react-redux';
import { RootState } from './features/redux';

const App = () => {
  const data = useSelector((state: RootState) => state);
  return (
    <div className='main'>
      {data.cookie_data.cookie === '' ? <InputCookie /> : <PrivateProfile />}
    </div>
  );
};
export default App;
