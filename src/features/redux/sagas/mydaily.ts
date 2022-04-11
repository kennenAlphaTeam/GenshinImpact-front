import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../../api/data';
import {
  getMyDailyAsync,
  GET_MY_DAILY_FAILURE,
  GET_MY_DAILY_REQUEST,
  GET_MY_DAILY_SUCCESS,
} from '../constants/actionTypes';

function* getMyDaily() {
  try {
    const data: API.DailyProfile = yield call(API.getDailyData);
    yield put(getMyDailyAsync.success(data));
  } catch (error) {
    yield put(getMyDailyAsync.failure(error.response.data));
  }
}

function* watchGetMyDaily() {
  yield takeLatest(GET_MY_DAILY_REQUEST, getMyDaily);
}

export default function* myDailySaga() {
  yield all([fork(watchGetMyDaily)]);
}
