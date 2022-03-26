import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { DataProfile } from '../../../api/data';
import { deprecated } from 'typesafe-actions';

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

export const GO_TO_MYPROFILE = 'route/GO_TO_MYPROFILE';
export const GO_TO_UIDPROFILE = 'route/GO_TO_UIDPROFILE';
export const GO_TO_LOGIN = 'route/GO_TO_LOGIN';

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
)<undefined, DataProfile, AxiosError>();

export const fetchCookieAsync = createAsyncAction(
  FETCH_COOKIE_REQUEST,
  FETCH_COOKIE_SUCCESS,
  FETCH_COOKIE_FAILURE,
)<string, DataProfile, AxiosError>();

export const getProfileAsync = createAsyncAction(
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
)<string, DataProfile, AxiosError>();
