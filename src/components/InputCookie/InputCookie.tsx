import React, { useState } from 'react';
import { asyncSetCookie } from '../../features/redux/cookiedata/cookiedata';
import { useDispatch } from 'react-redux';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);

  const handleOnClick = () => {
    dispatch(asyncSetCookie(cookie));
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
