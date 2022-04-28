import { ActionType } from 'typesafe-actions';
import { DailyProfile } from '../../../api/data';
import {
  getMyDailyAsync,
  GET_MY_DAILY_FAILURE,
  GET_MY_DAILY_REQUEST,
  GET_MY_DAILY_SUCCESS,
} from '../constants/actionTypes';

export const getMyDaily = () => ({
  type: GET_MY_DAILY_REQUEST,
});

type InitialState = {
  data: DailyProfile | object;
  loading: boolean;
  error: boolean;
};

const initialState = {
  data: {},
  loading: false,
  error: false,
};

const myDaily = (
  state = initialState,
  action: ActionType<typeof getMyDailyAsync>,
): InitialState => {
  switch (action.type) {
    case GET_MY_DAILY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_MY_DAILY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_MY_DAILY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default myDaily;
