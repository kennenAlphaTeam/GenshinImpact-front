import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getProfileAsync,
  GET_PROFILE_REQUEST,
} from '../../../../features/redux/constants/actionTypes';

function Searchbar() {
  const [uid, setUid] = useState<string>('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUid(e.target.value);

  const handleOnClick = () => {
    dispatch(getProfileAsync.request(uid));
  };

  const errorSlice = (error_string: string) => {
    const errorName = error_string.split(' ').pop();
    switch (errorName) {
      case '401':
        return '구글 소셜로그인에 문제가 발생했습니다';
      case '500':
        return '서버에 문제가 발생했습니다';
      default:
        return '잘못된 쿠키이거나 열람 불가능한 계정입니다';
    }
  };

  return (
    <div>
      <input type='text' name='' id='' onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
    </div>
  );
}

export default Searchbar;
