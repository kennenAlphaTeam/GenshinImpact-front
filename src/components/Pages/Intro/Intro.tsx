import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.Body}>
      <div>
        <div>
          <img src='img/banner-tri.png'></img>Kenshin
        </div>
        <a href='https://localhost:8080/auth/oauth/login/google'>구글 로그인</a>
      </div>
    </div>
  );
};

export default Intro;
