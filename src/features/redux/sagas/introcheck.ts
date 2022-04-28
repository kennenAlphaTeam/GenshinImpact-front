import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../../api/data';
import {
  getMyIDCardAsync,
  GET_MY_IDCARD_REQUEST,
  GO_TO_MYPROFILE,
} from '../constants/actionTypes';

function* getMyDaily() {
  try {
    yield call(API.getIDCardData);
    yield put({ type: GO_TO_MYPROFILE });
    yield put(getMyIDCardAsync.success());
  } catch (error) {
    yield put(getMyIDCardAsync.failure(error.response.data));
  }
}

function* watchGetMyID() {
  yield takeLatest(GET_MY_IDCARD_REQUEST, getMyDaily);
}

export default function* myIDSaga() {
  yield all([fork(watchGetMyID)]);
}
