// EmployeeActions.js

import axios from "axios";

// Action Types
export const REGISTER_EMPLOYEE_REQUEST = "REGISTER_EMPLOYEE_REQUEST";
export const REGISTER_EMPLOYEE_SUCCESS = "REGISTER_EMPLOYEE_SUCCESS";
export const REGISTER_EMPLOYEE_FAILURE = "REGISTER_EMPLOYEE_FAILURE";

export const UPDATE_EMPLOYEE_REQUEST = "UPDATE_EMPLOYEE_REQUEST";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const DELETE_EMPLOYEE_REQUEST = "DELETE_EMPLOYEE_REQUEST";
export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAILURE = "DELETE_EMPLOYEE_FAILURE";

// Action Creators for Registering an Employee
export const registerEmployeeRequest = () => ({
  type: REGISTER_EMPLOYEE_REQUEST,
});

export const registerEmployeeSuccess = () => ({
  type: REGISTER_EMPLOYEE_SUCCESS,
});

export const registerEmployeeFailure = () => ({
  type: REGISTER_EMPLOYEE_FAILURE,
});

export const registerEmployee = (formData) => async (dispatch) => {
  dispatch(registerEmployeeRequest());

  try {
    const response = await axios.post("/api/register", {
      ...formData,
      role: "employee", // Set the role to "employee"
    });

    // Dispatch the success action
    dispatch(registerEmployeeSuccess());

    // Handle additional actions after successful registration
  } catch (error) {
    // Dispatch the failure action
    dispatch(registerEmployeeFailure());

    // Handle registration error
  }
};

// Action Creators for Updating an Employee
export const updateEmployeeRequest = () => ({
  type: UPDATE_EMPLOYEE_REQUEST,
});

export const updateEmployeeSuccess = () => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
});

export const updateEmployeeFailure = () => ({
  type: UPDATE_EMPLOYEE_FAILURE,
});

export const updateEmployee = (id, formData) => async (dispatch) => {
  dispatch(updateEmployeeRequest());

  try {
    const response = await axios.put(`/api/register/${id}`, formData);

    // Dispatch the success action
    dispatch(updateEmployeeSuccess());

    // Handle additional actions after successful update
  } catch (error) {
    // Dispatch the failure action
    dispatch(updateEmployeeFailure());

    // Handle update error
  }
};

// Action Creators for Deleting an Employee
export const deleteEmployeeRequest = () => ({
  type: DELETE_EMPLOYEE_REQUEST,
});

export const deleteEmployeeSuccess = () => ({
  type: DELETE_EMPLOYEE_SUCCESS,
});

export const deleteEmployeeFailure = () => ({
  type: DELETE_EMPLOYEE_FAILURE,
});

export const deleteEmployee = (id) => async (dispatch) => {
  dispatch(deleteEmployeeRequest());

  try {
    const response = await axios.delete(`/api/register/${id}`);

    // Dispatch the success action
    dispatch(deleteEmployeeSuccess());

    // Handle additional actions after successful deletion
  } catch (error) {
    // Dispatch the failure action
    dispatch(deleteEmployeeFailure());

    // Handle deletion error
  }
};
