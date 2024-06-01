import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { connect } from 'react-redux';
import {
  registerUser,
  clearRegistrationStatus,
} from "../redux/actions/userAction";
import { registerProfile } from "../redux/actions/profile";

import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import "./RegistrationPage.css";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector(
    (state) => state.userReducer.registrationStatus
  );

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "employee",
  });
  const clearFields = () => {
    setUser({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the registerUser action with the user data
    dispatch(registerUser(user))
      .then(() => {
        dispatch({ type: "REGISTER_USER_SUCCESS" });
        console.log(user.email);
        dispatch(registerProfile(user.email));
        clearFields();
      })
      .catch(() => {
        dispatch({ type: "REGISTER_USER_FAILURE" });
      });
  };
  useEffect(() => {
    return () => {
      // Clear the registration status when the component unmounts
      dispatch(clearRegistrationStatus());
    };
  }, [dispatch]);

  return (
    <>
      <div className="tw-min-h-screen  tw-bg-gray-50 tw-flex tw-justify-center tw-py-12 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-mt-8 sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md">
          <form
            className="tw-max-w-md tw-w-full tw-space-6 tw-bg-white tw-rounded-lg tw-shadow-2xl shadow-{4} tw-p-8"
            onSubmit={handleSubmit}
          >
            <div className="sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md">
              <h2 className="tw-text-2xl tw-font-bold tw-mb-6">
                Sign Up for Car Rental.
              </h2>
            </div>
            <div className="tw-col-span-2">
              
            </div>
            <div className="tw-grid tw-grid-cols-2 tw-gap-4">
              <div className="tw-col-span-2">
                <label
                  htmlFor="email"
                  className={`tw-block tw-font-medium tw-mb-1 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
              <div className="tw-col-span-2">
                <label
                  htmlFor="password"
                  className={`tw-block tw-font-medium tw-mb-1 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
              <div className="tw-col-span-2">
                <label
                  htmlFor="confirmPassword"
                  className={`tw-block tw-font-medium tw-mb-1 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className={`tw-w-full tw-mb-4 tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${
                    registrationStatus &&
                    !registrationStatus.includes("success")
                      ? "tw-border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
            </div>
            {registrationStatus && (
              <div className="tw-mb-4">
                {registrationStatus.includes("success") ? (
                  <p className="tw-text-green-500 tw-text-center tw-font-semibold">
                    {registrationStatus}
                  </p>
                ) : (
                  <p className="tw-text-red-500 tw-text-center tw-font-semibold">
                    <p>Registration </p>
                    {registrationStatus}
                  </p>
                )}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="tw-group tw-mb-4 tw-relative tw-w-full tw-h-[40px]  tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border  tw-border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-blue-600 hover:tw-bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`tw-flex tw-items-center tw-w-full`}>
              <h4>Have an account?</h4>
              <Link
                to="/login"
                className="tw-text-blue-500 tw-pl-2 tw-no-underline  hover:tw-text-blue-700"
              >
                Sign-In
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AddEmployee;
