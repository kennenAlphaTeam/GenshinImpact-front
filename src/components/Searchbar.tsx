import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProfileAsync,
  GO_TO_LOGIN,
} from '../features/redux/constants/actionTypes';
import { RootState } from '../features/redux/reducers';

const Searchbar = (props: any) => {
  const [uid, setUid] = useState('');
  const uidData: any = useSelector(
    (state: RootState) => state.uid_profile.data,
  );
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUid(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (uid.length != 9) {
      alert('잘못된 UID입니다');
      return;
    }
    dispatch(getProfileAsync.request(uid));
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (uid.length != 9) {
        alert('잘못된 UID입니다');
        return;
      }
      dispatch(getProfileAsync.request(uid));
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: GO_TO_LOGIN });
  };

  return (
    <div>
      <div>
        <input
          type='number'
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          placeholder='인게임 UID를 입력해 주세요'></input>
        <div />
        <button onClick={handleOnClick}></button>
      </div>
      <button onClick={handleLogout}></button>
    </div>
  );
};

export default Searchbar;
