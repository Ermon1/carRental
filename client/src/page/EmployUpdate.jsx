// UpdatePage.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../redux/actions/employee";

const EmployUpdate = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have the employee ID as a prop or from the URL params
     // Replace with the actual employee ID
    dispatch(updateEmployee(formData.email, formData));
  };

  return (
    <div className="tw-container tw-mx-auto tw-mt-8">
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4">Update Employee</h1>
      <form onSubmit={handleSubmit} className="tw-max-w-md">
        <div className="tw-mb-4">
          <label
            className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-py-2 tw-px-3 tw-rounded tw-w-full tw-focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            required
          />
        </div>
        <div className="tw-mb-4">
          <label
            className="tw-block tw-text-gray-700 tw-text-sm tw-font-bold tw-mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="tw-border tw-border-gray-300 tw-py-2 tw-px-3 tw-rounded tw-w-full tw-focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EmployUpdate;
