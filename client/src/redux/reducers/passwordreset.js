// reducers.js
import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_REQUEST_SUCCESS,
  PASSWORD_RESET_REQUEST_FAIL,
  PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
} from "../actions/resetpassword.js";

// passwordResetReducer.js


const initialState = {
  loading: false,
  success: false,
  error: null,
  message: '',
};

const passwordResetRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST:
      return { ...state, loading: true };
    case PASSWORD_RESET_REQUEST_SUCCESS:
      return { ...state, loading: false, success: true, message: action.payload };
    case PASSWORD_RESET_REQUEST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const passwordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET:
      return { ...state, loading: true };
    case PASSWORD_RESET_SUCCESS:
      return { ...state, loading: false, success: true, message: action.payload };
    case PASSWORD_RESET_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { passwordResetRequestReducer, passwordResetReducer };
