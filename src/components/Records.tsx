import React from 'react';
import styled from 'styled-components';
import { DataProfile } from '../api/data';

type RecordType = {
  data: DataProfile | any;
};

const Records = ({ data }: RecordType) => {
  const record = data.stats;

  const RecordList = styled.div`
    max-width: 936px;
    margin: auto;
    background-color: #212121;
    border: 1px solid #313131;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5vw 1vw 1.5vw 1vw;
    color: white;
    font-family: 'Noto Sans KR';
    text-align: center;
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
      border-radius: 0px;
    }
  `;

  const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    min-width: calc(100% / 7);
    @media screen and (max-width: 600px) {
      &:last-child {
        flex-direction: row;
      }
    }
  `;

  const Text = styled.div`
    min-width: 2vw;
    & > div:first-child {
      font-size: 2vw;
      font-weight: 500;
    }
    & > div:last-child {
      font-size: 0.7vw;
      font-weight: 400;
    }
    @media screen and (max-width: 900px) {
      & > div:last-child {
        font-size: 0.7vw;
      }
    }
    @media screen and (max-width: 600px) {
      min-width: 30vw;
      margin-bottom: 1vh;
      & > div:first-child {
        font-size: 7vw;
      }
      & > div:last-child {
        font-size: 3vw;
      }
    }
  `;
  const Divline = styled.div`
    height: 10vw;
    width: 0px;
    border: 1px solid #313131;
    @media screen and (max-width: 600px) {
      height: 0px;
      border: 0px;
    }
  `;

  return (
    <RecordList>
      <TextBox>
        <Text>
          <div>{record.active_day_number}</div>
          <div>활동 일수</div>
        </Text>
        <Text>
          <div>{record.domain_number}</div>
          <div>비경 개방</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.achievement_number}</div>
          <div>업적 달성 개수</div>
        </Text>
        <Text>
          <div>{record.spiral_abyss}</div>
          <div>나선 비경</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.avatar_number}</div>
          <div>획득한 캐릭터</div>
        </Text>
        <Text>
          <div>{record.luxurious_chest_number}</div>
          <div>화려한 보물상자</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.way_point_number}</div>
          <div>워프 포인트</div>
        </Text>
        <Text>
          <div>{record.precious_chest_number}</div>
          <div>진귀한 보물상자</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.anemoculus_number}</div>
          <div>바람 신의 눈동자</div>
        </Text>
        <Text>
          <div>{record.exquisite_chest_number}</div>
          <div>정교한 보물상자</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.geoculus_number}</div>
          <div>바위 신의 눈동자</div>
        </Text>
        <Text>
          <div>{record.common_chest_number}</div>
          <div>평범한 보물상자</div>
        </Text>
      </TextBox>
      <Divline />
      <TextBox>
        <Text>
          <div>{record.electroculus_number}</div>
          <div>번개 신의 눈동자</div>
        </Text>
        <Text>
          <div>{record.magic_chest_number}</div>
          <div>신묘한 보물상자</div>
        </Text>
      </TextBox>
    </RecordList>
  );
};

export default Records;
