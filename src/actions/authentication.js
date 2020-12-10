import {
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS
  } from './../constants/AbstractAction';
  
  const login = ({ username, password, history }) => {
    return {
      type: LOGIN,
      payload: {
        username,
        password,
        history
      }
    }
  }
  
  const loginSuccess = data => {
    return {
      type: LOGIN_SUCCESS,
      payload: {
        data
      }
    }
  }
  
  const loginFail = error => {
    return {
      type: LOGIN_FAIL,
      payload: {
        error
      }
    }
  }
  
  export {
    login,
    loginSuccess,
    loginFail
  }