import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import {
  getProfileAsync,
  GO_TO_INTRO,
} from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';
import styles from './UidProfile.module.css';
import MondeIcon from '../../../img/icons/Monde.png';
import LiyueIcon from '../../../img/icons/Liyue.png';
import InazumaIcon from '../../../img/icons/Inazuma.png';

const Menubar = (props: any) => {
  const [uid, setUid] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUid(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (uid.length != 9) {
      alert('잘못된 UID입니다');
      return;
    }
    dispatch(getProfileAsync.request(uid));
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (uid.length != 9) {
        alert('잘못된 UID입니다');
        return;
      }
      dispatch(getProfileAsync.request(uid));
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: GO_TO_INTRO });
  };

  return (
    <div className={styles.AppBar}>
      <div className={styles.Searchbar}>
        <input
          type='number'
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          placeholder='인게임 UID를 입력해 주세요'></input>
        <div />
        <button onClick={handleOnClick}></button>
      </div>
    </div>
  );
};

const WorldExp = (props: any) => {
  if (Object.keys(props.state).length != 0) {
    interface WorldExpType {
      level: number;
      exploration_percentage: number;
      icon: string;
      name: string;
      type: number;
      offerings: [];
      id: number;
    }

    const state: WorldExpType[] = props.state.world_explorations;

    const monde = state.find((obj) => obj.name === '몬드');
    const liyue = state.find((obj) => obj.name === '리월');
    const inazuma = state.find((obj) => obj.name === '이나즈마');

    return (
      <div className={styles.WorldExpList}>
        <div className={styles.WorldExpBox}>
          <div className={styles.WorldBoxFilter}>
            <div>
              <img src={MondeIcon} alt='' className={styles.WorldIcon} />
              <div className={styles.WorldName}>몬드</div>
              <div className={styles.WorldLevel}>평판 레벨:{monde?.level}</div>
              <div className={styles.WorldProgress}>
                탐사 진행도:{' '}
                {monde && monde?.exploration_percentage / 10.0 + '%'}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.WorldExpBox}>
          <div className={styles.WorldBoxFilter}>
            <div>
              <img src={LiyueIcon} alt='' className={styles.WorldIcon} />
              <div className={styles.WorldName}>리월</div>
              <div className={styles.WorldLevel}>평판 레벨:{liyue?.level}</div>
              <div className={styles.WorldProgress}>
                탐사 진행도:{' '}
                {liyue && liyue.exploration_percentage / 10.0 + '%'}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.WorldExpBox}>
          <div className={styles.WorldBoxFilter}>
            <div>
              <img src={InazumaIcon} alt='' className={styles.WorldIcon} />
              <div className={styles.WorldName}>이나즈마</div>
              <div className={styles.WorldLevel}>
                평판 레벨:{inazuma?.level}
              </div>
              <div className={styles.WorldProgress}>
                탐사 진행도:{' '}
                {inazuma && inazuma.exploration_percentage / 10.0 + '%'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

const UidData = (props: any) => {
  if (Object.keys(props.state).length) {
    const state = props.state.stats;
    return (
      <div className={styles.MydataList}>
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.active_day_number}</div>
            <div>활동 일수</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.domain_number}</div>
            <div>비경 개방</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.achievement_number}</div>
            <div>업적 달성 개수</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.spiral_abyss}</div>
            <div>나선 비경</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.avatar_number}</div>
            <div>획득한 캐릭터</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.luxurious_chest_number}</div>
            <div>화려한 보물상자</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.way_point_number}</div>
            <div>워프 포인트</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.precious_chest_number}</div>
            <div>진귀한 보물상자</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.anemoculus_number}</div>
            <div>바람 신의 눈동자</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.exquisite_chest_number}</div>
            <div>정교한 보물상자</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.geoculus_number}</div>
            <div>바위 신의 눈동자</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.common_chest_number}</div>
            <div>평범한 보물상자</div>
          </div>
        </div>
        <div className={styles.MydataDivline} />
        <div className={styles.MydataTextBox}>
          <div className={styles.MydataText}>
            <div>{state.electroculus_number}</div>
            <div>번개 신의 눈동자</div>
          </div>
          <div className={styles.MydataText}>
            <div>{state.magic_chest_number}</div>
            <div>신묘한 보물상자</div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

const UidProfile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const uid = searchParams.get('uid');

  const data = useSelector((state: RootState) => state.uid_profile.data);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    uid !== null &&
      Object.keys(data).length === 0 &&
      dispatch(getProfileAsync.request(uid));
  }, []);

  useEffect(() => {
    if (Object.keys(data).length > 0 && data.uid !== uid) {
      navigator('/myprofile');
    }
  }, [data.uid]);

  return (
    <div className={styles.Body}>
      <div>
        <Grid container spacing={2} className={styles.Grid}>
          <Grid item xs />
          <Grid item xs={10}>
            <div className={styles.Mainbox}>
              <Menubar />
              <div className={styles.Divline}></div>
              <div className={styles.Uid}>UID:{data.uid}</div>
              <div className={styles.Divline}></div>
              <UidData state={data} />
              <div className={styles.Divline}></div>
              <WorldExp state={data} />
              <footer className={styles.Footer}>
                문의 메일: kennenalphateam@gmail.com
              </footer>
            </div>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    </div>
  );
};

export default UidProfile;
