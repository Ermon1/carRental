import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../App.css";
import { getOneReservation } from '../redux/actions/ReservationAction'
import { useDispatch, useSelector } from "react-redux";
import { loginRequestPost } from "./../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";
//import styles from './../styles/style'
import {getProfile} from '../redux/actions/profile'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loginReducer.loading);
  const error = useSelector((state) => state.loginReducer.error);
const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);
    dispatch(loginRequestPost(email, password, handleLoginSuccess));
  };

  const handleLoginSuccess = () => {
    dispatch(getProfile(email));

    dispatch(getOneReservation(null,email))
    navigate("/");
  };
  const clear = function () {
    setEmail("");
    setPassword("");
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="tw-min-h-screen  tw-bg-gray-50 tw-flex-col tw-justify-center tw-py-12 sm:tw-px-6 lg:tw-px-8">
      <div className="sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md">
        <h2 className="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold tw-text-gray-900 ">
          Log to your account
        </h2>
      </div>
      <div className="tw-mt-8 sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md">
        <div className="tw-bg-white  tw-py-8 tw-px-4 tw-shadow sm:tw-rounded-lg sm:tw-px-10 ">
          <form className="tw-space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
              >
                Email Address
              </label>
              <div className="tw-mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-blue-500 focus:tw-border-blue-500 sm:tw-text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
              >
                Password
              </label>
              <div className="tw-mt-1 tw-relative">
                <input
                  name="password"
                  autoComplete="current-password"
                  required
                  type={visible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-border-gray-300 tw-shadow-sm tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-blue-500 focus:tw-border-blue-500 sm:tw-text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="tw-absolute tw-right-2 tw-top-2 tw-cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="tw-absolute tw-right-2 tw-top-2 tw-cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`tw-flex tw-items-center tw-justify-between`}>
              <div className={`tw-flex tw-items-center `}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="tw-h-4 tw-w-4 tw-text-blue-600 focus:tw-ring-blue-500 tw-border-gray-300 tw-rounded"
                />
                <lable
                  htmlFor="remember-me"
                  className="tw-ml-2 tw-block tw-text-sm tw-text-gray-900 "
                >
                  Remember me
                </lable>
              </div>
              <div className="tw-text-sm">
                <a
                  href="/forgot-password"
                  className="tw-font-medium tw-text-blue-600 tw-no-underline hover:tw-text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="tw-group tw-relative tw-w-full tw-h-[40px]  tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border  tw-border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-blue-600 hover:tw-bg-blue-700"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </div>
            <div className={` tw-flex tw-items-center tw-w-full`}>
              <h4>Not have an account?</h4>
              <Link
                to="/register"
                className="tw-text-blue-500 tw-pl-2 tw-no-underline  hover:tw-text-blue-700"
              >
                Sign-up
              </Link>
            </div>
            {error && (
              <p className="tw-text-red-500 tw-mt-4">{error} invalid form </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
