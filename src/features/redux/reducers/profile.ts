import { ActionType } from 'typesafe-actions';
import {
  getProfileAsync,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from '../constants/actionTypes';

const initialState: any = {
  error_data: {},
  loading: false,
};

type uidAction = ActionType<typeof getProfileAsync>;

const uidProfile = (state = initialState, action: uidAction) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      if (action.payload.uid != null)
        return {
          ...state,
          loading: false,
          [action.payload.uid]: action.payload,
        };
      return state;
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error_data: action.payload,
      };
    default:
      return state;
  }
};

export default uidProfile;
