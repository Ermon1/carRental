import axios from 'axios';

// Action types
export const CREATE_RESERVATION_SUCCESS = 'CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';
export const GET_RESERVATION_SUCCESS = "GET_RESERVATION_SUCCESS";
export const GET_RESERVATION_FAILURE = "GET_RESERVATION_FAILURE";
export const GET_RESERVATION_LOADING = "GET_RESERVATION_LOADING";
export const GET_ONERESERVATION_SUCCESS = "GET_ONERESERVATION_SUCCESS";
export const GET_ONERESERVATION_FAILURE = "GET_ONERESERVATION_FAILURE";
export const RESERVATION_REQUEST = "RESERVATION_REQUEST";
// actionTypes.js
export const UPDATE_RESERVATION_REQUEST = "UPDATE_RESERVATION_REQUEST";
export const UPDATE_RESERVATION_SUCCESS = "UPDATE_RESERVATION_SUCCESS";
export const UPDATE_RESERVATION_FAILURE = "UPDATE_RESERVATION_FAILURE";
export const CLEAR_RESERVATION_DATA = "CLEAR_RESERVATION_DATA";

export const createReservationSuccess = (message) => ({
  type: CREATE_RESERVATION_SUCCESS,
  payload: message,
});
export const reservationRequest = () => ({
  type: RESERVATION_REQUEST,
});
export const clearReservationData = () => ({
  type: CLEAR_RESERVATION_DATA,
});
export const getReservationSuccess = (reservation) => ({
  type: GET_RESERVATION_SUCCESS,
  payload: reservation,
});

export const getOneReservationSuccess = (reservation) => ({
  type: GET_ONERESERVATION_SUCCESS,
  payload: reservation,
});


export const createReservationFailure = (error) => ({
  type: CREATE_RESERVATION_FAILURE,
  payload: error,
});

export const getReservationFailure = (error) => ({
  type: GET_RESERVATION_FAILURE,
  payload: error,
});
export const getOneReservationFailure = (error) => ({
  type: GET_ONERESERVATION_FAILURE,
  payload: error,
});

const updateReservationRequest = () => {
  return {
    type: UPDATE_RESERVATION_REQUEST,
  };
};

const updateReservationSuccess = (updatedReservation, message) => {
  return {
    type: UPDATE_RESERVATION_SUCCESS,
    payload: { updatedReservation, message },
  };
};


const updateReservationFailure = (error) => {
  return {
    type: UPDATE_RESERVATION_FAILURE,
    payload: error,
  };
};

export const updateReservation = (id, updatedData) => {
  return (dispatch) => {
    dispatch(updateReservationRequest());

    axios
      .put(`http://localhost:5000/api/reservation/${id}`, updatedData)
      .then((response) => {
        const { data, message } = response.data; // Destructure the response data
        
        dispatch(updateReservationSuccess(data, message));
      })
      .catch((error) => {
        dispatch(updateReservationFailure(error));
      });
  };
};

// Thunk action creator
export const createReservation = (reservationData) => {
  return async (dispatch) => {
    try {
      // Make a POST request to create the reservation
      dispatch(reservationRequest());
      const response = await axios.post(
        "http://localhost:5000/api/reservation",
        reservationData
      ); 
      
      dispatch(createReservationSuccess({ message:response.data.message}));

      
    } catch (error) {
      // Dispatch the failure action if an error occurs
      dispatch(createReservationFailure(error.message));
    }
  };
};

export const getReservation = () => {
  return async (dispatch) => {
    try {
      // Make a POST request to create the reservation
      const response = await axios.get(
        "http://localhost:5000/api/reservation");

      dispatch(
        getReservationSuccess({
          message: response.data.message,
          data: response.data,
        })
      );

      console.log(response.data);
    } catch (error) {
      // Dispatch the failure action if an error occurs
      dispatch(getReservationFailure(error.message));
    }
  };
};


export const getOneReservation = (id,email) => {
  return async (dispatch) => {
    try {
      // Make a POST request to create the reservation
      const response = await axios.get(
        `http://localhost:5000/api/reservation/${id}/${email}`
      );

      dispatch(
        getOneReservationSuccess({
          message: response.data.message,
          data: response.data,
        })
      );

      console.log(response.data.data);
    } catch (error) {
      
      dispatch(getOneReservationFailure(error.message));
    }
  };
};

