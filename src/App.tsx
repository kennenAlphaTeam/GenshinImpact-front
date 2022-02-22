import React, { useEffect, useState } from 'react';
import InputCookie from './components/InputCookie/InputCookie';
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import { selectData } from './features/userdata/userdata';
import { useSelector } from 'react-redux';

const App = () => {
  const data = useSelector(selectData);
  console.log('data is...' + JSON.stringify(data));
  console.log(Object.keys(data));
  return (
    <div className='main'>
      {Object.keys(data).length !== 0 ? <PrivateProfile /> : <InputCookie />}
    </div>
  );
};
export default App;
