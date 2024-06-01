import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link, useNavigate, } from 'react-router-dom';
import {Image} from 'cloudinary-react'
import {useDispatch} from 'react-redux'
import {fetchCarDetail} from './../redux/actions/carDetailAction'





const CarCard = ({car}) => {
// const { make, model, fuelLevel, description, color, year } = car;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCarDetailClick = () => {
    dispatch(fetchCarDetail(car._id));
   navigate('/profile');
  };
  const handleCarReservationClick = () => {
     const avaialble = car.availability;
     if (avaialble !== "available") {
       alert(avaialble);
      return navigate("/cars");
     }
    dispatch(fetchCarDetail(car._id));
   navigate('/reservation');
  };
const image =car.image

  return (
    <div className=" tw-shadow-2xl  tw-rounded-lg tw-overflow-hidden tw-bg-white tw-p-6 tw-mb-4 tw-flex tw-flex-col tw-max-w-lg  ">
      <div className="tw-relative tw-flex tw-justify-center tw-mb-4">
        <div className="tw-h-56 tw-shadow-lg tw-w-full tw-bg-gray-300 tw-overflow-hidden">
          <img
            className="tw-object-cover tw-drop-shadow-lg  tw-shadow- tw-h-full tw-w-full"
            src={image.url}
            alt={`${car.make} ${car.model}`}
          />
        </div>
      </div>
      <div className="tw-text-center tw-mb-4">
        <h2 className="tw-text-xl tw-text-center tw-font-bold tw-mb-2">
          <span className="tw-text-gray-600 tw-text-sm">name &amp; model:</span>
          {car.make} {car.model}
        </h2>
        <p className="tw-text-gray-600 tw-mb-2">made in: {car.year}</p>
        <p className="tw-text-gray-600 tw-mb-2">Price: {car.price} Birr</p>
        <p className="tw-text-gray-600 tw-mb-2">
          Availablity : <span tw-text-red-500>{car.availability}</span>
        </p>
        <div>
          <StarRatings
            rating={4.5}
            starRatedColor="#FFD700"
            starEmptyColor="#C0C0C0"
            starDimension="25px"
            starSpacing="2px"
          />
        </div>
      </div>
      <p className="tw-text-center tw-text-lime-600 tw-mb-4">{}</p>
      <div className="tw-flex tw-justify-between">
        <button
          onClick={handleCarDetailClick}
          className="tw-inline-block tw-w-full tw-py-2 tw-px-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-rounded-lg tw-transition-colors hover:tw-bg-blue-700 tw-mr-2"
        >
          Details
        </button>
        <button
          onClick={handleCarReservationClick}
          className="tw-inline-block tw-w-full tw-py-2 tw-px-4 tw-bg-blue-500 tw-text-white tw-font-medium tw-rounded-lg tw-transition-colors hover:tw-bg-blue-700 tw-mr-2"
        >
          Reservation
        </button>
      </div>
    </div>
  );
};

export default CarCard;



