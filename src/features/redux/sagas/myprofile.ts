import * as API from '../../../api/data';
import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GO_TO_INTRO,
  GO_TO_LOGIN,
} from '../constants/actionTypes';

function* getMyProfile() {
  try {
    const [data, id]: API.DataProfile[] = yield all([
      call(API.getMyProfileData),
      call(API.getIDCardData),
    ]);
    yield put({ type: GET_MY_PROFILE_SUCCESS, data: Object.assign(data, id) });
  } catch (error) {
    yield put({ type: GET_MY_PROFILE_FAILURE, data: error.response.data });
    switch (errorSlice(error.message)) {
      case '500':
        //서버 에러 => 에러페이지로 보내기
        break;
      case '403':
        //잘못된 쿠키 => 로그인페이지로 보내기
        yield put({ type: GO_TO_LOGIN });
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

function* watchGetMyProfile() {
  yield takeLatest(GET_MY_PROFILE_REQUEST, getMyProfile);
}

export default function* myProfileSaga() {
  yield all([fork(watchGetMyProfile)]);
}
