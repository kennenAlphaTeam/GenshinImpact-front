import styled from '@emotion/styled/types/base';
import {
  AppBar,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
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
  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs></Grid>
      <Grid item xs={8}>
        <div className={styles.Nickname}>콜라피스도살자</div>
        <div className={styles.Uid}>UID:825460402</div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

const Dailydata = () => {
  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs></Grid>
      <Grid item xs={4}>
        <div className={styles.Daily}>
          <div className={styles.DailyBanner}>
            <div>
              <img
                src='img/icons/icon-resin.png'
                className={styles.DailyiconResin}
              />
            </div>
            <div>160/160</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img src='img/icons/icon-pot.png' className={styles.Dailyicon} />
            </div>
            <div>2400/2400</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img
                src='img/icons/icon-dailyquest.png'
                className={styles.Dailyicon}
              />
            </div>
            <div>4/4</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img
                src='img/icons/icon-expedition.png'
                className={styles.Dailyicon}
              />
            </div>
            <div>5/5</div>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

const TodayMaterials = () => {
  const date = new Date().getDate();
  const index = date === 0 ? 0 : date % 3 === 1 ? 0 : date % 3 === 2 ? 1 : 2;

  const dailydata = [
    {
      id: 0,
      monde_book: 'img/materials/freedom.png',
      liyue_book: 'img/materials/prosperity.png',
      inazuma_book: 'img/materials/transience.png',
      monde_material: 'img/materials/dream.png',
      liyue_material: 'img/materials/guyun.png',
      inazuma_material: 'img/materials/sea.png',
    },
    {
      id: 1,
      monde_book: 'img/materials/resistance.png',
      liyue_book: 'img/materials/diligence.png',
      inazuma_book: 'img/materials/elegance.png',
      monde_material: 'img/materials/nostalgia.png',
      liyue_material: 'img/materials/elixir.png',
      inazuma_material: 'img/materials/valor.png',
    },
    {
      id: 2,
      monde_book: 'img/materials/ballad.png',
      liyue_book: 'img/materials/gold.png',
      inazuma_book: 'img/materials/light.png',
      monde_material: 'img/materials/gladiator.png',
      liyue_material: 'img/materials/aerosiderite.png',
      inazuma_material: 'img/materials/kijin.png',
    },
  ];

  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs></Grid>
      <Grid item xs={8}>
        <div className={styles.MaterialList}>
          <div>
            <div className={styles.MaterialText}>
              오늘 얻을 수 있는 소재는...
              <div className={styles.MaterialTextUnder}></div>
            </div>
            <div className={styles.MaterialItems}>
              <img src={dailydata[index].monde_book} alt='' />
              <img src={dailydata[index].liyue_book} alt='' />
              <img src={dailydata[index].inazuma_book} alt='' />
              <img src={dailydata[index].monde_material} alt='' />
              <img src={dailydata[index].liyue_material} alt='' />
              <img src={dailydata[index].inazuma_book} alt='' />
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

const WorldExp = () => {
  return <></>;
};

const MyProfile = () => {
  return (
    <div className={styles.Test}>
      <main className={styles.Profile}>
        <div className={styles.ProfileGrid}>
          <Userdata />
          <Dailydata />
        </div>
      </main>
      <div className={styles.Materials}>
        <div className={styles.MaterialsGrid}>
          <TodayMaterials />
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
