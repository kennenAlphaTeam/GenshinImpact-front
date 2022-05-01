import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useOnChange from '../hooks/useOnChange';
import BannerTri from '../assets/icons/BannerTri.png';
import CookieChange from '../assets/icons/CookieChange.png';

type SearchbarProps = {
  active: boolean;
};

const Searchbar = ({ active }: SearchbarProps) => {
  const [uid, uidChange] = useOnChange('');
  const navigate = useNavigate();

  interface BarSwitch {
    active: boolean;
  }

  const Appbar = styled.div<BarSwitch>`
    width: 100%;
    height: 50px;
    background-color: #2d2d2d;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    z-index: 100;
    transition: opacity 0.35s linear;
    flex-direction: row;
    justify-content: space-between;
    opacity: ${(props) => (props.active ? 1 : 0)};
    @media screen and (max-width: 600px) {
      height: 6.3vh;
    }
  `;

  const Icon = styled.img`
    width: 34px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 9px;
    object-fit: contain;
    @media screen and (max-width: 600px) {
      height: 60%;
    }
  `;

  const SearchField = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    background-color: #363636;
    height: 28px;
    width: 280px;
    border-radius: 90px;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    transition: border-color 0.2s linear;
    border-color: transparent;
    &:focus-within {
      border: 2px solid #ffffff;
      color: #606060;
    }
    @media screen and (max-width: 1200px) {
      width: 30%;
    }
    @media screen and (max-width: 900px) {
      width: 40%;
    }
    @media screen and (max-width: 600px) {
      height: 60%;
      width: 50%;
    }
    & > div {
      flex-grow: 1.5;
      width: 0;
      height: 20px;
      border-left: 2px solid #313131;
      margin-top: auto;
      margin-bottom: auto;
      transition: border-left 0.2s linear;
    }
    &:focus-within > div {
      border-left: 2px solid #ffffff;
    }
    & > button {
      flex-grow: 1.5;
      border: 0;
      background-color: transparent;
      background-image: url('/public/img/icons/SearchButtonGray.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin: auto;
      height: 50%;
      min-width: 32px;
      transition: background-image 0.2s linear;
    }
    &:focus-within > button {
      background-image: url('/public/img/icons/SearchButtonWhite.png');
    }
  `;

  const Input = styled.input`
    color: white;
    flex-grow: 8.5;
    background-color: transparent;
    border: 0;
    text-align: center;
    font-size: 16px;
    font-family: 'Noto Sans KR';
    &::-webkit-input-placeholder {
      text-align: center;
      font-size: 16px;
    }
    &:focus {
      border: 0;
      outline: none;
    }
    &:focus::-webkit-input-placeholder {
      color: transparent;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    @media screen and (max-width: 600px) {
      font-size: 3vw;
      &::-webkit-input-placeholder {
        font-size: 3vw;
      }
    }
  `;

  const Setcookie = styled.button`
    border: 0;
    background-color: transparent;
    height: 60%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 18px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;

  return (
    <Appbar active={active}>
      <Icon src={BannerTri} alt='' />
      <SearchField>
        <Input
          type='number'
          onChange={uidChange}
          onKeyUp={(e) =>
            e.key === 'Enter' && uid.length != 9
              ? alert('잘못된 UID입니다')
              : navigate(`/profile/${uid}`)
          }
          placeholder='인게임 UID를 입력해 주세요'
        />
        <div />
        <button
          onClick={() =>
            uid.length != 9
              ? alert('잘못된 UID입니다')
              : navigate(`/profile/${uid}`)
          }></button>
      </SearchField>
      <Setcookie onClick={() => navigate('/login')}>
        <img src={CookieChange} alt='' />
      </Setcookie>
    </Appbar>
  );
};

export default Searchbar;
