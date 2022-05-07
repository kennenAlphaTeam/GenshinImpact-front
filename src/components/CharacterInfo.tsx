import React from 'react';
import styled, { css } from 'styled-components';
import { Character, Reliquaries } from '../api/data';
import star_1 from '../assets/star_1.png';
import star_2 from '../assets/star_2.png';
import star_3 from '../assets/star_3.png';
import star_4 from '../assets/star_4.png';
import star_5 from '../assets/star_5.png';
import star_none from '../assets/star_none.png';
import constell_dark from '../assets/icons/constell_dark.png';

type CharacterProps = {
  data: Character | any;
};

interface Rarity {
  rarity: number;
}

const Infobox = styled.div`
  font-family: 'Noto Sans KR';
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 50px;
  @media screen and (max-width: 900px) {
    font-size: 5.5vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 10vw;
  }
`;

const Divline = styled.div`
  margin: 2px auto 2px auto;
  width: 160px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  @media screen and (max-width: 900px) {
    width: 18vw;
  }
`;

const Data = styled.div`
  font-size: 15px;
  font-weight: 200;
  @media screen and (max-width: 900px) {
    font-size: 2vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

const Weapon = styled.div`
  margin: 10px auto 10px auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #2d2d2d;
  text-align: left;
  padding: 6px;
`;

const WeaponIcon = styled.img<Rarity>`
  aspect-ratio: 1/1;
  width: 25%;
  border-radius: 10%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 4px rgb(229, 206, 130) solid;
  margin-top: auto;
  margin-bottom: auto;
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
      case 2:
        return css`
          background-image: url(${star_2});
        `;
      case 1:
        return css`
          background-image: url(${star_1});
        `;
      default:
        return css`
          background-image: url(${star_none});
        `;
    }
  }}
`;

const WeaponData = styled.div`
  width: 100%;
  margin-left: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const WeaponHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  line-height: 1;
`;

const WeaponName = styled.div`
  font-weight: 700;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

const WeaponLevel = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  background-color: #2d2d2d;
  color: white;
  text-align: center;
  border-radius: 3px;
  padding: 3px;
`;

const WeaponAffix = styled.div`
  margin-left: auto;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  & > img {
    object-fit: contain;
    max-height: 22px;
    height: 100%;
    margin-right: 3px;
    @media screen and (max-width: 600px) {
      max-height: 4vw;
    }
  }
  & > div {
    font-weight: 600;
    font-size: 18px;
    @media screen and (max-width: 600px) {
      font-size: 4vw;
    }
  }
`;

const WeaponDesc = styled.div`
  max-width: 400px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 900px) {
    font-size: 1.8vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

const Artifact = styled.div`
  background-color: white;
  display: flex;
  margin: 10px auto 20vh auto;
  justify-content: space-between;
  padding: 5px;
  border-radius: 8px;
`;

const ArtifactIcon = styled.img<Rarity>`
  height: 50px;
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 100%;
  border: 4px rgb(229, 206, 130) solid;
  margin-left: 5px;
  &:first-child {
    margin-left: 0px !important;
  }
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
      case 2:
        return css`
          background-image: url(${star_2});
        `;
      case 1:
        return css`
          background-image: url(${star_1});
        `;
      default:
        return css`
          background-image: url(${star_none});
        `;
    }
  }}
`;

const CharacterInfo = ({ data }: CharacterProps) => {
  const reliq: Array<Reliquaries> = data.reliquaries;
  let reliq_list = [
    { pos: 1, icon: star_1, rarity: 1 },
    { pos: 2, icon: star_1, rarity: 1 },
    { pos: 3, icon: star_1, rarity: 1 },
    { pos: 4, icon: star_1, rarity: 1 },
    { pos: 5, icon: star_1, rarity: 1 },
  ];
  reliq &&
    reliq.map((data) => {
      reliq_list[data.pos - 1] = data;
    });

  return (
    <Infobox>
      <Name>{data.name}</Name>
      <Divline />
      <Data>호감도 레벨: {data.fetter}</Data>
      <Data>운명의 별자리: {data.actived_constellation_num}</Data>
      <Divline />
      <Weapon>
        <WeaponIcon src={data.weapon?.icon} rarity={data.weapon?.rarity} />
        <WeaponData>
          <WeaponHead>
            <WeaponName>{data.weapon?.name}</WeaponName>
            <WeaponLevel>Lv.{data.weapon?.level}</WeaponLevel>
            <WeaponAffix>
              <img src={constell_dark} />
              <div>{data.weapon?.affix_level}/5</div>
            </WeaponAffix>
          </WeaponHead>
          <WeaponDesc>{data.weapon?.desc}</WeaponDesc>
        </WeaponData>
      </Weapon>
      <Artifact>
        {reliq_list.map((data, key) => (
          <ArtifactIcon key={key} src={data.icon} rarity={data.rarity} />
        ))}
      </Artifact>
    </Infobox>
  );
};

export default CharacterInfo;
