import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { DataProfile } from '../../../api/data';

export const GET_MY_PROFILE_REQUEST = 'myprofile/GET_MY_PROFILE_REQUEST';
export const GET_MY_PROFILE_SUCCESS = 'myprofile/GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAILURE = 'myprofile/GET_MY_PROFILE_FAILURE';

export const GET_MY_DAILY_REQUEST = 'mydaily/GET_MY_DAILY_REQUEST';
export const GET_MY_DAILY_SUCCESS = 'mydaily/GET_MY_DAILY_SUCCESS';
export const GET_MY_DAILY_FAILURE = 'mydaily/GET_MY_DAILY_FAILURE';

export const GET_MY_COOKIE = 'cookie/GET_MY_COOKIE';

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
