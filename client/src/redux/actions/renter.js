// actions.js
// actions.js
import axios from 'axios';

export const ADD_CAR_INFO_REQUEST = 'ADD_CAR_INFO_REQUEST';
export const ADD_CAR_INFO_SUCCESS = 'ADD_CAR_INFO_SUCCESS';
export const ADD_CAR_INFO_FAILURE = 'ADD_CAR_INFO_FAILURE';
export const GET_ALL_CAR_INFO_REQUEST = "GET_ALL_CAR_INFO_REQUEST";
export const GET_ALL_CAR_INFO_SUCCESS = "GET_ALL_CAR_INFO_SUCCESS";
export const GET_ALL_CAR_INFO_FAILURE = "GET_ALL_CAR_INFO_FAILURE";

export const GET_ONE_CAR_INFO_REQUEST = "GET_ONE_CAR_INFO_REQUEST";
export const GET_ONE_CAR_INFO_SUCCESS = "GET_ONE_CAR_INFO_SUCCESS";
export const GET_ONE_CAR_INFO_FAILURE = "GET_ONE_CAR_INFO_FAILURE";
export const UPDATE_CAR_INFO_REQUEST = "UPDATE_CAR_INFO_REQUEST";
export const UPDATE_CAR_INFO_SUCCESS = "UPDATE_CAR_INFO_SUCCESS";
export const UPDATE_CAR_INFO_FAILURE = "UPDATE_CAR_INFO_FAILURE";

export const addCarInfoRequest = () => {
  return {
    type: ADD_CAR_INFO_REQUEST,
  };
};

export const addCarInfoSuccess = () => {
  return {
    type: ADD_CAR_INFO_SUCCESS,
  };
};

export const addCarInfoFailure = () => {
  return {
    type: ADD_CAR_INFO_FAILURE,
  };
};

export const getAllCarInfoRequest = () => {
  return {
    type: GET_ALL_CAR_INFO_REQUEST,
  };
};

export const getAllCarInfoSuccess = (carInfoList) => {
  return {
    type: GET_ALL_CAR_INFO_SUCCESS,
    payload: carInfoList,
  };
};

export const getAllCarInfoFailure = () => {
  return {
    type: GET_ALL_CAR_INFO_FAILURE,
  };
};

export const getOneCarInfoRequest = () => {
  return {
    type: GET_ONE_CAR_INFO_REQUEST,
  };
};

export const getOneCarInfoSuccess = (carInfo) => {
  return {
    type: GET_ONE_CAR_INFO_SUCCESS,
    payload: carInfo,
  };
};

export const getOneCarInfoFailure = () => {
  return {
    type: GET_ONE_CAR_INFO_FAILURE,
  };
};


export const updateCarInfoRequest = () => {
  return {
    type: UPDATE_CAR_INFO_REQUEST,
  };
};

export const updateCarInfoSuccess = () => {
  return {
    type: UPDATE_CAR_INFO_SUCCESS,
  };
};

export const updateCarInfoFailure = () => {
  return {
    type: UPDATE_CAR_INFO_FAILURE,
  };
};

export const updateCarInfo = (carId, updatedInfo) => {
  return async (dispatch) => {
    dispatch(updateCarInfoRequest());

    const apiUrl = `http://localhost:5000/api/renter/${carId}`;

    try {
      const response = await axios.put(apiUrl, updatedInfo);

      // If the API call is successful, dispatch the success action
      dispatch(updateCarInfoSuccess());
    } catch (error) {
      // If there's an error, dispatch the failure action
      dispatch(updateCarInfoFailure());
    }
  };
};






export const addCarInfo = (carInfo) => {
  return async (dispatch) => {
    dispatch(addCarInfoRequest());

    // Replace the URL below with your API endpoint for adding car information
    const apiUrl = "http://localhost:5000/api/renter";

    try {
      const response = await axios.post(apiUrl, carInfo);

      // If the API call is successful, dispatch the success action
      dispatch(addCarInfoSuccess());
    } catch (error) {
      // If there's an error, dispatch the failure action
      dispatch(addCarInfoFailure());
    }
  };
};


export const getAllCarInfo = () => {
  return async (dispatch) => {
    dispatch(getAllCarInfoRequest());

    const apiUrl = "http://localhost:5000/api/renter";

    try {
      const response = await axios.get(apiUrl);
console.log(response.data)
      // If the API call is successful, dispatch the success action with the data
      dispatch(getAllCarInfoSuccess(response.data));
    } catch (error) {
      console.log(error)
      // If there's an error, dispatch the failure action
      dispatch(getAllCarInfoFailure());
    }
  };
};

export const getOneCarInfo = (carId) => {
  return async (dispatch) => {
    dispatch(getOneCarInfoRequest());

    const apiUrl = `http://localhost:5000/api/renter/${carId}`;

    try {
      const response = await axios.get(apiUrl);

      // If the API call is successful, dispatch the success action with the data
      dispatch(getOneCarInfoSuccess(response.data));
    } catch (error) {
      // If there's an error, dispatch the failure action
      dispatch(getOneCarInfoFailure());
    }
  };
};
