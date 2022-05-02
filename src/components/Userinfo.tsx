import React from 'react';
import styled from 'styled-components';
import { DataProfile, ErrorResponse } from '../api/data';

type UserProps = {
  data: DataProfile | any;
};

const Userinfo = ({ data }: UserProps) => {
  const Nickname = styled.div`
    width: 100%;
    height: 155px;
    color: white;
    margin: auto;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 128px;
    line-height: 155px;
    @media screen and (max-width: 1536px) {
      height: 9.8vw;
      font-size: 8.4vw;
      line-height: 9.8vw;
    }
    @media screen and (max-width: 900px) {
      height: 11vw;
      font-size: 9.5vw;
      line-height: 11vw;
    }
    @media screen and (max-width: 600px) {
      height: 12vw;
      font-size: 11vw;
      line-height: 12vw;
    }
  `;

  const Uid = styled.div`
    width: 100%;
    height: 24px;
    font-size: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-family: 'Inter-300', serif;
    line-height: 24px;
    margin: auto;
    @media screen and (max-width: 600px) {
      font-size: 4vw;
    }
  `;

  return (
    <>
      <Nickname>{data.nickname}</Nickname>
      <Uid>UID:{data.genshinUid}</Uid>
    </>
  );
};

export default Userinfo;
