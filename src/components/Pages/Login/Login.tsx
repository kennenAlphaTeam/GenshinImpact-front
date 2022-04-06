import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCookieAsync } from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';

const Login = () => {
  const [cookie, setCookie] = useState<string>('');
  const dispatch = useDispatch();
  const error: any = useSelector((state: RootState) => state.cookie.data);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);

  const handleOnClick = () => {
    dispatch(fetchCookieAsync.request(cookieSlice(cookie)));
  };

  const cookieSlice = (cookie_string: string) => {
    const cookie_arr: string[] = cookie_string
      .split(' ')
      .map((str) => str.replace(/(\_g|cto).*/, ''));
    return cookie_arr.join(' ').trim();
  };

  const errorSlice = (error_string: string) => {
    const errorName = error_string.split(' ').pop();
    switch (errorName) {
      case '401':
        return '구글 소셜로그인에 문제가 발생했습니다';
      case '500':
        return '서버에 문제가 발생했습니다';
      default:
        return '잘못된 쿠키입니다';
    }
  };

  return (
    <div>
      <h3>Input HoyoLab cookie</h3>
      <h5>{error.message && errorSlice(error.message)}</h5>
      <label>Input</label>
      <input type='text' name='' id='' onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
    </div>
  );
};

export default Login;
