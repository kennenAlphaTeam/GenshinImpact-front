import { Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Character, CharacterProfile } from '../../../api/data';
import { getMyCharacterAsync } from '../../../features/redux/constants/actionTypes';
import { RootState } from '../../../features/redux/reducers';
import styles from './TestProfile.module.css';

const CheckedCharacter = (props: any) => {
  const state: Character = props.state;
  return <div>{JSON.stringify(state)}</div>;
};

const TestProfile = () => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const characters: any = useSelector(
    (state: RootState) => state.mycharacter.data,
  );

  let listId: number = 0;
  const setId = (id: number) => {
    if (listId !== id) {
      listId = id;
    }
  };

  useEffect(() => {
    dispatch(getMyCharacterAsync.request());
  }, []);

  useEffect(() => {
    characters.avatars?.length && setSelected(characters.avatars[0].id);
  }, [Object.keys(characters).length]);

  return (
    <Grid container spacing={2} className={styles.Grid}>
      <Grid item xs />
      <Grid item xs={8}>
        <Swiper
          className={styles.Testdiv}
          slideToClickedSlide={true}
          slidesPerView='auto'
          grabCursor={true}
          centeredSlides={true}
          onActiveIndexChange={() =>
            setTimeout(() => setSelected(listId), 100)
          }>
          {characters.avatars &&
            characters.avatars.map((list: Character, index: number) => {
              return (
                <SwiperSlide key={list.id}>
                  {({ isActive }) => {
                    isActive && setId(list.id);
                    return (
                      <img
                        src={list.icon}
                        className={[
                          styles.Testimg,
                          isActive && styles.TestimgSel,
                        ].join(' ')}
                      />
                    );
                  }}
                </SwiperSlide>
              );
            })}
        </Swiper>
        <CheckedCharacter
          state={characters.avatars?.filter(
            (key: Character) => key.id === selected,
          )}
        />
      </Grid>
      <Grid item xs />
    </Grid>
  );
};

export default TestProfile;
