import { all, fork } from 'redux-saga/effects';
import myDailySaga from './mydaily';
import myProfileSaga from './myprofile';

export default function* rootSaga() {
  yield all([fork(myProfileSaga), fork(myDailySaga)]);
}
