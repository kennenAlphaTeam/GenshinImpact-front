import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../../api/data';
import {
  fetchCookieAsync,
  FETCH_COOKIE_REQUEST,
  getMyDailyAsync,
  getMyProfileAsync,
  GO_TO_INTRO,
  GO_TO_LOGIN,
  GO_TO_MYPROFILE,
} from '../constants/actionTypes';

function* fetchCookie(action: ReturnType<typeof fetchCookieAsync.request>) {
  try {
    const data: { genshinUid: string; nickname: string } = yield call(
      API.setCookieData,
      action.payload,
    );
    yield put(fetchCookieAsync.success(data));
    yield all([call(API.getDailyData), call(API.getMyProfileData)]);
    yield put({ type: GO_TO_MYPROFILE });
  } catch (error) {
    yield put(fetchCookieAsync.failure(error));
    switch (errorSlice(error.message)) {
      case '500':
        //서버 에러 => 에러페이지로 보내기
        break;
      case '401':
        //구글 OAuth에러 => 메인페이지로 보내기
        yield put({ type: GO_TO_INTRO });
        break;
      case '400':
        //잘못된 요청 => 일어날 가능성 x 그냥 로그인페이지로 보내기
        yield put({ type: GO_TO_LOGIN });
        break;
      default:
        yield put({ type: GO_TO_LOGIN });
    }
  }
}

function errorSlice(msg: string): string | undefined {
  const err_code: string | undefined = msg.split(' ').pop();
  return err_code;
}

function* watchFetchCookie() {
  yield takeLatest(FETCH_COOKIE_REQUEST, fetchCookie);
}

export default function* fetchCookieSaga() {
  yield all([fork(watchFetchCookie)]);
}
