import React, { useEffect, useState } from 'react';
import InputCookie from './InputCookie/InputCookie';
import PrivateProfile from './PrivateProfile/PrivateProfile';
import { selectData } from '../features/userdata/userdata';
import { useSelector } from 'react-redux';

const App = () => {
  const data = useSelector(selectData);
  return <div>{data ? <PrivateProfile /> : <InputCookie />}</div>;
};
export default App;
