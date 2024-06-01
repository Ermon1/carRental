import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLEAR_REGISTRATION_STATUS,
  CLEAR_USER,
} from "../types/types";

const initialState = {
  user: null,
  error: null,
 registrationStatus: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        registrationStatus: "success",
        error: null,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        registrationStatus: null,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: null,
        registrationStatus: "failure",
        error: action.payload,
      };
    case CLEAR_REGISTRATION_STATUS:
      return {
        ...state,
        registrationStatus: null,
      };
    default:
      return state;
  }
};

export default userReducer;

