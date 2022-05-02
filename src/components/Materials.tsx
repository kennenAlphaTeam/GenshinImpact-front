import FreedomIcon from '../assets/materials/freedom.png';
import ProsperityIcon from '../assets/materials/prosperity.png';
import TransienceIcon from '../assets/materials/transience.png';
import DreamIcon from '../assets/materials/dream.png';
import GuyunIcon from '../assets/materials/guyun.png';
import SeaIcon from '../assets/materials/sea.png';
import ResistanceIcon from '../assets/materials/resistance.png';
import DiligenceIcon from '../assets/materials/diligence.png';
import EleganceIcon from '../assets/materials/elegance.png';
import NostalgiaIcon from '../assets/materials/nostalgia.png';
import ElixirIcon from '../assets/materials/elixir.png';
import ValorIcon from '../assets/materials/valor.png';
import BalladIcon from '../assets/materials/ballad.png';
import GoldIcon from '../assets/materials/gold.png';
import LightIcon from '../assets/materials/light.png';
import GladiatorIcon from '../assets/materials/gladiator.png';
import AerosideriteIcon from '../assets/materials/aerosiderite.png';
import KijinIcon from '../assets/materials/kijin.png';
import React from 'react';
import styled from 'styled-components';

const dailydata = {
  monde_book: [FreedomIcon, ResistanceIcon, BalladIcon],
  liyue_book: [ProsperityIcon, DiligenceIcon, GoldIcon],
  inazuma_book: [TransienceIcon, EleganceIcon, LightIcon],
  monde_material: [DreamIcon, NostalgiaIcon, GladiatorIcon],
  liyue_material: [GuyunIcon, ElixirIcon, AerosideriteIcon],
  inazuma_material: [SeaIcon, ValorIcon, KijinIcon],
};

const Materials = () => {
  const date = new Date().getDay() - 1;
  const index = date !== -1 ? date % 3 : -1;

  interface CheckSunday {
    sunday: boolean;
  }

  const MaterialList = styled.div`
    max-width: 930px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 6px;
    padding: 21px 33px 21px 33px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 600px) {
      width: 90%;
      padding: 3% 5% 3% 5%;
    }
  `;

  const Text = styled.div`
    width: 409px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 900px) {
      font-size: 5vw;
      line-height: 6vw;
    }
  `;

  const Divline = styled.div`
    width: 100%;
    height: 2px;
    margin: 2px;
    background-color: rgba(0, 0, 0, 0.07);
    @media screen and (max-width: 900px) {
      width: 50vw;
    }
  `;

  const Items = styled.div`
    margin-top: 2%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > img {
      max-width: 128px;
      border-radius: 6px;
      object-fit: contain;
    }
  `;

  const SundayItems = styled.div`
    ${Items}
    height: 12vw;
    & > div {
      position: relative;
      max-width: 15%;
    }
    & > div > img {
      position: relative;
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 6px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      z-index: 99;
      &:nth-child(2) {
        z-index: 99;
        top: -8vw;
        @media screen and (max-width: 900px) {
          top: -10vw;
        }
      }
      &:last-child {
        z-index: 97;
        top: -16vw;
        @media screen and (max-width: 900px) {
          top: -20vw;
        }
      }
    }
  `;

  return (
    <MaterialList>
      <Text>
        오늘 얻을 수 있는 소재는...
        <Divline />
      </Text>
      {date !== -1 ? (
        <Items>
          <img src={dailydata.monde_book[index]} alt='' />
          <img src={dailydata.liyue_book[index]} alt='' />
          <img src={dailydata.inazuma_book[index]} alt='' />
          <img src={dailydata.monde_material[index]} alt='' />
          <img src={dailydata.liyue_material[index]} alt='' />
          <img src={dailydata.inazuma_material[index]} alt='' />
        </Items>
      ) : (
        <SundayItems>
          <div>
            <img src={dailydata.monde_book[0]} alt='' />
            <img src={dailydata.monde_book[1]} alt='' />
            <img src={dailydata.monde_book[2]} alt='' />
          </div>
          <div>
            <img src={dailydata.liyue_book[0]} alt='' />
            <img src={dailydata.liyue_book[1]} alt='' />
            <img src={dailydata.liyue_book[2]} alt='' />
          </div>
          <div>
            <img src={dailydata.inazuma_book[0]} alt='' />
            <img src={dailydata.inazuma_book[1]} alt='' />
            <img src={dailydata.inazuma_book[2]} alt='' />
          </div>
          <div>
            <img src={dailydata.monde_material[0]} alt='' />
            <img src={dailydata.monde_material[1]} alt='' />
            <img src={dailydata.monde_material[2]} alt='' />
          </div>
          <div>
            <img src={dailydata.liyue_material[0]} alt='' />
            <img src={dailydata.liyue_material[1]} alt='' />
            <img src={dailydata.liyue_material[2]} alt='' />
          </div>
          <div>
            <img src={dailydata.inazuma_material[0]} alt='' />
            <img src={dailydata.inazuma_material[1]} alt='' />
            <img src={dailydata.inazuma_material[2]} alt='' />
          </div>
        </SundayItems>
      )}
    </MaterialList>
  );
};

export default Materials;
