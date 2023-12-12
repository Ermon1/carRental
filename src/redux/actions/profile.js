import axios from "axios";

// Action Types
export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";
export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export const REGISTER_PROFILE_REQUEST = "REGISTER_PROFILE_REQUEST";
export const REGISTER_PROFILE_SUCCESS = "REGISTER_PROFILE_SUCCESS";
export const REGISTER_PROFILE_FAILURE = "REGISTER_PROFILE_FAILURE";

// Action Creators
export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});

export const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (profile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
});

export const updateProfileFailure = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const registerProfileRequest = () => ({
  type: REGISTER_PROFILE_REQUEST,
});

export const registerProfileSuccess = () => ({
  type: REGISTER_PROFILE_SUCCESS,
});

export const registerProfileFailure = (error) => ({
  type: REGISTER_PROFILE_FAILURE,
  payload: error,
});

// Thunk to get user profile
export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(getProfileRequest());

    axios
      .get(`http://localhost:5000/api/profile/${userId}`)
      .then((response) => {
        dispatch(getProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProfileFailure(error.message));
      });
  };
};

// Thunk to update user profile
export const updateProfile = (profileData, userId) => {
  return (dispatch) => {
    dispatch(updateProfileRequest());
    const {id}=userId
console.log(userId)
    axios
      .put(`http://localhost:5000/api/profile/${id}`, profileData)
      .then((response) => {
        dispatch(updateProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateProfileFailure(error.message));
      });
  };
};

// Thunk to register user profile
export const registerProfile = (profileData) => {
  return (dispatch) => {
    dispatch(registerProfileRequest());
    console.log("action "+profileData);
    axios
      .post("http://localhost:5000/api/profile", {email:profileData})
      .then(() => {
        dispatch(registerProfileSuccess());
      })
      .catch((error) => {
        dispatch(registerProfileFailure(error.message));
      });
  };
};
