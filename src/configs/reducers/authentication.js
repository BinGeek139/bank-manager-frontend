import {
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './../../constants/AbstractAction';

const initState = {
  data: {
    idToken: null
  },
  error: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { idToken } = action.payload.data;
      localStorage.setItem("token", idToken);
      return {
        ...state,
        data: action.payload.data,
        error: null
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default reducer;