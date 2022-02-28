import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Box, style } from '@mui/system';
import styles from './Profile.module.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getResinDataAsync,
  selectResin,
} from '../../../../features/userresin/userresin';
import { selectData } from '../../../../features/userdata/userdata';

export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const resin = useSelector(selectResin);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getResinDataAsync());
    }, 24000);
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
          <br />
          {data.handbook.nickname}님
        </Typography>
      </Box>
      <Box className={styles.Resinbox}>
        <img src='img/icon-resin.png' alt='' className={styles.Icon} />
        <Box className={styles.Resin}>
          <Typography align='center' component='div' variant='inherit'>
            {resin.resin ? resin.resin : data.dailynote.current_resin}/160
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src='img/icon-pot.png' alt='' className={styles.Icon} />
        <Box className={styles.Home}>
          <Typography align='center' component='div' variant='inherit'>
            {resin.home_coin
              ? resin.home_coin
              : data.dailynote.current_home_coin}
            /{data.dailynote.max_home_coin}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
