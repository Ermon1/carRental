import axios from "axios";

// Action Types
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

// Action Creators
export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

// Async Action Creator
export const updateUser = (updatedUserData) => {
  return (dispatch) => {
    dispatch(updateUserRequest());

    // Make an API call using Axios to update user data
    axios
      .put(
        `http://localhost:5000/api/users/${updatedUserData.email}`,
        updatedUserData
      )
      .then((response) => {
        // Assuming the API response returns the updated user data
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateUserFailure(error.message));
      });
  };
};
