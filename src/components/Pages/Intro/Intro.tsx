import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.Body}>
      <div>
        <div>
          <img src='/img/icons/banner-tri.png'></img>Kenshin
        </div>
        <a href='api/auth/oauth/login/google'>구글 로그인</a>
      </div>
    </div>
  );
};

export default Intro;
