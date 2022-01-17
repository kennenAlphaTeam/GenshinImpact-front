import React, { useEffect, useState } from 'react';
import InputCookie from './InputCookie';
import { data } from '../data';

const App = () => {
  return <>{!data ? <InputCookie /> : <p>{data}</p>}</>;
};
export default App;
