
import axios from 'axios';
import { clearReservationData } from "./ReservationAction";
// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const url = 'http://localhost:5000/api/login'
// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});


export const logoutSuccess = () => {
  return (dispatch) => {
    
    localStorage.removeItem("token");

    // Clear the reservation data from the Redux store
    

    // Dispatch the logout success action
    dispatch({ type: LOGOUT_SUCCESS });
     dispatch(clearReservationData());
  };
};
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});




export const loginRequestPost = (email, password, onSuccess) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    // Send the login request to the server
    axios
      .post(url , { email, password })
      .then((response) => {
        const token = response.data.token;

        // Save the token to local storage or state
        // ... your implementation here ...
localStorage.setItem('token', token);
        // On successful login, dispatch the success action and call the onSuccess callback
         if (response.data.user) {
           dispatch(loginSuccess(response.data.user));
           onSuccess();
         }
        
       
      })
      .catch((error) => {
        // On login failure, dispatch the failure action with the error message
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      });
  };
};


