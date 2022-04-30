import React from 'react';
import { DailyProfile } from '../api/data';
import ResinIcon from '../assets/icons/icon-resin.png';
import PotIcon from '../assets/icons/icon-pot.png';
import DailyIcon from '../assets/icons/icon-dailyquest.png';
import ExpIcon from '../assets/icons/icon-expedition.png';
import styled from 'styled-components';

type UserProps = {
  data: DailyProfile | any;
};

const Dailydatas = ({ data }: UserProps) => {
  interface Primary {
    primary?: boolean;
  }

  const Divline = styled.div`
    height: inherit;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.1);
  `;

  const Daily = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: 'Inter-300';
    color: white;
    justify-content: center;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    @media screen and (max-width: 1536px) {
      font-size: 17px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 13px;
    }
    @media screen and (max-width: 600px) {
      font-size: 3vw;
    }
  `;

  const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 128px;
    height: 78px;
    @media screen and (max-width: 1200px) {
      height: 60px;
    }
    @media screen and (max-width: 600px) {
      width: 25%;
    }
  `;

  const Icon = styled.img<Primary>`
    width: ${(props) => (props.primary ? '34px' : '42px')};
    height: 42px;
    object-fit: contain;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1200px) {
      width: ${(props) => (props.primary ? 'calc(6 / 7 * 34px)' : '36px')};
      height: 36px;
    }
    @media screen and (max-width: 600px) {
      width: ${(props) =>
        props.primary ? 'calc(54 / 7 * 0.81vw)' : 'calc(54 / 7 * 1vw)'};
      height: 6vw;
    }
  `;

  return (
    <Daily>
      <Banner>
        <Icon src={ResinIcon} primary />
        <div>{data.current_resin}/160</div>
      </Banner>
      <Divline />
      <Banner>
        <Icon src={PotIcon} />
        <div>{data.current_home_coin}/2400</div>
      </Banner>
      <Divline />
      <Banner>
        <Icon src={DailyIcon} />
        <div>{data.finished_task_num}/4</div>
      </Banner>
      <Divline />
      <Banner>
        <Icon src={ExpIcon} />
        <div>{data.current_expedition_num}/5</div>
      </Banner>
    </Daily>
  );
};

export default Dailydatas;
