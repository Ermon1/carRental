// ../redux/reducers/carsReducer.js

import {
  ADD_CAR_REQUEST,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILURE,
  CLEAR_REGISTRATION_STATUS,
  UPDATE_CAR_SUCCESS,
  UPDATE_CAR_FAILURE,
} from "../actions/carsAction";

const initialState = {
  cars: [],
  car:null,
  loading: false,
  error: null,
  registrationStatus: null, // Initialize the registrationStatus property
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: [...state.cars, action.payload],
        registrationStatus: "success", // Set the registrationStatus property to 'success'
      };
    case UPDATE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
        // Set the registrationStatus property to 'success'
      };
    case ADD_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        registrationStatus: "failure", // Set the registrationStatus property to 'failure'
      };
    case CLEAR_REGISTRATION_STATUS:
      return {
        ...state,
        registrationStatus: null, // Reset the registrationStatus property to null
      };
    default:
      return state;
  }
};

export default carsReducer;

