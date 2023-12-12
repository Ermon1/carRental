import axios from 'axios';

export const ADD_CAR_REQUEST = 'ADD_CAR_REQUEST';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_FAILURE = 'ADD_CAR_FAILURE';
export const CLEAR_REGISTRATION_STATUS = 'CLEAR_REGISTRATION_STATUS';
export const UPDATE_CAR_SUCCESS = "UPDATE_CAR_SUCCESS";
export const UPDATE_CAR_FAILURE = "UPDATE_CAR_FAILURE";

export const addCarRequest = () => ({
  type: ADD_CAR_REQUEST,
});

export const addCarSuccess = (car) => ({
  type: ADD_CAR_SUCCESS,
  payload: car,
});

export const updateCarSuccess = (car) => ({
  type: UPDATE_CAR_SUCCESS,
  payload: car,
});

export const updateCarFailure = (error) => ({
  type: UPDATE_CAR_FAILURE,
  payload: error,
});

export const addCarFailure = (error) => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});

export const clearRegistrationStatus = () => ({
  type: CLEAR_REGISTRATION_STATUS,
});

export const addCar = (carData) => {
  return async (dispatch) => {
    dispatch(addCarRequest());

    try {
      const response = await axios.post('http://localhost:5000/api/addcar', carData);
      if (response.status === 200) {
        dispatch(addCarSuccess(response.data));
      }
      dispatch(addCarFailure("error happend"));
      
    } catch (error) {
      dispatch(addCarFailure(error));
    }
  };
};
export const updateCar = (carData) => {
  return async (dispatch) => {
    dispatch(addCarRequest());

    try {
      const response = await axios.put(
        `http://localhost:5000/api/addcar/${carData._id}`,
        carData
      );
      if (response.status === 200) {
        dispatch(updateCarSuccess(response.data));
      }
      dispatch(updateCarFailure("error happend"));
    } catch (error) {
      dispatch(updateCarFailure(error));
    }
  };
};

export const registerCar = addCar; // Exporting the addCar action as registerCar
