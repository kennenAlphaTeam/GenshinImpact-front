import { combineReducers } from 'redux';
import myCookie from './cookie';
import myCharacter from './mycharacter';
import myDaily from './mydaily';
import myProfile from './myprofile';
import uidProfile from './profile';

const rootReducer = combineReducers({
  myprofile: myProfile,
  mydaily: myDaily,
  mycharacter: myCharacter,
  cookie: myCookie,
  uid_profile: uidProfile,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
