import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { CharacterProfile, getMyCharacterData } from '../../../api/data';
import {
  getMyCharacterAsync,
  GET_MY_CHARACTER_REQUEST,
} from '../constants/actionTypes';

function* getMyCharacter() {
  try {
    const data: CharacterProfile = yield call(getMyCharacterData);
    yield put(getMyCharacterAsync.success(data));
  } catch (error) {
    yield put(getMyCharacterAsync.failure(error.response.data));
  }
}

function* watchGetMyCharacter() {
  yield takeLatest(GET_MY_CHARACTER_REQUEST, getMyCharacter);
}

export default function* myCharacterSaga() {
  yield all([fork(watchGetMyCharacter)]);
}
