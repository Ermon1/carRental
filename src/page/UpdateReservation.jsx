import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { updateReservation } from "../redux/actions/ReservationAction";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const UpdateReservation = () => {
  const [updateres, setUpdat] = useState(false);
  const [reserved, setReserved] = useState(null);
  const [lengthInMillis, setLengthInMillis] = useState(false);
  const [id, setId] = useState(null);
  const [days, setDays] = useState(null);
  const [noReservationDone, setNoReservationDone] = useState(false);

  const dispatch = useDispatch();

  const [reservationData, setReservationData] = useState({
    dropOffLocation: "",
    dropOffTime: "",
    dropOffDate: "",
    paymentImageAdd: null,
    status: "",
    amount: "",
  });

  const { reserve } = useSelector((state) => state.reservationReducer);

  const handleEditProfile = (reser) => {
    setReserved(reser);
    setId(reser._id);
    setUpdat(true);
  };

  if (!reserve) {
    <div className="tw-text-center">
      <h1 className="tw-text-emerald-800">loading</h1>
    </div>;
  }

  const InvalidLengthMessage = () => (
    <div className="tw-text-center">
      Invalid length. We can rent the car for at least one day. Drop-off date
      must be greater than pick-up date with a minimum of one day.
      <Link
        to="/updatereservation"
        className="tw-text-blue-500 tw-font-bold tw-underline"
      >
        Go to reservation
      </Link>
    </div>
  );

  useEffect(() => {
    if (reserved) {
      const pickUpDate = new Date(reserved.pickUpDate);
      const currentTime = new Date();
      const lengthInmin = currentTime.getTime() - pickUpDate.getTime() > 0;
      setLengthInMillis(lengthInmin);
    }

    if (reservationData.dropOffDate) {
      const dropOffDate = new Date(reservationData.dropOffDate);
      const pickUpDate = new Date(reserved.pickUpDate);
      const lengthInMillisc = dropOffDate.getTime() - pickUpDate.getTime();
      const lengthInDays = lengthInMillisc / (1000 * 60 * 60 * 24);
      console.log(lengthInMillisc);

      setDays(lengthInDays);

      if (lengthInDays < 1) {
        InvalidLengthMessage();
      }

      const total = days * reserved.car.price;
      console.log(days);
      setReservationData((prevState) => ({
        ...prevState,
        amount: total,
      }));
    }
  }, [updateres, reserved, reservationData.dropOffDate, days]);

  useEffect(() => {
    setNoReservationDone(reserve.length === 0);
  }, [reserve]);

  const [res] = reserve;

  if (!res) {
    return (
      <div className="tw-text-center">
        <h1 className="tw-text-emerald-800 tw-text-4xl">No reservation done</h1>
      </div>
    );
  }
  if (!reserve.length === 0) {
    return (
      <div className="tw-text-center">
        <h1 className="tw-text-emerald-800 tw-text-4xl">No reservation done</h1>
      </div>
    );
  }
  const handleChange = (e) => {
    setReservationData((prestate) => ({
      ...prestate,
      [e.target.name]: e.target.value,
      status: "update",
    }));
  };

  const handleImageChange = async (e) => {
    const { name } = e.target;

    const file = e.target.files[0];

    const reader = new FileReader();

    await new Promise((resolve) => {
      reader.onloadend = () => {
        setReservationData((prevFormData) => ({
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

  const handleUpdateReservation = () => {
    const updatedReservation = {
      ...reserved,
      status: "update",
    };
    dispatch(updateReservation(id, updatedReservation));
    setUpdat(false);
    setReservationData({
      dropOffLocation: "",
      dropOffTime: "",
      dropOffDate: "",
      paymentImageAdd: null,
      status: "",
      amount: "",
    });
  };

  const handleCancelReservation = () => {
    const updatedReservation = {
      ...reserved,
      status: "canceled",
    };

    dispatch(updateReservation(reserved._id, updatedReservation));
  };
  console.log(reserve);

  return (
    <>
      <div className="tw-container tw-mx-auto tw-mt-8 tw-max-w-md tw-mb-10">
        <div className="tw-mb-7">
          <Typography
            variant="h4"
            component="h1"
            className="tw-text-blue-500 tw-mb-4 tw-mt-8"
          >
            reservation Page
          </Typography>
        </div>

        {updateres ? (
          <div className="tw-bg-gradient-to-r tw-from-cyan-200 tw-via-sky-200 tw-to-sky-500 tw-p-4 md:p-8 tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-items-center md:items-start tw-space-y-4 md:space-y-0 tw-flex-wrap tw-sm:flex-nowrap">
            <input
              type="text"
              placeholder="Drop-off Location "
              name="dropOffLocation"
              value={reservationData.dropOffLocation}
              onChange={handleChange}
              className="tw-mb-4 tw-w-full tw-py-2 tw-px-4 tw-rounded-lg tw-bg-white tw-bg-opacity-20 tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500"
            />
            <input
              type="date"
              name="dropOffDate"
              value={reservationData.dropOffDate}
              onChange={handleChange}
              className="tw-mb-4 tw-w-full tw-py-2 tw-px-4 tw-rounded-lg tw-bg-white tw-bg-opacity-20 tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500"
            />
            <input
              type="time"
              name="dropOffTime"
              value={reservationData.dropOffTime}
              onChange={handleChange}
              className="tw-mb-4 tw-w-full tw-py-2 tw-px-4 tw-rounded-lg tw-bg-white tw-bg-opacity-20 tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500"
            />
            <div>
              <div className="tw-mb-4 tw-flex tw-items-center ">
                <span className="tw-inline-block tw-h-32 tw-w-32 tw-rounded-full tw-overflow-hidden">
                  {reservationData.paymentImageAdd ? (
                    <img
                      src={reservationData.paymentImageAdd}
                      alt="avatar"
                      className="tw-w-full sm:tw-h-24 sm:tw-w-24 tw-h-full tw-object-cover tw-rounded-full"
                    />
                  ) : (
                    <RxAvatar className="tw-h-32 tw-w-32 sm:tw-h-24 sm:tw-w-24" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="tw-ml-5 tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-rounded-md tw-shadow-sm tw-text-sm tw-bg-white tw-font-medium tw-text-gray-700 tw-border tw-border-gray-300 hover:tw-bg-gray-50"
                >
                  <span>
                    Payment Screenshot
                    <input
                      type="file"
                      id="paymentImage"
                      name="paymentImageAdd"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="tw-cursor-pointer tw-overflow-hidden tw-w-full"
                    />
                  </span>
                </label>
              </div>
              <div>
                <p className="tw-text-white tw-font-semibold tw-mb-2">
                  {"Total amount is  " + reservationData.amount}
                </p>
              </div>
            </div>

            <button
              onClick={handleUpdateReservation}
              className="tw-mt-4 tw-py-2 tw-w-20 tw-px-4 tw-bg-blue-500 hover:tw-bg-blue-600 tw-rounded-md tw-text-white tw-font-semibold  tw-border tw-border-transparent focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500"
            >
              Update
            </button>
            {lengthInMillis ? (
              <button
                onClick={handleCancelReservation}
                className="tw-ml-4 tw-py-2 tw-px-4 tw-w-20 tw-bg-red-500 hover:tw-bg-red-600 tw-rounded-md tw-text-white tw-font-semibold tw-border tw-border-transparent focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-red-500"
              >
                Cancel
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          reserve.map((reserved) => (
            <div key={reserved._id}>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                First Name:{" "}
                {reserved?.profile.firstName + " " + reserved.profile.lastName}
              </Typography>

              <Typography variant="h6" component="h2" className="tw-mb-2">
                Email: {reserved.email}
              </Typography>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                Phone: {reserved.profile.phone}
              </Typography>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                pickUpDate: {reserved.pickUpDate}
              </Typography>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                dropOffDate: {reserved.dropOffDate}
              </Typography>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                dropOffLocation: {reserved.dropOffLocation}
              </Typography>
              <Typography variant="h6" component="h2" className="tw-mb-2">
                Status: {"     " + reserved.status}
              </Typography>

              {/* Add more profile fields here */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditProfile(reserved)}
              >
                Edit Profile
              </Button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default UpdateReservation;
