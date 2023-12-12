// import { REGISTER_USER } from '../types/types';
import axios from 'axios';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLEAR_REGISTRATION_STATUS,
  CLEAR_USER,
} from "../types/types";
const url = 'http://localhost:5000/api/register'
// Action to register a new user
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(url, userData);
    const token = response.data.token
    //localStorage.setItem('token', token);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: response.data,
    });
    
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data,
    });
  }
};




// Action Creators
export const clearRegistrationStatus = () => {
  return {
    type: CLEAR_REGISTRATION_STATUS
  };
};
