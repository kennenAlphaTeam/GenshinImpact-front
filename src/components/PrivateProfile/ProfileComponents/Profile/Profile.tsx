import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Box, style } from '@mui/system';
import styles from './Profile.module.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetPrivateData,
  asyncGetDaily,
} from '../../../../features/redux/profiledata/privatedata';
import { asyncGetPublicData } from '../../../../features/redux/profiledata/publicdata';
import { RootState } from '../../../../features/redux';

export default function Profile() {
  const dailyData: any = useSelector(
    (state: RootState) => state.private_data.daily_data,
  );
  const privateData: any = useSelector(
    (state: RootState) => state.private_data.private_data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(asyncGetDaily());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(asyncGetPrivateData());
    dispatch(asyncGetDaily());
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
