import { ActionType } from 'typesafe-actions';
import {
  getProfileAsync,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from '../constants/actionTypes';

type InitialState = {
  data: object;
  loading: boolean;
};

const initialState: InitialState = {
  data: {},
  loading: false,
};

type uidAction = ActionType<typeof getProfileAsync>;

const uidProfile = (state = initialState, action: uidAction): InitialState => {
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
