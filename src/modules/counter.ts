const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
export function setDiff<T>(diff: T) {
  return {
    type: SET_DIFF,
    diff,
  };
}
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type InitialState = {
  number: number;
  diff: number;
};

const initialState: InitialState = {
  number: 0,
  diff: 1,
};

export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
