import styled from '@emotion/styled/types/base';
import {
  AppBar,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
} from '@mui/material';
import React from 'react';
import styles from './MyProfile.module.css';

const Menubar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

const Userdata = () => {
  return <></>;
};

const Dailydata = () => {
  return <></>;
};

const TodayMaterials = () => {
  return <></>;
};

const WorldExp = () => {
  return <></>;
};

const MyProfile = () => {
  return (
    <div className={styles.Test}>
      <main className={styles.Profile}>
        <div className={styles.ProfileGrid}>
          <Grid container spacing={2} className={styles.Grid}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              <div className={styles.Nickname}>콜라피스도살자</div>
              <div className={styles.Uid}>UID:825460402</div>
              <div>Test Text</div>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default MyProfile;
