import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCarInfo } from "../redux/actions/renter";
import { RxAvatar } from "react-icons/rx";



const RenterPage = () => {
  const [carInfo, setCarInfo] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    registrationNumber: "",
    transmission: "",
    fuelType: "",
    seats: "",
    pricePerDay: "",
    carImage: null,
    posessionImage: null,
    status:"pending"
  });
  const dispatch = useDispatch()
  const clearFields = () => {
    setCarInfo({
      make: "",
      model: "",
      year: "",
      color: "",
      registrationNumber: "",
      transmission: "",
      fuelType: "",
      seats: "",
      pricePerDay: "",
      carImage: null,
      posessionImage: null,
      pickUpDate: "",
      dropoffData:""
    });
  };

  const handleChange = (e) => {
    setCarInfo({
      ...carInfo,
      [e.target.name]: e.target.value,
    });
  };
   const handleImageChange = async (e) => {
     const { name } = e.target;

     const file = e.target.files[0];

     const reader = new FileReader();

     await new Promise((resolve) => {
       reader.onloadend = () => {
         setCarInfo((prevFormData) => ({
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
  console.log(carInfo)
   const handleSubmit = (e) => {
     e.preventDefault();
     // Dispatch action to add car information to Redux store
     dispatch(addCarInfo(carInfo));
     // Redirect to car details page after form submission
    
     // Clear form fields
    // clearFields();
   };

  return (
    <div className="tw-container tw-mx-auto tw-p-8 tw-max-w-lg">
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Car Information</h2>
      <form
        className="tw-space-y-4 sm:tw-w-full md:tw-w-[540px]"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="make" className="tw-block tw-font-medium">
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={carInfo.make}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
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
            value={carInfo.pickUpDate}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
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
            value={carInfo.dropoffDate}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500  "
            required
          />
        </div>
        <div>
          <label htmlFor="model" className="tw-block tw-font-medium">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={carInfo.model}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="year" className="tw-block tw-font-medium">
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={carInfo.year}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="color" className="tw-block tw-font-medium">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={carInfo.color}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="registrationNumber"
            className="tw-block tw-font-medium"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={carInfo.registrationNumber}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="transmission" className="tw-block tw-font-medium">
            Transmission
          </label>
          <select
            id="transmission"
            name="transmission"
            value={carInfo.transmission}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          >
            <option value="">Select Transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div>
          <label htmlFor="fuelType" className="tw-block tw-font-medium">
            Fuel Type
          </label>
          <input
            type="text"
            id="fuelType"
            name="fuelType"
            value={carInfo.fuelType}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="seats" className="tw-block tw-font-medium">
            Number of Seats
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={carInfo.seats}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="pricePerDay" className="tw-block tw-font-medium">
            Price Per Day
          </label>
          <input
            type="number"
            id="pricePerDay"
            name="pricePerDay"
            value={carInfo.pricePerDay}
            onChange={handleChange}
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500"
            required
          />
        </div>
        <div>
          <div className="tw-mb-4 tw-flex tw-items-center ">
            <span className="tw-inline-block  tw-h-32 tw-w-32 tw-rounded-full tw-overflow-hidden">
              {carInfo.posessionImage ? (
                <img
                  src={carInfo.posessionImage}
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
                posessionImage
                <input
                  type="file"
                  id="posessionImage"
                  name="posessionImage"
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
              {carInfo.carImage ? (
                <img
                  src={carInfo.carImage}
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
                car image
                <input
                  type="file"
                  id="carImage"
                  name="carImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className=" tw-cursor-pointer tw-overflow-hidden tw-w-full"
                />
              </span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="tw-group tw-w-full tw-h-[40px] tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-blue-600 hover:tw-bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RenterPage;
