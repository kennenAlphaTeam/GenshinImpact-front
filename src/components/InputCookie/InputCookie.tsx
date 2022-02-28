import React, { useState } from 'react';
import {
  getPrivateDataAsync,
  selectData,
} from '../../features/userdata/userdata';
import { useDispatch, useSelector } from 'react-redux';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const handleOnClick = () => {
    localStorage.setItem('cookie', cookie);
    dispatch(getPrivateDataAsync(cookie));
  };
  const localdata = localStorage.getItem('cookie');
  if (localdata) dispatch(getPrivateDataAsync(localdata));

  return (
    <div>
      <h3>Input HoyoLab cookie</h3>
      <label>Input</label>
      <input type='text' name='' id='' onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
    </div>
  );
}

InputCookie.defaultProps = {
  cookie: 'testCookie',
};

export default InputCookie;