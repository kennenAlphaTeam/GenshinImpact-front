import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import * as dataAPI from '../../../api/data';
import {
  RECEIVE_DATA,
  REQUEST_DATA,
  RECEIVE_DAILY_DATA,
  REQUEST_DAILY_DATA,
} from './actions';
//액션 상수 지정

type PrivateState = {
  private_data: object;
  daily_data: object;
  status: string;
};

const privateState: PrivateState = {
  private_data: {},
  daily_data: {},
  status: '',
};
//privateReducer 인자, 반환값들 타입 지정

export const asyncGetPrivateData = (uid: number) => {
  return async (dispatch: Function) => {
    dispatch(requestData());
    const data = await dataAPI.getProfileData(uid.toString());
    const iddata = await dataAPI.getIDCardData();
    return dispatch(receiveData(Object.assign(data, iddata)));
  };
}; //getProfileData api 비동기 호출용

const requestData = () => {
  return {
    type: REQUEST_DATA,
  };
};

const receiveData = (data: object) => {
  return {
    type: RECEIVE_DATA,
    payload: data,
  };
};

export const asyncGetDaily = () => {
  return async (dispatch: Function) => {
    dispatch(requestDailyData());
    const data = await dataAPI.getDailyData();
    return dispatch(receiveDailyData(data));
  };
}; //getDailyData api 비동기 호출용

const requestDailyData = () => {
  return {
    type: REQUEST_DAILY_DATA,
  };
};

const receiveDailyData = (data: object) => {
  return {
    type: RECEIVE_DAILY_DATA,
    payload: data,
  };
};
//privateReducer에 사용될 액션 생성자들

export default function privateReducer(
  state = privateState,
  action: any,
): PrivateState {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        status: 'Request private data...',
      };
    case REQUEST_DAILY_DATA:
      return {
        ...state,
        status: 'Request daily data...',
      };
    case RECEIVE_DATA:
      return {
        ...state,
        private_data: action.payload,
        status: 'Success',
      };
    case RECEIVE_DAILY_DATA:
      return {
        ...state,
        daily_data: action.payload,
        status: 'Success',
      };
    default:
      return state;
  }
}
