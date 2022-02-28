import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import { dailydata } from './dailyData';
export default function Dailyitem() {
  const date = new Date().getDate();
  const index = date === 0 ? 0 : date % 3 === 1 ? 0 : date % 3 === 2 ? 1 : 2;
  //0 1a 2b 3c 4a 5b 6c
  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='inherit' align='left' component='div'>
          지금 얻을 수 있는 소재는...
        </Typography>
      </Grid>
      <Grid item container columns={6} spacing={1} margin={1}>
        <Grid item xs={1}>
          <img src={dailydata[index].monde_book} alt='' />
        </Grid>
        <Grid xs={1}>
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
    </Grid>
  );
}
