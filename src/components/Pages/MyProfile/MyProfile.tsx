import { AppBar, Grid, Toolbar } from '@mui/material';
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
  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <div className={styles.WorldExpList}>
          <div className={styles.WorldExpBox}>
            <div className={styles.WorldBoxFilter}>
              <div>
                <img
                  src='img/icons/Monde.png'
                  alt=''
                  className={styles.WorldIcon}
                />
                <div className={styles.WorldName}>몬드</div>
                <div className={styles.WorldLevel}>평판 레벨:8</div>
                <div className={styles.WorldProgress}>탐사 진행도: 86.9%</div>
              </div>
            </div>
          </div>
          <div className={styles.WorldExpBox}>
            <div className={styles.WorldBoxFilter}>
              <div>
                <img
                  src='img/icons/Liyue.png'
                  alt=''
                  className={styles.WorldIcon}
                />
                <div className={styles.WorldName}>리월</div>
                <div className={styles.WorldLevel}>평판 레벨:8</div>
                <div className={styles.WorldProgress}>탐사 진행도: 86.9%</div>
              </div>
            </div>
          </div>
          <div className={styles.WorldExpBox}>
            <div className={styles.WorldBoxFilter}>
              <div>
                <img
                  src='img/icons/Inazuma.png'
                  alt=''
                  className={styles.WorldIcon}
                />
                <div className={styles.WorldName}>이나즈마</div>
                <div className={styles.WorldLevel}>평판 레벨:8</div>
                <div className={styles.WorldProgress}>탐사 진행도: 86.9%</div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

const MyData = () => {
  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs />
      <Grid item xs={8}>
        <div className={styles.MydataList}>
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>245</div>
              <div>활동 일수</div>
            </div>
            <div className={styles.MydataText}>
              <div>31</div>
              <div>비경 개방</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>344</div>
              <div>업적 달성 개수</div>
            </div>
            <div className={styles.MydataText}>
              <div>12-3</div>
              <div>나선 비경</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>35</div>
              <div>획득한 캐릭터</div>
            </div>
            <div className={styles.MydataText}>
              <div>92</div>
              <div>화려한 보물상자</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>159</div>
              <div>워프 포인트</div>
            </div>
            <div className={styles.MydataText}>
              <div>205</div>
              <div>진귀한 보물상자</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>65</div>
              <div>바람 신의 눈동자</div>
            </div>
            <div className={styles.MydataText}>
              <div>577</div>
              <div>정교한 보물상자</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>131</div>
              <div>바위 신의 눈동자</div>
            </div>
            <div className={styles.MydataText}>
              <div>674</div>
              <div>평범한 보물상자</div>
            </div>
          </div>
          <div className={styles.MydataDivline} />
          <div className={styles.MydataTextBox}>
            <div className={styles.MydataText}>
              <div>180</div>
              <div>번개 신의 눈동자</div>
            </div>
            <div className={styles.MydataText}>
              <div>14</div>
              <div>신묘한 보물상자</div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs />
    </Grid>
  );
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
      <div className={styles.BlackBg}>
        <div className={styles.Worlds}>
          <div className={styles.WorldsGrid}>
            <WorldExp />
          </div>
        </div>
        <div className={styles.Contour}></div>
        <div className={styles.Myinfo}>
          <div className={styles.MyinfoGrid}>
            <MyData />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
