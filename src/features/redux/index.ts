import { combineReducers } from 'redux';
import { privateReducer, publicReducer } from './profiledata/profiledata';
import cookieReducer from './cookiedata/cookiedata';

const rootReducer = combineReducers({
  privateReducer,
  publicReducer,
  cookieReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
