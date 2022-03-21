import { combineReducers } from 'redux';
import myCookie from './cookie';
import myDaily from './mydaily';
import myProfile from './myprofile';

const rootReducer = combineReducers({
  myprofile: myProfile,
  mydaily: myDaily,
  cookie: myCookie,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
