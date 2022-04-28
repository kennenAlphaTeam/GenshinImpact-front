import { ActionType } from 'typesafe-actions';
import { CharacterProfile } from '../../../api/data';
import {
  getMyCharacterAsync,
  GET_MY_CHARACTER_FAILURE,
  GET_MY_CHARACTER_REQUEST,
  GET_MY_CHARACTER_SUCCESS,
} from '../constants/actionTypes';

type InitialState = {
  data: CharacterProfile | object;
  loading: boolean;
  error: boolean;
  selected: number;
};

const initialState: InitialState = {
  data: {},
  loading: false,
  error: false,
  selected: 0,
};

const myCharacter = (
  state = initialState,
  action: ActionType<typeof getMyCharacterAsync>,
): InitialState => {
  switch (action.type) {
    case GET_MY_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_MY_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case GET_MY_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default myCharacter;
