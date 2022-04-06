import { all, fork, getContext, take, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import history from '../../history';
import {
  GO_TO_ERROR,
  GO_TO_INTRO,
  GO_TO_LOGIN,
  GO_TO_MYPROFILE,
  GO_TO_UIDPROFILE,
} from '../constants/actionTypes';

function* goToMyProfile() {
  history.push('/myprofile');
}

function* goToUidProfile(action: any) {
  history.push(`/profile?uid=${action.payload}`);
}

function* goToOAuth() {
  history.push('/login');
}

function* goToIntro() {
  history.push('/intro');
}

function* goToErrorPage() {
  history.push(`/error?code=500`);
}

function* watchGoTo() {
  yield all([
    takeLatest(GO_TO_MYPROFILE, goToMyProfile),
    takeLatest(GO_TO_UIDPROFILE, goToUidProfile),
    takeLatest(GO_TO_LOGIN, goToOAuth),
    takeLatest(GO_TO_INTRO, goToIntro),
    takeLatest(GO_TO_ERROR, goToErrorPage),
  ]);
}

export default function* toGoSaga() {
  yield all([fork(watchGoTo)]);
}
