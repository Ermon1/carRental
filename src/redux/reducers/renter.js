// reducer.js
import {
  ADD_CAR_INFO_REQUEST,
  ADD_CAR_INFO_SUCCESS,
  ADD_CAR_INFO_FAILURE,
  GET_ALL_CAR_INFO_REQUEST,
  GET_ALL_CAR_INFO_SUCCESS,
  GET_ALL_CAR_INFO_FAILURE,
  GET_ONE_CAR_INFO_REQUEST,
  GET_ONE_CAR_INFO_SUCCESS,
  GET_ONE_CAR_INFO_FAILURE,
  UPDATE_CAR_INFO_REQUEST,
  UPDATE_CAR_INFO_SUCCESS,
  UPDATE_CAR_INFO_FAILURE,
} from "../actions/renter";

const initialState = {
  carInfo: {},
  carInfoList: [], // For storing the list of all car information
  loading: false,
  error: null,
};

const carInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CAR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ADD_CAR_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Failed to add car information.",
      };
    case GET_ALL_CAR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_CAR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        carInfoList: action.payload, // Update the carInfoList with the fetched data
      };
    case GET_ALL_CAR_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Failed to fetch car information.",
      };
    case GET_ONE_CAR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ONE_CAR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        carInfo: action.payload, // Update carInfo with the fetched data for a single car
      };
    case GET_ONE_CAR_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Failed to fetch car information.",
      };
    case UPDATE_CAR_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_CAR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_CAR_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Failed to update car information.",
      };
    default:
      return state;
  }
};

export default carInfoReducer;

