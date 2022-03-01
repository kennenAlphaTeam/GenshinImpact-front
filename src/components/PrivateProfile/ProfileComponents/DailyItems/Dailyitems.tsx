import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import { dailydata } from './dailyData';
import styles from './Dailyitems.module.css';
export default function Dailyitem() {
  const date = new Date().getDate();
  const index = date === 0 ? 0 : date % 3 === 1 ? 0 : date % 3 === 2 ? 1 : 2;
  //0 1a 2b 3c 4a 5b 6c
  return (
    <div className={styles.Box}>
      <div className={styles.Fontdiv}>
        <Typography variant='inherit' align='left' component='div'>
          지금 얻을 수 있는 소재는...
        </Typography>
      </div>
      <div className={styles.Imagediv}>
        <Grid className={styles.Imagebox} item container columns={6}>
          <Grid item xs={1}>
            <img src={dailydata[index].monde_book} alt='' />
          </Grid>
          <Grid item xs={1}>
            <img src={dailydata[index].liyue_book} alt='' />
          </Grid>
          <Grid item xs={1}>
            <img src={dailydata[index].inazuma_book} alt='' />
          </Grid>
          <Grid item xs={1}>
            <img src={dailydata[index].monde_material} alt='' />
          </Grid>
          <Grid item xs={1}>
            <img src={dailydata[index].liyue_material} alt='' />
          </Grid>
          <Grid item xs={1}>
            <img src={dailydata[index].inazuma_material} alt='' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
