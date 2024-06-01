import React from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const roundedRating = Math.round(rating);

  return (
    <div className="tw-flex tw-items-center">
      <span className="tw-mr-2 tw-text-2xl">{rating}</span>
      <div className="tw-flex tw-items-center">
        {Array.from({ length: totalStars }, (_, index) => (
          <FaStar
            key={index}
            className={`tw-w-6 tw-h-6 tw-text-2xl ${
              index < roundedRating ? "tw-text-yellow-500" : "tw-text-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const CarDetailPage = () => {
  const { car, loading, error } = useSelector((state) => state.carReducer);

  if (loading) {
    return <div className="tw-text-center">Loading...</div>; // Apply loading style
  }

  if (error) {
    return <div className="tw-text-center tw-text-red-500">Error: {error}</div>; // Apply error style
  }
  return (
    <div className="tw-container tw-mx-auto tw-max-w-4xl tw-p-4">
      <div className="tw-flex tw-items-center tw-mb-4">
        <div className="tw-flex tw-items-center tw-mb-4">
          <img
            className="tw-w-full tw-object-cover tw-h-auto tw-mr-4"
            src={car.image.url}
            alt={car.make}
          />
        </div>
      </div>
      <div className="">
        <h1 className="tw-flex  tw-justify-center  tw-text-2xl">
          MAKE: {car.make}
        </h1>
        <h2 className=" tw-flex tw-justify-center   tw-text-2xl">
          MODEL: {car.model}
        </h2>
        <p className=" tw-text-2xl  tw-flex tw-justify-center tw-text-gray-500">
          YEAR: {"  "}
          {car.year}
        </p>
        <p className=" tw-text-2xl tw-flex tw-justify-center tw-text-gray-500">
          color: {"  "}
          {car.color}
        </p>
        <p className="  tw-text-2xl tw-flex tw-justify-center  tw-text-gray-500">
          {" "}
          licensePlate: {car.licensePlate}
        </p>
      </div>
      <div className="tw-flex tw-mt-6  tw-text-xl tw-justify-center tw-items-center tw-mb-4">
        <div className="tw-w-24 tw-justify-center  tw-text-2xl  tw-text-gray-500">
          Availability::{" "}
        </div>{" "}
        {"   "}
        <div className="tw-flex tw-pl-12 tw-justify-center tw-items-center">
          {car.availability ? (
            <span className="tw-px-2 tw-py-1 tw-bg-green-500 tw-text-white tw-rounded">
              Available
            </span>
          ) : (
            <span className="tw-px-2 tw-py-1 tw-bg-red-500 tw-text-white tw-rounded">
              Not Available
            </span>
          )}
        </div>
      </div>

      <div className="tw-flex tw-text-2xl tw-justify-center tw-items-center tw-mb-4">
        <div className="tw-w-24 tw-text-2xl tw-flex tw-text-gray-500">
          Rating:
        </div>
        <div className="tw-flex tw-text-2xl tw-items-center">
          <StarRating rating={car.rating} />
        </div>
      </div>

      <div className="tw-flex  tw-text-2xl  tw-justify-center tw-items-center tw-mb-4">
        <div className="tw-w-24  tw-text-2xl tw-flex tw-justify-center tw-text-gray-500">
          Automatic:
        </div>
        <div className="tw-flex tw-pl-12 tw-justify-center tw-items-center">
          {car.automatic ? (
            <svg
              className="tw-w-6 tw-h-6 tw-fill-current tw-text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2 9V2h16v7a6 6 0 1 1-12 0zm2-5v3h2V4h8v3h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm0 7v4h12v-4H4zm6 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h-4v2z"
              />
            </svg>
          ) : (
            <svg
              className="tw-w-6  tw-text-2xl tw-h-6 tw-fill-current tw-text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 11H2v5h16v-5zM2 9h16L20 6 12 0 4 6l-2 3zm2-3h12v1H4V6zm-2 7h16v5H2v-5zM0 15h20l-2 3H2l-2-3z"
              />
            </svg>
          )}
        </div>
      </div>

      <div className="tw-flex   tw-text-2xl tw-mt-6 tw-justify-center tw-items-center tw-mb-4">
        <h3 className="tw-text-2xl tw-pr-6  tw-text-gray-500">SeatNumber:</h3>
        <p> {car.seatNumber}</p>
      </div>

      <div className="tw-mb-4  tw-text-2xl sm:flex-col md:flex-row">
        <h3 className=" tw-text-2xl tw-font-semibold">Description:</h3>
        <p className="tw-bg-blue-200 tw-border tw-border-gray-300 tw-p-4 tw-text-center tw-break-words">
          {car.description}
        </p>
      </div>

      <div className="tw-w-full tw-text-2xl tw-mt-3 tw-mb-4 tw-flex tw-justify-center">
        <h3 className="tw-text-2xl tw-pr-6 tw-font-semibold">Price:</h3>
        <p className="tw-bg-gray-200 tw-text-red-600 tw-text-3xl tw-mb-10 tw-font-bold tw-pb-4">
          ${car.price}
        </p>
      </div>
    </div>
  );
};

export default CarDetailPage;
