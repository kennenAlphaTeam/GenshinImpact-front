import { all, fork, getContext, take, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import history from '../../history';
import { GO_TO_MYPROFILE, GO_TO_UIDPROFILE } from '../constants/actionTypes';

function* goToMyProfile() {
  history.push('/myprofile');
}

function* goToUidProfile(action: any) {
  history.push(`/profile?uid=${action.payload}`);
}

function* watchGoTo() {
  yield all([
    takeLatest(GO_TO_MYPROFILE, goToMyProfile),
    takeLatest(GO_TO_UIDPROFILE, goToUidProfile),
  ]);
}

export default function* toGoSaga() {
  yield all([fork(watchGoTo)]);
}
