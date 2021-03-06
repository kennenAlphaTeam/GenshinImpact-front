import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchCookieAsync } from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';
import styles from './Login.module.css';
import ExampleImg from '../../../img/example4.png';

const Login = () => {
  const [cookie, setCookie] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const dispatch = useDispatch();
  const error: any = useSelector((state: RootState) => state.cookie.data);
  const navigator = useNavigate();

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
        navigator('/api/auth/oauth/login/google');
        return '구글 소셜로그인에 문제가 발생했습니다';
      case '500':
        navigator('/error');
        return '서버에 문제가 발생했습니다';
      default:
        return '잘못되거나 전적 조회 불가능한 쿠키입니다';
    }
  };

  const expOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (check) setCheck(false);
    else setCheck(true);
  };

  return (
    <div className={styles.Body}>
      <div>
        <Grid
          container
          spacing={{ xs: 0.5, md: 2 }}
          columns={{ xs: 6, md: 12 }}
          className={styles.Gird}>
          <Grid xs item />
          <Grid xs={4} md={6} item>
            <div className={styles.LoginBox}>
              <div>
                <div>쿠키를 입력해 주세요</div>
                <a
                  className={styles.Caution}
                  href='https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&v=101&gid=2&utm_source=tools&bbs_theme=light&bbs_theme_device=1#/ys/set'>
                  !!전적조회 설정은 여기서!!
                </a>
                <div className={styles.Howto}>
                  <div
                    className={[styles.Infobox, check && styles.InfoboxOn].join(
                      ' ',
                    )}>
                    <div className={styles.Divline} />
                    <img src={ExampleImg}></img>
                    <div className={styles.Divline} />
                    <div className={styles.Help}>
                      1. 호요랩 원신 전적 페이지에 들어갑니다.(
                      <a href='https://webstatic-sea.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&v=101&gid=2&utm_source=tools&bbs_theme=light&bbs_theme_device=1#/ys'>
                        페이지 열기
                      </a>
                      )
                    </div>
                    <div className={styles.Help}>
                      2. 브라우저 개발자 도구를 엽니다.
                    </div>
                    <div className={styles.Help}>
                      3. 개발자 도구의 상단에서 Console을 선택합니다.
                    </div>
                    <div className={styles.Help}>
                      4. 콘솔에 document.cookie를 입력시 쿠키가 나옵니다.
                    </div>
                    <div className={styles.Help}>
                      5. cookie값을 복사해서 아래 칸에 붙여넣어주면 끝!
                    </div>
                    <div className={styles.Divline} />
                  </div>
                  <button className={styles.Line} onClick={expOnClick}>
                    {!check ? '쿠키 얻는 방법 확인하기' : '닫기'}
                  </button>
                </div>
                <div className={styles.Searchbar}>
                  <input
                    type='text'
                    placeholder='Cookie를 입력해 주세요'
                    onChange={handleOnChange}
                  />
                  <div />
                  <button onClick={handleOnClick}>Submit</button>
                </div>
                <div>{error.message && errorSlice(error.message)}</div>
              </div>
            </div>
          </Grid>
          <Grid xs item />
        </Grid>
      </div>
    </div>
  );
};

export default Login;
