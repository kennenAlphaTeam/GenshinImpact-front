import { combineReducers } from 'redux';
import privateReducer from './profiledata/privatedata';
import publicReducer from './profiledata/publicdata';
import cookieReducer from './cookiedata/cookiedata';

const rootReducer = combineReducers({
  private_data: privateReducer,
  public_data: publicReducer,
  cookie_data: cookieReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
