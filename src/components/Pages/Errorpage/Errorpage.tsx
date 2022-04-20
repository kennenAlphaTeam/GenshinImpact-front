import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './Errorpage.module.css';
import ErrorIcon from '../../../img/icons/Error500.png';

const Errorpage = () => {
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => navigator('/intro'), 500000);
  }, []);

  return (
    <div className={styles.Body}>
      <div className={styles.BodyWidth}>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={styles.Grid}>
          <Grid item xs />
          <Grid item xs={10} sm={10} md={8} lg={8}>
            <div className={styles.ErrorBox}>
              <div className={styles.ErrorIcon}>
                <img src={ErrorIcon} alt='' />
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
