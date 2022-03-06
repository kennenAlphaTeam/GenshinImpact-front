import { useDispatch } from 'react-redux';
import * as dataAPI from '../../../api/data';

const SENDING_COOKIE: string = 'SENDING_COOKIE';
const RECEIVE_COOKIE: string = 'RECEIVE_COOKIE';

type CookieState = {
  cookie: string;
  res: object;
};

const cookieState = {
  cookie: '',
  res: {},
};

const sendingCookie = (cookie: string) => {
  return {
    type: SENDING_COOKIE,
    payload: cookie,
  };
};

const receiveCookie = (res: object) => {
  return {
    type: RECEIVE_COOKIE,
    payload: res,
  };
};

export const asyncSetCookie = (cookie: string) => {
  return async (dispatch: Function) => {
    dispatch(sendingCookie(cookie));
    const res = await dataAPI.setCookieData(cookie);
    return dispatch(receiveCookie(res));
  };
};

export default function cookieReducer(
  state = cookieState,
  action: any,
): CookieState {
  switch (action.type) {
    case SENDING_COOKIE:
      return {
        ...state,
        cookie: action.payload,
      };
    case RECEIVE_COOKIE:
      return {
        ...state,
        res: action.payload,
      };
    default:
      return state;
  }
}
