import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { selectData } from './features/userdata/userdata';
import { useSelector } from 'react-redux';

const App = () => {
  const data = useSelector(selectData);
  return (
    <div className='main'>{data ? <PrivateProfile /> : <InputCookie />}</div>
  );
};
export default App;
