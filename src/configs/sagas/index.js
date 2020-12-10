import { fork, takeEvery } from 'redux-saga/effects';

import {
  LOGIN
} from './../../constants/AbstractAction';

import {
  doLogin
} from './authentication';



function* rootSaga() {
  yield takeEvery(LOGIN, doLogin);
}

export default rootSaga;