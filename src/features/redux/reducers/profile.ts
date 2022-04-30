import { ActionType } from 'typesafe-actions';
import { DataProfile, ErrorResponse } from '../../../api/data';
import {
  getProfileAsync,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from '../constants/actionTypes';

type InitailState = {
  data: DataProfile | ErrorResponse;
  loading: boolean;
};

const initialState: any = {
  data: {
    timestamp: '',
    statue: 0,
    error: '',
    message: '',
  },
  loading: false,
};

const uidProfile = (
  state = initialState,
  action: ActionType<typeof getProfileAsync>,
): InitailState => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default uidProfile;
