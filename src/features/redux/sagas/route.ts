import { all, fork, getContext, take, takeLatest } from 'redux-saga/effects';
import history from '../../history';
import {
  GO_TO_ERROR,
  GO_TO_INTRO,
  GO_TO_LOGIN,
  GO_TO_MYPROFILE,
  GO_TO_UIDPROFILE,
} from '../constants/actionTypes';

function* goToMyProfile() {
  yield history.push('/myprofile');
}

function* goToUidProfile(action: any) {
  yield history.push(`/profile/${action.payload}`);
}

function* goToOAuth() {
  yield history.push('/login');
}

function* goToIntro() {
  yield history.push('/intro');
}

function* goToErrorPage() {
  yield history.push(`/error?code=500`);
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
