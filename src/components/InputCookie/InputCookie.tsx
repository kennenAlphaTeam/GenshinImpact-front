import React, { useState } from 'react';
import { asyncSetCookie } from '../../features/redux/cookiedata/cookiedata';
import { useDispatch } from 'react-redux';
import {
  asyncGetPrivateData,
  asyncGetDaily,
} from '../../features/redux/profiledata/privatedata';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);

  const handleOnClick = () => {
    dispatch(asyncSetCookie(cookieSlice(cookie)));
    dispatch(asyncGetPrivateData(825460402));
    dispatch(asyncGetDaily());
  };

  const cookieSlice = (cookie_string: string) => {
    const cookie_arr: string[] = cookie_string
      .split(' ')
      .map((str) => str.replace(/(\_g|cto).*/, ''));
    return cookie_arr.join(' ').trim();
  };

  return (
    <div>
      <h3>Input HoyoLab cookie</h3>
      <label>Input</label>
      <input type='text' name='' id='' onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
    </div>
  );
}

export default InputCookie;
