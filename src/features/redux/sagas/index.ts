import { all, fork } from 'redux-saga/effects';
import fetchCookieSaga from './cookie';
import myIDSaga from './introcheck';
import myCharacterSaga from './mycharacter';
import myDailySaga from './mydaily';
import myProfileSaga from './myprofile';
import uidProfileSaga from './profile';
import toGoSaga from './route';

export default function* rootSaga() {
  yield all([
    fork(myProfileSaga),
    fork(myDailySaga),
    fork(fetchCookieSaga),
    fork(toGoSaga),
    fork(uidProfileSaga),
    fork(myCharacterSaga),
    fork(myIDSaga),
  ]);
}
