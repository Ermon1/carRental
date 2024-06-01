import axios from 'axios';
export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';


const url = 'http://localhost:5000/api/cars'
export const fetchCars = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CARS_REQUEST });

    try {
      const response = await axios.get(url); 
      const cars = response.data;
      dispatch({ type: FETCH_CARS_SUCCESS, payload: cars });
    } catch (error) {
        console.log(error)
      dispatch({ type: FETCH_CARS_FAILURE, payload: error.message });
    }
  };
};
