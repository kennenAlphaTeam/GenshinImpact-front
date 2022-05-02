import React from 'react';
import { DataProfile } from '../api/data';
import Monde from '../assets/icons/Monde.png';
import Liyue from '../assets/icons/Liyue.png';
import Inazuma from '../assets/icons/Inazuma.png';
import BgInazuma from '../assets/background/BgInazuma.png';
import BgLiyue from '../assets/background/BgLiyue.png';
import BgMonde from '../assets/background/BgMonde.png';
import styled from 'styled-components';

type WorldProps = {
  data: DataProfile | any;
};

const WorldExp = ({ data }: WorldProps) => {
  interface WorldExpType {
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
    type: number;
    offerings: [];
    id: number;
  }

  const state: WorldExpType[] = data.world_explorations;

  const monde = state?.find((obj) => obj.name === '몬드');
  const liyue = state?.find((obj) => obj.name === '리월');
  const inazuma = state?.find((obj) => obj.name === '이나즈마');

  const WorldList = styled.div`
    max-width: 1218px;
    width: 100%;
    max-height: 406px;
    display: flex;
    flex-direction: row;
    margin: auto;

    & > :first-child {
      background-image: url(${BgMonde});
    }
    & > :nth-child(2) {
      background-image: url(${BgLiyue});
    }
    & > :last-child {
      background-image: url(${BgInazuma});
    }
  `;

  const Box = styled.div`
    width: calc(100% / 3);
    max-width: 406px;
    aspect-ratio: 1/1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `;

  const Filter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    font-family: 'Noto Sans KR';
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    backdrop-filter: blur(3px);
    @media screen and (max-width: 1200px) {
      backdrop-filter: blur(2px);
    }
    @media screen and (max-width: 600px) {
      backdrop-filter: blur(1px);
    }
  `;

  const Icon = styled.img`
    max-width: 100px;
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1200px) {
      width: 8vw;
    }
  `;

  const Name = styled.div`
    line-height: 77px;
    height: 77px;
    font-size: 64px;
    @media screen and (max-width: 1536px) {
      line-height: 5.5vw;
      height: 5.5vw;
      font-size: 4.5vw;
    }
    @media screen and (max-width: 1200px) {
      line-height: 8vw;
      height: 8vw;
      font-size: 7vw;
    }
  `;

  const Level = styled.div`
    font-size: 28px;
    line-height: 34px;
    height: 34px;
    margin-top: 26px;
    @media screen and (max-width: 1536px) {
      font-size: 2vw;
      line-height: 2.5vw;
      height: 2.5vw;
      margin-top: 1.9vw;
    }
    @media screen and (max-width: 600px) {
      font-size: 3.8vw;
      line-height: 4.3vw;
      font-weight: 200;
      height: 4.3vw;
    }
  `;

  const Progress = styled.div`
    font-size: 15px;
    font-weight: 200;
    height: 18px;
    line-height: 18px;
    margin-top: 16px;
    @media screen and (max-width: 1536px) {
      font-size: 1.2vw;
      height: 1.5vw;
      line-height: 1.5vw;
      margin-top: 1.2vw;
    }
    @media screen and (max-width: 600px) {
      font-size: 3.8vw;
      height: 4.3vw;
      line-height: 4.3vw;
    }
  `;

  return (
    <WorldList>
      <Box>
        <Filter>
          <Icon src={Monde} alt='' />
          <Name>몬드</Name>
          <Level>평판 레벨:{monde?.level}</Level>
          <Progress>
            탐사 진행도: {monde && monde?.exploration_percentage / 10.0 + '%'}
          </Progress>
        </Filter>
      </Box>
      <Box>
        <Filter>
          <Icon src={Liyue} alt='' />
          <Name>리월</Name>
          <Level>평판 레벨:{liyue?.level}</Level>
          <Progress>
            탐사 진행도: {liyue && liyue.exploration_percentage / 10.0 + '%'}
          </Progress>
        </Filter>
      </Box>
      <Box>
        <Filter>
          <Icon src={Inazuma} alt='' />
          <Name>이나즈마</Name>
          <Level>평판 레벨:{inazuma?.level}</Level>
          <Progress>
            탐사 진행도:{' '}
            {inazuma && inazuma.exploration_percentage / 10.0 + '%'}
          </Progress>
        </Filter>
      </Box>
    </WorldList>
  );
};

export default WorldExp;
