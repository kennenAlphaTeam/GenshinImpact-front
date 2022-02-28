import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getResinDataAsync,
  selectResin,
} from '../../features/userresin/userresin';
import { selectData } from '../../features/userdata/userdata';
import styles from './PrivateProfile.module.css';
import Character, {
  CharacterProps,
} from './ProfileComponents/Character/Character';
import { Container, Grid } from '@mui/material';
import Profile from './ProfileComponents/Profile/Profile';
import Dailyitem from './ProfileComponents/DailyItems/Dailyitems';

function PrivateProfile() {
  return (
    <Grid className={styles.Main} container direction='column'>
      <Grid item>test1</Grid>
      <Container maxWidth='lg'>
        <Grid item container columns={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            searchbar
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item container columns={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Profile />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item container columns={12}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Dailyitem />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </Grid>
    // <div>
    //   <div className={styles.Profile}>
    //     <div className={styles.Nickname}>
    //       <h2>{data.handbook.nickname}</h2>
    //     </div>
    //     <div className={styles.Dailynote}>
    //       <ul>
    //         <li>
    //           레진:{' '}
    //           {resin !== null ? resin.resin : data.dailynote.current_resin}
    //         </li>
    //         <li>선계 코인: {data.dailynote.current_home_coin}</li>
    //         <li>남은 조사 횟수: {data.dailynote.max_expedition_num}</li>
    //         <li>
    //           일일 퀘스트:{' '}
    //           {data.dailynote.total_task_num - data.dailynote.finished_task_num}
    //           /{data.dailynote.total_task_num}
    //         </li>
    //       </ul>
    //     </div>
    //     <div className={styles.Stats}>
    //       <ul>
    //         <li>접속일: {data.profile.stats.active_day_number}</li>
    //         <li>달성한 업적 개수: {data.profile.stats.achievement_number}</li>
    //         <li>아바타 개수: {data.profile.stats.avatar_number}</li>
    //         <li>이번 나선비경 달성현황: {data.profile.stats.spiral_abyss}</li>
    //       </ul>
    //     </div>
    //     <div className={styles.Dailyfarming}>오늘 비경 소재는..</div>
    //     <div className={styles.CharacterList}>
    //       {data.characters.avatars.map((info: any) => (
    //         <Character key={info.id} data={info} />
    //       ))}
    //     </div>
    //     <div className={styles.CharacterList}></div>
    //   </div>
    // </div>
  );
}

export default PrivateProfile;
