import React from 'react';
import { useNavigate } from 'react-router';
import BannerTri from '../assets/icons/BannerTri.png';
import useOnChange from '../hooks/useOnChange';

const Searchbar = (props: any) => {
  const [uid, uidChange] = useOnChange('');
  const navigate = useNavigate();

  return (
    <div>
      <img src={BannerTri} alt='' />
      <div>
        <input
          type='number'
          onChange={uidChange}
          onKeyUp={(e) =>
            e.key === 'Enter' && uid.length != 9
              ? alert('잘못된 UID입니다')
              : navigate(`/profile/${uid}`)
          }
          placeholder='인게임 UID를 입력해 주세요'></input>
        <div />
        <button
          onClick={() =>
            uid.length != 9
              ? alert('잘못된 UID입니다')
              : navigate(`/profile/${uid}`)
          }></button>
      </div>
      <button onClick={() => navigate('/login')}></button>
    </div>
  );
};

export default Searchbar;
