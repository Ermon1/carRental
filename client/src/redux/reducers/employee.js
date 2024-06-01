// employeeReducer.js

import {
  REGISTER_EMPLOYEE_REQUEST,
  REGISTER_EMPLOYEE_SUCCESS,
  REGISTER_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
} from "../actions/employee";

const initialState = {
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_EMPLOYEE_REQUEST:
    case UPDATE_EMPLOYEE_REQUEST:
    case DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_EMPLOYEE_SUCCESS:
    case UPDATE_EMPLOYEE_SUCCESS:
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_EMPLOYEE_FAILURE:
    case UPDATE_EMPLOYEE_FAILURE:
    case DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
