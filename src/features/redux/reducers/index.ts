import { combineReducers } from 'redux';
import cookieReducer from '../cookiedata/cookiedata';
import myDaily from './mydaily';
import myProfile from './myprofile';

const rootReducer = combineReducers({
  myprofile: myProfile,
  mydaily: myDaily,
  cookie: cookieReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
