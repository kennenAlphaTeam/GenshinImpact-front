import React from 'react';
import { DataProfile } from '../api/data';
import MondeIcon from '../assets/icon/Monde.png';
import LiyueIcon from '../assets/icon/Liyue.png';
import InazumaIcon from '../assets/icon/Inazuma.png';
import Inazuma from '../assets/background/Inazuma.png';
import Liyue from '../assets/background/Liyue.png';
import Monde from '../assets/background/Monde.png';
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

  const monde = state.find((obj) => obj.name === '몬드');
  const liyue = state.find((obj) => obj.name === '리월');
  const inazuma = state.find((obj) => obj.name === '이나즈마');

  const WorldExpList = styled.div`
    max-width: 1218px;
    width: 100%;
    max-height: 406px;
    display: flex;
    flex-direction: row;
    margin: auto;
  `;

  return (
    <div>
      <div>
        <div>
          <div>
            <img src={MondeIcon} alt='' />
            <div>몬드</div>
            <div>평판 레벨:{monde?.level}</div>
            <div>
              탐사 진행도: {monde && monde?.exploration_percentage / 10.0 + '%'}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={LiyueIcon} alt='' />
            <div>리월</div>
            <div>평판 레벨:{liyue?.level}</div>
            <div>
              탐사 진행도: {liyue && liyue.exploration_percentage / 10.0 + '%'}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={InazumaIcon} alt='' />
            <div>이나즈마</div>
            <div>평판 레벨:{inazuma?.level}</div>
            <div>
              탐사 진행도:{' '}
              {inazuma && inazuma.exploration_percentage / 10.0 + '%'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
