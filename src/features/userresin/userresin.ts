import { useDispatch } from 'react-redux';
import * as dataAPI from '../../api/data';

type ResinState = {
  resin_data: object;
};

const resinState: ResinState = {
  resin_data: {},
};

type ResinAction =
  | ReturnType<typeof getResinDataSuccess>
  | ReturnType<typeof getResinDataError>;

const GET_RESIN_DATA: string = 'userresin/GET_RESIN_DATA';
const GET_RESIN_DATA_SUCCESS: string = 'userresin/GET_RESIN_DATA_SUCCESS';
const GET_RESIN_DATA_ERROR: string = 'userresin/GET_RESIN_DATA_ERROR';

const getResinDataSuccess = (data: object) => {
  return {
    type: GET_RESIN_DATA_SUCCESS,
    resin_data: data,
  };
};

const getResinDataError = () => {
  return {
    type: GET_RESIN_DATA_ERROR,
    resin_data: { error: 'Error occured while fetching data..' },
  };
};

export const getResinDataAsync = () => {
  return async (
    dispatch: ReturnType<typeof useDispatch>,
    getState: ResinState,
  ) => {
    try {
      const resin_data = await dataAPI.getResinData();
      dispatch(getResinDataSuccess(resin_data));
    } catch (e) {
      dispatch(getResinDataError());
    }
  };
};

export default function resinReducer(
  state = resinState,
  action: ResinAction,
): ResinState {
  switch (action.type) {
    case GET_RESIN_DATA_SUCCESS:
      return {
        ...state,
        resin_data: action.resin_data,
      };
    case GET_RESIN_DATA_ERROR:
      return {
        ...state,
        resin_data: action.resin_data,
      };
    default:
      return state;
  }
}

export const selectResin = (state: any) => state.resin.resin_data;
