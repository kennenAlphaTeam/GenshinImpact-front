import * as API from '../../../api/data';
import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GO_TO_INPUT_COOKIE,
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
      case '404':
        yield put({ type: GO_TO_INPUT_COOKIE });
        break;
      default:
        yield put({ type: GO_TO_LOGIN });
    }
    yield put({ type: GO_TO_LOGIN });
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
