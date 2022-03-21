import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cookieSet } from '../../features/cookie/Cookie';
import { RootState } from '../../features/redux/reducers';
import {
  getMyDailyAsync,
  getMyProfileAsync,
} from '../../features/redux/constants/actionTypes';
import { getMyCookie } from '../../features/redux/reducers/cookie';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const dispatch = useDispatch();
  const cookiedata = useSelector((state: RootState) => state.cookie);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);

  const handleOnClick = async () => {
    dispatch(getMyCookie(cookie));
    dispatch(getMyProfileAsync.request());
    dispatch(getMyDailyAsync.request());
    Object.keys(cookiedata.cookie).find((key) => key === 'error')
      ? navigate('/login')
      : (navigate('/myprofile'), cookieSet('myCookie', cookie));
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
