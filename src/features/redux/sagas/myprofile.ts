import * as API from '../../../api/data';
import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
} from '../constants/actionTypes';

function* getMyProfile(action: any) {
  try {
    const [data, id]: API.DataProfile[] = yield all([
      call(API.getMyProfileData),
      call(API.getIDCardData),
    ]);
    yield put({ type: GET_MY_PROFILE_SUCCESS, data: Object.assign(data, id) });
  } catch (error) {
    yield put({ type: GET_MY_PROFILE_FAILURE, data: error.response.data });
  }
}

function* watchGetMyProfile() {
  yield takeLatest(GET_MY_PROFILE_REQUEST, getMyProfile);
}

export default function* myProfileSaga() {
  yield all([fork(watchGetMyProfile)]);
}
