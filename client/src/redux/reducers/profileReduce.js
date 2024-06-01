
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  REGISTER_PROFILE_REQUEST,
  REGISTER_PROFILE_SUCCESS,
  REGISTER_PROFILE_FAILURE,
} from "../actions/profile";

const initialProfileState = {
  loading: false,
  error: null,
  profile: null,
};

const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.payload,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REGISTER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case REGISTER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default profileReducer;