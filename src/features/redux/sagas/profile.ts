import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { DataProfile, getProfileData } from '../../../api/data';
import {
  getProfileAsync,
  GET_PROFILE_REQUEST,
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
    if (window.location.pathname === '/myprofile') {
      yield alert('잘못되거나 조회 불가능한 UID입니다.');
    }
  }
}

function* watchGetUidProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, getUidProfile);
}

export default function* uidProfileSaga() {
  yield all([fork(watchGetUidProfile)]);
}
