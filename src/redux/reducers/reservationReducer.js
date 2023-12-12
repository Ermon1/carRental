// reservationReducer.js

// Import the reservation action types
import {
  CREATE_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAILURE,
  GET_RESERVATION_SUCCESS,
  GET_RESERVATION_FAILURE,
  GET_ONERESERVATION_SUCCESS,
  RESERVATION_REQUEST,
  GET_ONERESERVATION_FAILURE,
  UPDATE_RESERVATION_REQUEST,
  UPDATE_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAILURE,
  CLEAR_RESERVATION_DATA
} from "../actions/ReservationAction";

// Initial state
const initialState = {
  reservation: null,
  error: null,
  message: null,
  loadingg: false,
  reserve: null,
  
};

// Reservation reducer
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION_SUCCESS:
      return {
        ...state,
        error: null,
        message: action.payload.message,
        reserve: action.payload.data,
        loadingg: false,
      };
    case RESERVATION_REQUEST:
      return {
        ...state,
        loadingg: true,
      };
    case CLEAR_RESERVATION_DATA:
      return {
        ...state,
        reserve: null,
      };
    case GET_RESERVATION_SUCCESS:
      return {
        ...state,
        reservation: action.payload.data,
        error: null,
        message: action.payload.message,
      };
    case GET_ONERESERVATION_SUCCESS:
      return {
        ...state,
        reserve: action.payload.data,
        error: null,
        message: action.payload.message,
      };
    case CREATE_RESERVATION_FAILURE:
      return {
        ...state,
        reservation: null,
        error: action.payload,
      };
    case GET_ONERESERVATION_FAILURE:
      return {
        ...state,
        reservation: null,
        error: action.payload,
      };
    case GET_RESERVATION_FAILURE:
      return {
        ...state,
        reservation: null,
        error: action.payload,
      };
    case UPDATE_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_RESERVATION_SUCCESS:
      return {
        ...state,
        reservation: action.payload,
        loading: false,
        error: null,
        massage: action.payload.message,
      };
    case UPDATE_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reservationReducer;
