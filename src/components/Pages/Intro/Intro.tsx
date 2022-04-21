import React, { useEffect } from 'react';
import styles from './Intro.module.css';
import BannerTri from '../../../img/icons/banner-tri.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMyIDCardAsync } from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';

const Intro = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.is_login.is_login);
  useEffect(() => {
    isLogin && dispatch(getMyIDCardAsync.request());
  }, []);
  return (
    <div className={styles.Body}>
      <div>
        <div>
          <img src={BannerTri}></img>
          <div>Kenshin</div>
        </div>
        <a href='api/auth/oauth/login/google'>구글 로그인</a>
      </div>
    </div>
  );
};

export default Intro;
