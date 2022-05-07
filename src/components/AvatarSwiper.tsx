import React, { useEffect } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Character, CharacterProfile } from '../api/data';
import star_3 from '../assets/star_3.png';
import star_4 from '../assets/star_4.png';
import star_5 from '../assets/star_5.png';
import CharacterInfo from './CharacterInfo';

type AvatarProps = {
  characters: CharacterProfile | any;
};

interface CheckActive {
  active?: boolean;
  prevnext?: boolean;
}

interface RarityCheck {
  rarity: number;
}

const Avatars = styled.div`
  max-width: 1008px;
  margin: auto;
`;

const AvatarSlide = styled(Swiper)`
  overflow: auto;
  white-space: nowrap;
  & > div {
    display: flex;
    justify-content: flex-start;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & > div > div {
    display: flex;
  }
`;

const AvatarBox = styled.div<CheckActive>`
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 30%;
  transition: opacity 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  ${(props) =>
    props.prevnext &&
    css`
      opacity: 70%;
      width: 80%;
      height: 80%;
    `}
  ${(props) =>
    props.active &&
    css`
      opacity: 100%;
      width: 100%;
      height: 100%;
    `}
`;

const AvatarImg = styled.img<RarityCheck>`
  object-fit: contain;
  margin-top: auto;
  margin-bottom: auto;
  transition: height 0.35s ease-in-out;
  overflow: hidden;
  border: 4px solid white;
  border-radius: 10px;
  background-size: cover;
  ${(props) => {
    switch (props.rarity) {
      case 5:
        return css`
          background-image: url(${star_5});
        `;
      case 4:
        return css`
          background-image: url(${star_4});
        `;
      case 3:
        return css`
          background-image: url(${star_3});
        `;
      default:
        return;
    }
  }}
`;

const AvatarName = styled.div`
  font-family: 'Noto Sans KR';
  color: #2d2d2d;
  text-align: center;
  font-weight: 700;
  font-size: 100%;
  margin-bottom: 2%;
`;

const AvatarSwiper = ({ characters }: AvatarProps) => {
  const [selected, setSelected] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState<Character | {}>({});
  let listId: number = 0;

  const setId = (id: number) => {
    if (listId !== id) {
      listId = id;
    }
  };

  const findWithID = (id: number) =>
    characters.avatars?.filter((key: Character) => key.id === selected).pop();

  useEffect(() => {
    if (characters.avatars?.length) {
      setSelected(characters.avatars[0].id);
      setSelectedInfo(characters.avatars[0]);
    }
  }, [Object.keys(characters).length]);

  useEffect(() => {
    setSelectedInfo(findWithID(selected));
  }, [selected]);

  return (
    <Avatars>
      <AvatarSlide
        slideToClickedSlide={true}
        allowTouchMove={false}
        breakpoints={{
          0: {
            spaceBetween: 5,
            slidesPerView: 3,
          },
          600: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
        }}
        grabCursor={true}
        centeredSlides={true}
        onTransitionEnd={() => {
          setSelected(listId);
        }}>
        {characters.avatars &&
          characters.avatars.map((list: Character) => {
            return (
              <SwiperSlide key={list.id}>
                {({ isActive, isPrev, isNext }) => {
                  isActive && setId(list.id);
                  return (
                    <AvatarBox active={isActive} prevnext={isPrev || isNext}>
                      <AvatarImg rarity={list.rarity} src={list.icon} />
                      <AvatarName>Lv.{list.level}</AvatarName>
                    </AvatarBox>
                  );
                }}
              </SwiperSlide>
            );
          })}
      </AvatarSlide>
      {selectedInfo && <CharacterInfo data={selectedInfo} />}
    </Avatars>
  );
};

export default AvatarSwiper;
