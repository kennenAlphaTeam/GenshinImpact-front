import React, { useState } from 'react';
import { asyncSetCookie } from '../../features/redux/cookiedata/cookiedata';
import { useDispatch } from 'react-redux';
import {
  asyncGetPrivateData,
  asyncGetDaily,
} from '../../features/redux/profiledata/privatedata';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cookieSet } from '../../features/cookie/Cookie';
import { RootState } from '../../features/redux/reducers';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const dispatch = useDispatch();
  const cookiedata = useSelector((state: RootState) => state.cookie);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);

  const handleOnClick = async () => {
    dispatch(asyncSetCookie(cookieSlice(cookie)));
    dispatch(asyncGetPrivateData());
    dispatch(asyncGetDaily());
    Object.keys(cookiedata.res).find((key) => key === 'error')
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
