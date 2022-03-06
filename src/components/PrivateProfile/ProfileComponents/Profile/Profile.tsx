import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Box, style } from '@mui/system';
import styles from './Profile.module.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetData,
  asyncGetDaily,
} from '../../../../features/redux/profiledata/profiledata';
import { RootState } from '../../../../features/redux';

export default function Profile() {
  const { private_data, daily_data, status } = useSelector(
    (state: RootState) => state.privateReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(asyncGetDaily());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Grid className={styles.Main} container direction='column'>
      <Box className={styles.Logobox}>
        <img className={styles.Logo} src='img/banner-tri.png' />
      </Box>
      <Box className={styles.Namebox}>
        <Typography
          align='center'
          component='div'
          className={styles.Name}
          variant='inherit'>
          어서오세요
          <br />님
        </Typography>
      </Box>
      <Box className={styles.Resinbox}>
        <img src='img/icon-resin.png' alt='' className={styles.Icon} />
        <Box className={styles.Resin}>
          <Typography align='center' component='div' variant='inherit'>
            /160
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src='img/icon-pot.png' alt='' className={styles.Icon} />
        <Box className={styles.Home}>
          <Typography
            align='center'
            component='div'
            variant='inherit'></Typography>
        </Box>
      </Box>
    </Grid>
  );
}
