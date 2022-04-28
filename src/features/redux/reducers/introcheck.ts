import { ActionType } from 'typesafe-actions';
import {
  getMyIDCardAsync,
  GET_MY_IDCARD_FAILURE,
  GET_MY_IDCARD_REQUEST,
  GET_MY_IDCARD_SUCCESS,
} from '../constants/actionTypes';

type InitailState = {
  isLogin: boolean;
  loading: boolean;
};

const initialState: any = {
  isLogin: false,
  loading: false,
};

const introCheck = (
  state = initialState,
  action: ActionType<typeof getMyIDCardAsync>,
): InitailState => {
  switch (action.type) {
    case GET_MY_IDCARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_IDCARD_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    case GET_MY_IDCARD_FAILURE:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default introCheck;
