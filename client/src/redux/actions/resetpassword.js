// actions.js
import axios from "axios";
// actionTypes.js
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_REQUEST_SUCCESS = 'PASSWORD_RESET_REQUEST_SUCCESS';
export const PASSWORD_RESET_REQUEST_FAIL = 'PASSWORD_RESET_REQUEST_FAIL';

export const PASSWORD_RESET = 'PASSWORD_RESET';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAIL = 'PASSWORD_RESET_FAIL';

export const requestPasswordReset = (email) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_RESET_REQUEST });

    const response = await axios.post("/api/forgot-Password", { email });

    dispatch({ type: PASSWORD_RESET_REQUEST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_REQUEST_FAIL,
      payload: error.response?.data?.message || "Server error",
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_RESET });

    const response = await axios.put(`/api/resetPassword/${token}`, {
      password,
    });

    dispatch({ type: PASSWORD_RESET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload: error.response?.data?.message || "Server error",
    });
  }
};
