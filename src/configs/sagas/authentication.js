import { call, put } from 'redux-saga/effects';
import Axios from './../../commons/Axios';

import {
  loginSuccess,
  loginFail
} from './../../actions/authentication';


function signin(username, password) {
  const config = {
    url: '/api/authenticate',
    method: 'POST',
    data: {
      username,
      password,
    }
  }
  return Axios(config);
}

function* doLogin({
  payload
}) {
  const { username, password, history } = payload;
  try {
    const resp = yield call(signin, username, password);
    if (resp.status === 200) {
      yield put(loginSuccess(resp.data));
      history.push("/home");
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

export {
  doLogin
}