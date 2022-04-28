import { ActionType } from 'typesafe-actions';
import {
  fetchCookieAsync,
  FETCH_COOKIE_FAILURE,
  FETCH_COOKIE_REQUEST,
  FETCH_COOKIE_SUCCESS,
} from '../constants/actionTypes';

type InitialState = {
  data: { genshinUid: string; nickname: string } | object;
  loading: boolean;
};

const initialState = {
  data: {},
  loading: false,
};

const myCookie = (
  state = initialState,
  action: ActionType<typeof fetchCookieAsync>,
): InitialState => {
  switch (action.type) {
    case FETCH_COOKIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COOKIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_COOKIE_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default myCookie;
