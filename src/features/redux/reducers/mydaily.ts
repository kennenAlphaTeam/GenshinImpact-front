import { DataProfile } from '../../../api/data';
import {
  GET_MY_DAILY_FAILURE,
  GET_MY_DAILY_REQUEST,
  GET_MY_DAILY_SUCCESS,
} from '../constants/actionTypes';

export const getMyDaily = () => ({
  type: GET_MY_DAILY_REQUEST,
});

type InitialState = {
  data: object;
  loading: boolean;
};

const initialState = {
  data: {},
  loading: false,
};

const myDaily = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case GET_MY_DAILY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_DAILY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_MY_DAILY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default myDaily;
