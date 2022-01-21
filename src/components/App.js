import React, { useEffect, useState } from 'react';
import InputCookie from './InputCookie';
import PrivateProfile from './PrivateProfile';

const App = () => {
  return (
    <div>
      <InputCookie />
      <PrivateProfile></PrivateProfile>
    </div>
  );
};
export default App;
