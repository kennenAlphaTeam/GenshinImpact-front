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
    yield put(getProfileAsync.success(data));
    yield put({ type: GO_TO_UIDPROFILE, payload: action.payload });
  } catch (error) {
    yield put(getProfileAsync.failure(error));
  }
}

function* watchGetUidProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, getUidProfile);
}

export default function* uidProfileSaga() {
  yield all([fork(watchGetUidProfile)]);
}
