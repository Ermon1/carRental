// rentActions.js
import axios from "axios";

export const SET_RENT_AMOUNT = "SET_RENT_AMOUNT";
export  const SET_RENT_DUE_DATE = "SET_RENT_DUE_DATE";
export const RENT_LOADING = "RENT_LOADING";
export const RENT_FAILURE = "RENT_FAILURE";

export const setRentAmount = (amount) => ({
  type: SET_RENT_AMOUNT,
  payload: amount,
});

export const setRentDueDate = (dueDate) => ({
  type: SET_RENT_DUE_DATE,
  payload: dueDate,
});

const rentLoading = () => ({
  type: RENT_LOADING,
});

const rentFailure = (error) => ({
  type: RENT_FAILURE,
  payload: error,
});

// Async action creator to store rent data on the server
export const storeRentData = (rentData) => {
  return async (dispatch) => {
    try {
      dispatch(rentLoading());
      const response = await axios.post("/api/rent", rentData);
      dispatch(setRentAmount(response.data.amount));
      dispatch(setRentDueDate(response.data.dueDate));
    } catch (error) {
      dispatch(rentFailure("Error storing rent data."));
    }
  };
};

// Async action creator to update rent data on the server
export const updateRentData = (rentData) => {
  return async (dispatch) => {
    try {
      dispatch(rentLoading());
      const response = await axios.put("/api/rent", rentData);
      dispatch(setRentAmount(response.data.amount));
      dispatch(setRentDueDate(response.data.dueDate));
    } catch (error) {
      dispatch(rentFailure("Error updating rent data."));
    }
  };
};

// Async action creator to get rent data from the server
export const getRentData = () => {
  return async (dispatch) => {
    try {
      dispatch(rentLoading());
      const response = await axios.get("/api/rent");
      dispatch(setRentAmount(response.data.amount));
      dispatch(setRentDueDate(response.data.dueDate));
    } catch (error) {
      dispatch(rentFailure("Error fetching rent data."));
    }
  };
};
