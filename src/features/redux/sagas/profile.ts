import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { DataProfile, getProfileData } from '../../../api/data';
import {
  getProfileAsync,
  GET_PROFILE_REQUEST,
  GO_TO_INTRO,
  GO_TO_LOGIN,
  GO_TO_MYPROFILE,
  GO_TO_UIDPROFILE,
} from '../constants/actionTypes';

function* getUidProfile(action: ReturnType<typeof getProfileAsync.request>) {
  try {
    const data: DataProfile = yield call(getProfileData, action.payload);
    const uid_data = { uid: action.payload, ...data };
    yield put(getProfileAsync.success(uid_data));
    yield put({ type: GO_TO_UIDPROFILE, payload: action.payload });
  } catch (error) {
    yield put(getProfileAsync.failure(error));
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
        //잘못된 요청
        if (window.location.pathname !== '/myprofile') {
          yield put({ type: GO_TO_MYPROFILE });
        }
        yield alert('잘못되거나 조회 불가능한 UID입니다.');
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

function* watchGetUidProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, getUidProfile);
}

export default function* uidProfileSaga() {
  yield all([fork(watchGetUidProfile)]);
}
