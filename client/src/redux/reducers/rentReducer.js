import {
    SET_RENT_AMOUNT, SET_RENT_DUE_DATE, RENT_LOADING, RENT_FAILURE;
} from '../actions/action'
const initialState = {
  rentAmount: 0,
  rentDueDate: null,
  isLoading: false,
  error: null,
};

const rentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RENT_AMOUNT:
      return {
        ...state,
        rentAmount: action.payload,
        isLoading: false,
        error: null,
      };
    case SET_RENT_DUE_DATE:
      return {
        ...state,
        rentDueDate: action.payload,
        isLoading: false,
        error: null,
      };
    case RENT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case RENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rentReducer;
