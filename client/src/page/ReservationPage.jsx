import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { IconName } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createReservation } from "../redux/actions/ReservationAction";
import classNames from "tailwindcss/tailwind.css";

const ReservationPage = () => {
  const { profile } = useSelector((state) => state.profileReducer);
  let { message, error, loadingg, reserve } = useSelector(
    (state) => state.reservationReducer
  );
  const { car, loading } = useSelector((state) => state.carReducer);
const isAuthenticated = useSelector(
  (state) => state.loginReducer.isAuthenticated
);
  console.log(profile)
  
 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    status: "pending",
    pickUpDate: "",
    email: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    paymentImage: null,
    driverLicenseImage: null,
    idImage: null,
    termsAccepted: false,
    car: null,
    profile: null,
    amount: null,
  });




  useEffect(() => {
    if (!car || !profile) {
      return navigate("/login");
    }
  }, []);

   if(!isAuthenticated){
     return <div className="tw-text-center">First Login please</div>
     return navigate("/login");
  }

  if (loading) {
     <div className="tw-text-center">Loading...</div>;
    // Apply loading style
  }

  if (error) {
    prompt("error", error);
    error = null;
    console.log(error);
    return navigate("/cars");
  } else {
  }

  console.log(profile.email);

  // thr function handle the  the inpute file of the state which is no file
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      car: car._id,
      profile: profile._id,
      email: profile.email,
    }));

    if (formData.dropOffDate && formData.pickUpDate) {
      // Assuming formData.dropOffDate and formData.pickUpDate are valid Date objects
      const dropOffDate = new Date(formData.dropOffDate);
      const pickUpDate = new Date(formData.pickUpDate);

      // Calculate the difference in milliseconds between drop-off and pick-up dates
      const lengthInMillis = dropOffDate.getTime() - pickUpDate.getTime();

      const lengthInDays = lengthInMillis / (1000 * 60 * 60 * 24);

      if (lengthInDays <= 1) {
        return (
          <div className="tw-text-center">
            Invalid length. we car rent the car for at least one day dropOffDate
            must be greater than pickUpDate with min of one day.
            <Link
              to="/reservation"
              className=" 
                tw-text-blue-500
                tw-font-bold
                tw-underline"
              
            >
              Go to reservation
            </Link>
            {(formData.dropOffDate = "")}
            {(formData.pickUpDate = "")}
          </div>
        );
      } else {
        const money = lengthInDays * car.price;
        console.log(money);
        setFormData((prevFormData) => ({
          ...prevFormData,
          car: car._id,
          profile: profile._id,
          amount: money,
        }));
      }
    }
  };
  console.log(formData);

  const handleImageChange = async (e) => {
    const { name } = e.target;

    const file = e.target.files[0];

    const reader = new FileReader();

    await new Promise((resolve) => {
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: reader.result,
        }));
        resolve();
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  };
  if (message) {
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createReservation(formData));
  };
console.log(profile.isProfileComplete);
  if (!profile.isProfileComplete) {
    <div className="tw-text-center">complete your profile please</div>; // Apply loading style
    navigate("/profilepage");
  }

  const isSubmitDisabled = !formData.termsAccepted;
  if (formData.dropOffLocation === "") {
    message = null;
  }

  return (
    <div className=" tw-flex tw-items-center tw-justify-center      tw-py-24">
      <div className="sm:tw-max-w-md  tw-shadow-2xl tw-rounded-lg tw-bg-white tw-p-6 tw-min-w-[70%]   ">
        <form onSubmit={handleSubmit}>
          <h1 className="tw-text-2xl  tw-font-bold tw-mb-4 tw-text-center">
            Car Rental Reservation
          </h1>
          <div className="md:tw-grid md:tw-grid-cols-1 lg:tw-grid lg:tw-grid-cols-2 tw-gap-8  md:tw-w-full">
            <div className="tw-mb-4">
              <label
                htmlFor="pickUpLocation"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Pick-up Location
              </label>
              <input
                type="text"
                id="pickUpLocation"
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                placeholder="Enter the pick-up location"
                required
              />
            </div>

            <div className="tw-mb-4">
              <label
                htmlFor="dropOffLocation"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Drop-off Location
              </label>
              <input
                type="text"
                id="dropOffLocation"
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                placeholder="Enter the drop-off location"
                required
              />
            </div>

            <div className="tw-mb-4">
              <label
                htmlFor="pickUpDate"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Pick-up Date
              </label>
              <input
                type="date"
                id="pickUpDate"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                required
              />
            </div>

            <div className="tw-mb-4">
              <label
                htmlFor="pickUpTime"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Pick-up Time
              </label>
              <input
                type="time"
                id="pickUpTime"
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                required
              />
            </div>

            <div className="tw-mb-4">
              <label
                htmlFor="dropOffDate"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Drop-off Date
              </label>
              <input
                type="date"
                id="dropOffDate"
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                required
              />
            </div>

            <div className="tw-mb-4">
              <label
                htmlFor="dropOffTime"
                className="tw-block tw-mb-1 tw-font-medium"
              >
                Drop-off Time
              </label>
              <input
                type="time"
                id="dropOffTime"
                name="dropOffTime"
                value={formData.dropOffTime}
                onChange={handleChange}
                className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
                required
              />
            </div>
            <div className="tw-m-6 tw-text-green-900 tw-text-lg">
              TotalAmount:{" "}
              <span className="tw-text-rose-800">{formData.amount}</span>
            </div>

            <div>
              <div className="tw-mb-4 tw-flex tw-items-center ">
                <span className="tw-inline-block  tw-h-32 tw-w-32 tw-rounded-full tw-overflow-hidden">
                  {formData.driverLicenseImage ? (
                    <img
                      src={formData.driverLicenseImage}
                      alt="avatar"
                      className="tw-w-full tw-h-full  tw-object-cover tw-rounded-full"
                    />
                  ) : (
                    <RxAvatar className="lg:tw-h-32 lg:tw-w-32 md:tw-h-28 md:tw-w-28 sm:tw-h-24 sm:tw-w-24 tw-mr-12 " />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="tw-ml-5 tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-rounded-md tw-shadow-sm tw-text-sm tw-bg-white tw-font-medium tw-text-gray-700 tw-border tw-border-gray-300  hover:tw-bg-gray-50"
                >
                  <span>
                    driverLicenseImage
                    <input
                      type="file"
                      id="driverLicenseImage"
                      name="driverLicenseImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className=" tw-cursor-pointer tw-overflow-hidden tw-w-full"
                    />
                  </span>
                </label>
              </div>
            </div>

            <div>
              <div className="tw-mb-4 tw-flex tw-items-center tw-justify-between">
                <span className="tw-inline-block  tw-h-32 tw-w-32 tw-rounded-full tw-overflow-hidden">
                  {formData.idImage ? (
                    <img
                      src={formData.idImage}
                      alt="avatar"
                      className="tw-w-full tw-h-full sm:tw-h-24 sm:tw-w-24  tw-object-cover tw-rounded-full"
                    />
                  ) : (
                    <RxAvatar className="tw-h-32 sm:tw-h-24 sm:tw-w-24 " />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="tw-ml-5 tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-rounded-md tw-shadow-sm tw-text-sm tw-bg-white tw-font-medium tw-text-gray-700 tw-border tw-border-gray-300  hover:tw-bg-gray-50"
                >
                  <span>
                    id card Image
                    <input
                      type="file"
                      id="idImage"
                      name="idImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className=" tw-cursor-pointer tw-overflow-hidden tw-w-full"
                    />
                  </span>
                </label>
              </div>
            </div>
            <div>
              <div className="tw-mb-4 tw-flex tw-items-center ">
                <span className="tw-inline-block  tw-h-32 tw-w-32 tw-rounded-full tw-overflow-hidden">
                  {formData.paymentImage ? (
                    <img
                      src={formData.paymentImage}
                      alt="avatar"
                      className="tw-w-full sm:tw-h-24 sm:tw-w-24 tw-h-full  tw-object-cover tw-rounded-full"
                    />
                  ) : (
                    <RxAvatar className="tw-h-32 tw-w-32 sm:tw-h-24 sm:tw-w-24" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="tw-ml-5 tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-rounded-md tw-shadow-sm tw-text-sm tw-bg-white tw-font-medium tw-text-gray-700 tw-border tw-border-gray-300  hover:tw-bg-gray-50"
                >
                  <span>
                    payment screenshot
                    <input
                      type="file"
                      id="paymentImage"
                      name="paymentImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className=" tw-cursor-pointer  tw-overflow-hidden tw-w-full"
                    />
                  </span>
                </label>
              </div>
            </div>
            <div></div>
            <div className="tw-mb-4">
              <label
                htmlFor="termsAccepted"
                className="tw-flex tw-items-center tw-mb-2"
              >
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="tw-mr-2 "
                />
                <span className="tw-text-md  tw-font-bold ">
                  I accept the{" "}
                  <Link
                    to="/termsAndCondtion"
                    className="tw-text-blue-500 hover:tw-text-blue-700"
                  >
                    Privacy Policy and Terms &amp; Conditions
                  </Link>
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`tw-block tw-w-full tw-py-2 tw-mt-4 tw-rounded ${
              isSubmitDisabled
                ? "tw-bg-gray-400 tw-text-gray-600"
                : "tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white"
            } tw-font-semibold `}
          >
            {loadingg ? "Submiting for reservation" : "submit"}
          </button>
          <p className="tw-text-green-700 tw-ml-8 tw-py-5">{message}</p>
          <p className="tw-text-green-700 tw-ml-8 tw-py-5">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
