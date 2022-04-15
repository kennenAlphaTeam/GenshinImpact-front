import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './Errorpage.module.css';

const Errorpage = () => {
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => navigator('/intro'), 5000);
  }, []);

  return (
    <div className={styles.Body}>
      <div className={styles.BodyWidth}>
        <Grid container spacing={2} className={styles.Grid}>
          <Grid item xs />
          <Grid item xs={8}>
            <div className={styles.ErrorBox}>
              <div className={styles.ErrorIcon}>
                <img src='/img/icons/Error500.png' alt='' />
              </div>
              <div className={styles.ErrorText}>
                <div>이런..!</div>
                <div>서버에 문제가 발생했습니다</div>
                <div>500 - Internal Server Error</div>
                <div>잠시 후 메인페이지로 이동합니다</div>
              </div>
            </div>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    </div>
  );
};

export default Errorpage;
