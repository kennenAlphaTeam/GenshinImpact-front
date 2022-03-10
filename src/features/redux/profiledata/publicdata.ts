import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import * as dataAPI from '../../../api/data';
import { RECEIVE_DATA, REQUEST_DATA } from './actions';
//액션 상수 지정

export const asyncGetPublicData = (uid: number) => {
  return async (dispatch: Function) => {
    dispatch(requestData());
    const data = await dataAPI.getProfileData(uid.toString());
    return dispatch(receiveData(data));
  };
}; //getProfileData api 비동기 호출용

const requestData = () => {
  return {
    type: REQUEST_DATA,
    payload: {},
  };
};

const receiveData = (data: object) => {
  return {
    type: RECEIVE_DATA,
    payload: data,
  };
};

type PublicState = {
  public_data: object;
  status: string;
};

const publicState: PublicState = {
  public_data: {},
  status: '',
};
//publicReducer 인자, 반환값들 타입 지정

export default function publicReducer(
  state = publicState,
  action: any,
): PublicState {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        status: 'Request pulblic data...',
      };
    case RECEIVE_DATA:
      return {
        ...state,
        public_data: action.payload,
        status: 'Success',
      };
    default:
      return state;
  }
}
