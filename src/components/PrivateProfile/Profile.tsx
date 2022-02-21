import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getResinDataAsync,
  selectResin,
} from '../../features/userresin/userresin';
import { selectData } from '../../features/userdata/userdata';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import styles from './Profile.module.css';

export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const resin = useSelector(selectResin);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getResinDataAsync());
    }, 240000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Grid container direction='column'>
      <Box>
        <img className={styles.Icon} src='img/banner-tri.png' />
      </Box>
    </Grid>
  );
}
