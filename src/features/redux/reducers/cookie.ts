import { GET_MY_COOKIE } from '../constants/actionTypes';

export const getMyCookie = (cookie: string) => ({
  type: GET_MY_COOKIE,
  payload: cookie,
});

type InitialState = {
  cookie: string;
};

const initialState = {
  cookie: '',
};

const myCookie = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case GET_MY_COOKIE:
      return {
        ...state,
        cookie: action.payload,
      };
    default:
      return state;
  }
};

export default myCookie;
