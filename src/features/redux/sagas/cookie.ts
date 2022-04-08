import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../../api/data';
import {
  fetchCookieAsync,
  FETCH_COOKIE_REQUEST,
  getMyDailyAsync,
  getMyProfileAsync,
  GO_TO_MYPROFILE,
} from '../constants/actionTypes';

function* fetchCookie(action: ReturnType<typeof fetchCookieAsync.request>) {
  try {
    const data: API.DataProfile = yield call(API.setCookieData, action.payload);
    yield put(fetchCookieAsync.success(data));
    yield all([call(API.getDailyData), call(API.getMyProfileData)]);
    yield put({ type: GO_TO_MYPROFILE });
  } catch (error) {
    yield put(fetchCookieAsync.failure(error));
  }
}

function* watchFetchCookie() {
  yield takeLatest(FETCH_COOKIE_REQUEST, fetchCookie);
}

export default function* fetchCookieSaga() {
  yield all([fork(watchFetchCookie)]);
}
