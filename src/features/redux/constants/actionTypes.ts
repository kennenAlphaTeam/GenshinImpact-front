import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { CharacterProfile, DailyProfile, DataProfile } from '../../../api/data';

export const GET_MY_PROFILE_REQUEST = 'myprofile/GET_MY_PROFILE_REQUEST';
export const GET_MY_PROFILE_SUCCESS = 'myprofile/GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAILURE = 'myprofile/GET_MY_PROFILE_FAILURE';

export const GET_MY_DAILY_REQUEST = 'mydaily/GET_MY_DAILY_REQUEST';
export const GET_MY_DAILY_SUCCESS = 'mydaily/GET_MY_DAILY_SUCCESS';
export const GET_MY_DAILY_FAILURE = 'mydaily/GET_MY_DAILY_FAILURE';

export const FETCH_COOKIE_REQUEST = 'cookie/FETCH_COOKIE_REQUEST';
export const FETCH_COOKIE_SUCCESS = 'cookie/FETCH_COOKIE_SUCCESS';
export const FETCH_COOKIE_FAILURE = 'cookie/FETCH_COOKIE_FAILURE';

export const GET_PROFILE_REQUEST = 'profile/GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE';

export const GET_MY_CHARACTER_REQUEST = 'character/GET_MY_CHARACTER_REQUEST';
export const GET_MY_CHARACTER_SUCCESS = 'character/GET_MY_CHARACTER_SUCCESS';
export const GET_MY_CHARACTER_FAILURE = 'character/GET_MY_CHARACTER_FAILURE';

export const GO_TO_MYPROFILE = 'route/GO_TO_MYPROFILE';
export const GO_TO_UIDPROFILE = 'route/GO_TO_UIDPROFILE';
export const GO_TO_LOGIN = 'route/GO_TO_LOGIN';
export const GO_TO_INTRO = 'route/GO_TO_INTRO';
export const GO_TO_ERROR = 'route/GO_TO_ERROR';

export const GET_MY_IDCARD_REQUEST = 'introcheck/GET_MY_IDCARD_REQUEST';
export const GET_MY_IDCARD_SUCCESS = 'introcheck/GET_MY_IDCARD_SUCCESS';
export const GET_MY_IDCARD_FAILURE = 'introcheck/GET_MY_IDCARD_FAILURE';

export const getMyProfileAsync = createAsyncAction(
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAILURE,
)<undefined, DataProfile, AxiosError>();
//제네릭의 안에 params에 들어가는 액션의 순서대로

export const getMyDailyAsync = createAsyncAction(
  GET_MY_DAILY_REQUEST,
  GET_MY_DAILY_SUCCESS,
  GET_MY_DAILY_FAILURE,
)<undefined, DailyProfile, AxiosError>();

export const fetchCookieAsync = createAsyncAction(
  FETCH_COOKIE_REQUEST,
  FETCH_COOKIE_SUCCESS,
  FETCH_COOKIE_FAILURE,
)<string, { genshinUid: string; nickname: string }, AxiosError>();

export const getProfileAsync = createAsyncAction(
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
)<string, DataProfile, AxiosError>();

export const getMyCharacterAsync = createAsyncAction(
  GET_MY_CHARACTER_REQUEST,
  GET_MY_CHARACTER_SUCCESS,
  GET_MY_CHARACTER_FAILURE,
)<undefined, CharacterProfile, AxiosError>();

export const getMyIDCardAsync = createAsyncAction(
  GET_MY_IDCARD_REQUEST,
  GET_MY_IDCARD_SUCCESS,
  GET_MY_IDCARD_FAILURE,
)<undefined, undefined, AxiosError>();
