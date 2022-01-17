import React, { useState } from 'react';
import { getPrivateData } from '../data';

function InputCookie() {
  const [cookie, setCookie] = useState<string>('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCookie(e.target.value);
  const handleOnClick = () => {
    getPrivateData(cookie);
    console.log('Sending cookie');
  };

  return (
    <div>
      <h3>Input HoyoLab cookie</h3>
      <label>Input</label>
      <input type='text' name='' id='' onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
      <p>{cookie}</p>
    </div>
  );
}

InputCookie.defaultProps = {
  cookie: 'testCookie',
};

export default InputCookie;
