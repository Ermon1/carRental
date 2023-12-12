

import axios from 'axios';

// Action Types
export const FETCH_CAR_REQUEST = 'FETCH_CAR_REQUEST';
export const FETCH_CAR_SUCCESS = 'FETCH_CAR_SUCCESS';
export const FETCH_CAR_FAILURE = 'FETCH_CAR_FAILURE';

export const fetchCarRequest = () => {
  return {
    type: FETCH_CAR_REQUEST,
  };
};

export const fetchCarSuccess = (car) => {
  return {
    type: FETCH_CAR_SUCCESS,
    payload: car,
  };
};

export const fetchCarFailure = (error) => {
  return {
    type: FETCH_CAR_FAILURE,
    payload: error,
  };
};



//const url = 'http://localhost:5000/api/carDetail'
// Thunk function to fetch car detail
export const fetchCarDetail = (carId) => {
  return (dispatch) => {
    dispatch(fetchCarRequest());

    axios.get(`http://localhost:5000/api/carDetail/${carId}`)
      .then((response) => {
        const car = response.data;
        console.log(car)
        dispatch(fetchCarSuccess(car));
      })
      .catch((error) => {
        dispatch(fetchCarFailure(error));
      });
  };
};
