import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getResinDataAsync,
  selectResin,
} from '../../features/userresin/userresin';
import { selectData } from '../../features/userdata/userdata';
import styles from './PrivateProfile.module.css';

function PrivateProfile() {
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
    <div>
      <div className={styles.Profile}>
        <div className={styles.Nickname}>
          <h2>{data.handbook.nickname}</h2>
        </div>
        <div className={styles.Dailynote}>
          <ul>
            <li>
              레진:{' '}
              {resin !== null ? resin.resin : data.dailynote.current_resin}
            </li>
            <li>선계 코인: {data.dailynote.current_home_coin}</li>
            <li>남은 조사 횟수: {data.dailynote.max_expedition_num}</li>
            <li>
              일일 퀘스트:{' '}
              {data.dailynote.total_task_num - data.dailynote.finished_task_num}
              /{data.dailynote.total_task_num}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivateProfile;
