import { createStore } from 'redux';

type InitialState = {
  counter: number;
  text: string;
  list: any[];
};

const initialState: InitialState = {
  counter: 0,
  text: '',
  list: [],
};

const INCREASE: string = 'INCREASE';
const DECREASE: string = 'DECREASE';
const CHANGE_TEXT: string = 'CHANGE_TEXT';
const ADD_TO_LIST: string = 'ADD_TO_LIST';

const increase = () => {
  return {
    type: INCREASE,
  };
};

const decrease = () => {
  return {
    type: DECREASE,
  };
};

const changeText = (text: string) => {
  return {
    type: CHANGE_TEXT,
    text,
  };
};

function addToList<T>(item: T) {
  return {
    type: ADD_TO_LIST,
    item,
  };
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: 'wow' }));
