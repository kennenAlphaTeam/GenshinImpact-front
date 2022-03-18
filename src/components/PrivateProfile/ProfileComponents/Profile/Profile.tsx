import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Box, style } from '@mui/system';
import styles from './Profile.module.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../features/redux/reducers';
import {
  GET_MY_DAILY_REQUEST,
  GET_MY_PROFILE_REQUEST,
} from '../../../../features/redux/constants/actionTypes';
import { getMyProfile } from '../../../../features/redux/reducers/myprofile';
import { getMyDaily } from '../../../../features/redux/reducers/mydaily';

export default function Profile() {
  const dailyData: any = useSelector((state: RootState) => state.mydaily.data);
  const privateData: any = useSelector(
    (state: RootState) => state.myprofile.data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getMyProfile());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(getMyProfile());
    dispatch(getMyDaily());
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
          <br />
          {privateData.nickname}님
        </Typography>
      </Box>
      <Box className={styles.Resinbox}>
        <img src='img/icon-resin.png' alt='' className={styles.Icon} />
        <Box className={styles.Resin}>
          <Typography align='center' component='div' variant='inherit'>
            {dailyData.current_resin}/160
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
          {dailyData.current_home_coin}/{dailyData.max_home_coin}
        </Box>
      </Box>
    </Grid>
  );
}
