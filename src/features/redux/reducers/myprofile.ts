import { ActionType } from 'typesafe-actions';
import { DataProfile, ErrorResponse } from '../../../api/data';
import {
  getMyProfileAsync,
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
} from '../constants/actionTypes';

export const getMyProfile = () => ({
  type: GET_MY_PROFILE_REQUEST,
});

type InitialState = {
  data: DataProfile | object;
  loading: boolean;
};

const initialState = {
  data: {},
  loading: false,
};

const myProfile = (
  state = initialState,
  action: ActionType<typeof getMyProfileAsync>,
): InitialState => {
  switch (action.type) {
    case GET_MY_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_MY_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default myProfile;
