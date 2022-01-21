import { useDispatch } from 'react-redux';
import * as dataAPI from '../../api/data';

type DataState = {
  private_data: object;
};

const dataState: DataState = {
  private_data: null,
};

type DataAction =
  | ReturnType<typeof getPrivateDataError>
  | ReturnType<typeof getPrivateDataSuccess>;

const GET_PRIVATE_DATA: string = 'userdata/GET_PRIVATE_DATA';
const GET_PRIVATE_DATA_SUCCESS: string = 'userdata/GET_PRIVATE_DATA_SUCCESS';
const GET_PRIVATE_DATA_ERROR: string = 'userdata/GET_PRIVATE_DATA_ERROR';

const getPrivateDataSuccess = (data: object) => {
  return {
    type: GET_PRIVATE_DATA_SUCCESS,
    private_data: data,
  };
};

const getPrivateDataError = () => {
  return {
    type: GET_PRIVATE_DATA_ERROR,
    private_data: { error: 'Error occured while fetching data..' },
  };
};

export const getPrivateDataAsync = (cookie: string) => {
  return async (
    dispatch: ReturnType<typeof useDispatch>,
    getState: DataState,
  ) => {
    try {
      const private_data = await dataAPI.getCookieData(cookie);
      dispatch(getPrivateDataSuccess(private_data));
    } catch (e) {
      dispatch(getPrivateDataError());
    }
  };
};

export default function dataReducer(
  state = dataState,
  action: DataAction,
): DataState {
  switch (action.type) {
    case GET_PRIVATE_DATA_SUCCESS:
      return {
        ...state,
        private_data: action.private_data,
      };
    case GET_PRIVATE_DATA_ERROR:
      return {
        ...state,
        private_data: action.private_data,
      };
    default:
      return state;
  }
}

export const selectData = (state: any) => state.data.private_data;
