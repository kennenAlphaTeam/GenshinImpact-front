import { Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Character,
  CharacterProfile,
  DailyProfile,
  DataProfile,
  Reliquaries,
} from '../../../api/data';
import {
  getMyCharacterAsync,
  getMyDailyAsync,
  getMyProfileAsync,
  getProfileAsync,
  GO_TO_INTRO,
} from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';
import styles from './MyProfile.module.css';
import SwiperCore from 'swiper';

const Menubar = (props: any) => {
  const [uid, setUid] = useState('');
  const uidData: any = useSelector(
    (state: RootState) => state.uid_profile.data,
  );
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
    <div
      className={[styles.AppBar, props.opacity && styles.AppBarOff].join(' ')}>
      <img src='img/icons/banner-tri.png' alt='' />
      <div className={styles.Searchbar}>
        <input
          type='number'
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          placeholder='인게임 UID를 입력해 주세요'></input>
        <div />
        <button onClick={handleOnClick}></button>
      </div>
      <button className={styles.LogoutButton} onClick={handleLogout}>
        <img src='img/icons/Logout.png' alt='' className={styles.Logout} />
      </button>
    </div>
  );
};

const GoTop = (props: any) => {
  const handleScroll = (e: React.MouseEvent) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScroll}
      className={[
        styles.TopButtonPos,
        props.opacity && styles.TopButtonPosOff,
      ].join(' ')}>
      <img
        src='img/icons/icon-gototop.png'
        className={[
          styles.TopButton,
          props.opacity && styles.TopButtonOff,
        ].join(' ')}
        alt=''
      />
    </button>
  );
};

const Userdata = (props: any) => {
  const state = props.state;
  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs></Grid>
      <Grid item xs={8}>
        <div className={styles.Nickname}>{state.nickname}</div>
        <div className={styles.Uid}>UID:{state.genshinUid}</div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

const Dailydata = (props: any) => {
  const state = props.state;
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
            <div>{state.current_resin}/160</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img src='img/icons/icon-pot.png' className={styles.Dailyicon} />
            </div>
            <div>{state.current_home_coin}/2400</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img
                src='img/icons/icon-dailyquest.png'
                className={styles.Dailyicon}
              />
            </div>
            <div>{state.finished_task_num}/4</div>
          </div>
          <div className={styles.Divline}></div>
          <div className={styles.DailyBanner}>
            <div>
              <img
                src='img/icons/icon-expedition.png'
                className={styles.Dailyicon}
              />
            </div>
            <div>{state.current_expedition_num}/5</div>
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
                  <div className={styles.WorldLevel}>
                    평판 레벨:{monde?.level}
                  </div>
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
                  <img
                    src='img/icons/Liyue.png'
                    alt=''
                    className={styles.WorldIcon}
                  />
                  <div className={styles.WorldName}>리월</div>
                  <div className={styles.WorldLevel}>
                    평판 레벨:{liyue?.level}
                  </div>
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
                  <img
                    src='img/icons/Inazuma.png'
                    alt=''
                    className={styles.WorldIcon}
                  />
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
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  }
  return <></>;
};

const MyData = (props: any) => {
  if (Object.keys(props.state).length) {
    const state = props.state.stats;
    return (
      <Grid container spacing={2} className={styles.Grid}>
        <Grid item xs />
        <Grid item xs={8}>
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
        </Grid>
        <Grid item xs />
      </Grid>
    );
  }
  return <></>;
};

const CheckedCharacter = (props: any) => {
  if (props.state === undefined) return <></>;
  if (props.state.reliquaries === undefined) return <></>;
  const state: Character = props.state;
  const reliq: Array<Reliquaries> = state.reliquaries;
  return (
    <div className={styles.CharacterInfo}>
      <div className={styles.CharacterInfoBox}>
        <div className={styles.CharacterInfoName}>{state.name}</div>
        <div className={styles.CharacterInfoContour} />
        <div className={styles.CharacterInfoData}>
          호감도 레벨: {state.fetter}
        </div>
        <div className={styles.CharacterInfoData}>
          운명의 별자리: {state.actived_constellation_num}
        </div>
        <div className={styles.CharacterInfoContour} />
        <div className={styles.CharacterInfoWeapon}>
          <img
            src={state.weapon?.icon}
            className={[
              styles.CharacterInfoWeaponBase,
              state.weapon?.rarity === 5 && styles.CharacterInfoWeaponRare5,
              state.weapon?.rarity === 4 && styles.CharacterInfoWeaponRare4,
              state.weapon?.rarity === 3 && styles.CharacterInfoWeaponRare3,
              state.weapon?.rarity === 2 && styles.CharacterInfoWeaponRare2,
              state.weapon?.rarity === 1 && styles.CharacterInfoWeaponRare1,
            ].join(' ')}
          />
          <div className={styles.CharacterInfoWeaponData}>
            <div className={styles.CharacterInfoWeaponDataHead}>
              <div className={styles.CharacterInfoWeaponDataHeadName}>
                {state.weapon?.name}
              </div>
              <div className={styles.CharacterInfoWeaponDataHeadLevel}>
                Lv.{state.weapon?.level}
              </div>
              <div className={styles.CharacterInfoWeaponDataHeadAffix}>
                <img src='img/icons/constell_dark.png' />
                <div>{state.weapon?.affix_level}/5</div>
              </div>
            </div>
            <div className={styles.CharacterInfoWeaponDataDescription}>
              {state.weapon?.desc}
            </div>
          </div>
        </div>
        <div className={styles.CharacterInfoArtifact}>
          {reliq.length > 0 ? (
            <img
              src={reliq[0].icon}
              className={[
                styles.CharacterInfoArtifactImg,
                reliq[0].rarity === 5 && styles.CharacterInfoArtifactImgRare5,
                reliq[0].rarity === 4 && styles.CharacterInfoArtifactImgRare4,
                reliq[0].rarity === 3 && styles.CharacterInfoArtifactImgRare3,
                reliq[0].rarity === 2 && styles.CharacterInfoArtifactImgRare2,
                reliq[0].rarity === 1 && styles.CharacterInfoArtifactImgRare1,
              ].join(' ')}
            />
          ) : (
            <img
              src='img/star_1.png'
              className={styles.CharacterInfoArtifactImg}
            />
          )}
          {reliq.length > 1 ? (
            <img
              src={reliq[1].icon}
              className={[
                styles.CharacterInfoArtifactImg,
                reliq[1].rarity === 5 && styles.CharacterInfoArtifactImgRare5,
                reliq[1].rarity === 4 && styles.CharacterInfoArtifactImgRare4,
                reliq[1].rarity === 3 && styles.CharacterInfoArtifactImgRare3,
                reliq[1].rarity === 2 && styles.CharacterInfoArtifactImgRare2,
                reliq[1].rarity === 1 && styles.CharacterInfoArtifactImgRare1,
              ].join(' ')}
            />
          ) : (
            <img
              src='img/star_1.png'
              className={styles.CharacterInfoArtifactImg}
            />
          )}
          {reliq.length > 2 ? (
            <img
              src={reliq[2].icon}
              className={[
                styles.CharacterInfoArtifactImg,
                reliq[2].rarity === 5 && styles.CharacterInfoArtifactImgRare5,
                reliq[2].rarity === 4 && styles.CharacterInfoArtifactImgRare4,
                reliq[2].rarity === 3 && styles.CharacterInfoArtifactImgRare3,
                reliq[2].rarity === 2 && styles.CharacterInfoArtifactImgRare2,
                reliq[2].rarity === 1 && styles.CharacterInfoArtifactImgRare1,
              ].join(' ')}
            />
          ) : (
            <img
              src='img/star_1.png'
              className={styles.CharacterInfoArtifactImg}
            />
          )}
          {reliq.length > 3 ? (
            <img
              src={reliq[3].icon}
              className={[
                styles.CharacterInfoArtifactImg,
                reliq[3].rarity === 5 && styles.CharacterInfoArtifactImgRare5,
                reliq[3].rarity === 4 && styles.CharacterInfoArtifactImgRare4,
                reliq[3].rarity === 3 && styles.CharacterInfoArtifactImgRare3,
                reliq[3].rarity === 2 && styles.CharacterInfoArtifactImgRare2,
                reliq[3].rarity === 1 && styles.CharacterInfoArtifactImgRare1,
              ].join(' ')}
            />
          ) : (
            <img
              src='img/star_1.png'
              className={styles.CharacterInfoArtifactImg}
            />
          )}
          {reliq.length > 4 ? (
            <img
              src={reliq[4].icon}
              className={[
                styles.CharacterInfoArtifactImg,
                reliq[4].rarity === 5 && styles.CharacterInfoArtifactImgRare5,
                reliq[4].rarity === 4 && styles.CharacterInfoArtifactImgRare4,
                reliq[4].rarity === 3 && styles.CharacterInfoArtifactImgRare3,
                reliq[4].rarity === 2 && styles.CharacterInfoArtifactImgRare2,
                reliq[4].rarity === 1 && styles.CharacterInfoArtifactImgRare1,
              ].join(' ')}
            />
          ) : (
            <img
              src='img/star_1.png'
              className={styles.CharacterInfoArtifactImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const AvatarProfile = (props: any) => {
  const [selected, setSelected] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState<Character | {}>({});
  const [swiper, setSwiper] = useState<SwiperCore>();
  const characters: any = props.state;

  let listId: number = 0;
  const setId = (id: number) => {
    if (listId !== id) {
      listId = id;
    }
  };

  useEffect(() => {
    if (characters.avatars?.length) {
      setSelected(characters.avatars[0].id);
      setSelectedInfo(characters.avatars[0]);
    }
  }, [Object.keys(characters).length]);

  useEffect(() => {
    setSelectedInfo(findWithID(selected));
  }, [selected]);

  const findWithID = (id: number) =>
    characters.avatars?.filter((key: Character) => key.id === selected).pop();

  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs />
      <Grid item xs={8}>
        <Swiper
          className={styles.Avatardiv}
          slideToClickedSlide={true}
          slidesPerView={5}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          onTransitionEnd={() => {
            setSelected(listId);
          }}
          onSwiper={(swiper) => setSwiper(swiper)}>
          {characters.avatars &&
            characters.avatars.map((list: Character, index: number) => {
              return (
                <SwiperSlide key={list.id} className={styles.AvatarSlide}>
                  {({ isActive, isPrev, isNext }) => {
                    isActive && setId(list.id);
                    return (
                      <div
                        className={[
                          styles.AvatarBox,
                          isActive && styles.AvatarBoxActive,
                          (isPrev || isNext) && styles.AvatarBoxNotActive,
                        ].join(' ')}>
                        <img
                          src={list.icon}
                          className={[
                            styles.Avatarimg,
                            list.rarity === 5 && styles.Avatarimg5,
                            list.rarity === 4 && styles.Avatarimg4,
                            list.rarity === 105 && styles.Avatarimg3,
                          ].join(' ')}
                        />
                        <div className={styles.AvatarName}>Lv.{list.level}</div>
                      </div>
                    );
                  }}
                </SwiperSlide>
              );
            })}
        </Swiper>
        <CheckedCharacter state={selectedInfo} />
      </Grid>
      <Grid item xs />
    </Grid>
  );
};

const MyProfile = () => {
  const [intersect, setIntersect] = useState(false);

  const blackline = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const opacityControll = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (!entry.isIntersecting) {
          setIntersect(false);
          return;
        }
        setIntersect(true);
      });
    };

    const io = new IntersectionObserver(opacityControll, options);

    if (blackline.current) io.observe(blackline.current);
  }, [blackline]);
  //IntersectionObserverAPI로 스크롤 애니매이션 지정

  const dailyData = useSelector((state: RootState) => state.mydaily.data);
  const myData = useSelector((state: RootState) => state.myprofile.data);
  const myCharacter = useSelector((state: RootState) => state.mycharacter.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyDailyAsync.request());
    dispatch(getMyProfileAsync.request());
    dispatch(getMyCharacterAsync.request());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getMyDailyAsync.request());
    }, 240000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.Test}>
      <Menubar opacity={intersect} />
      <main className={styles.Profile}>
        <div className={styles.ProfileGrid}>
          <Userdata state={myData} />
          <Dailydata state={dailyData} />
        </div>
      </main>
      <div className={styles.Materials}>
        <div className={styles.MaterialsGrid}>
          <TodayMaterials />
        </div>
      </div>
      <div className={styles.BlackBg} ref={blackline}>
        <div className={styles.Worlds}>
          <div className={styles.WorldsGrid}>
            <WorldExp state={myData} />
          </div>
        </div>
        <div className={styles.Contour} />
        <div className={styles.Myinfo}>
          <div className={styles.MyinfoGrid}>
            <MyData state={myData} />
          </div>
        </div>
        <div className={styles.Contour} />
        <div className={styles.AvatarList}>
          <div className={styles.AvatarListGrid}>
            <AvatarProfile state={myCharacter} />
          </div>
        </div>
      </div>
      <footer className={styles.Footer}>
        문의 메일: kennenalphateam@gmail.com
      </footer>
      <GoTop opacity={intersect} />
    </div>
  );
};
export default MyProfile;
