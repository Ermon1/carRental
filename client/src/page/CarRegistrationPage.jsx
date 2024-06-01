

import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar ,clearRegistrationStatus} from '../redux/actions/carsAction';
import Footer from '../component/Footer';
 
let m;


 const CarRegistrationPage = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector((state) => state.carsReducer.registrationStatus);
const loading = useSelector(state => state.carsReducer.loading);
  const error = useSelector(state => state.carsReducer.error);
 const [car, setCar] = useState({
  make: '',
  price: '',
  model: '',
  year: '',
  color: '',
  licensePlate: '',
  availability: '',
  image: null,
  rating: 0,
  automatic: false,
  seatNumber: 0,
  description: '',
});

const clearFields = () => {
  setCar({
    make: '',
    price: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    availability: '',
    image: null,
    rating: 0,
    automatic: false,
    seatNumber: 0,
    description: '',
  });
};
   
  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    let imageFile;
  const file = e.target.files[0];
    const reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
       imageFile = reader.result
      setCar((prevCar) => ({
        ...prevCar,
        image: reader.result,
      }));
    }
      

    

    
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();





console.log(car)
    dispatch(addCar(car))
      .then(() => {
        dispatch({ type: 'ADD_CAR_SUCCESS' });
        clearFields();
        
      })
      .catch(() => {
        dispatch({ type: 'ADD_CAR_FAILURE' });
      });
  };
 useEffect(() => {
    if (registrationStatus === 'success') {
      const timer = setTimeout(() => {
        dispatch(clearRegistrationStatus());
      }, 3000); // 3 seconds delay
      
      return () => {
        clearTimeout(timer); // Clear the timer if the component unmounts before the timer completes
      };
    }
  }, [dispatch, registrationStatus]);
  


return (
    <>
          
      <div className="tw-flex tw-justify-center tw-items-center tw-w-50% tw-mt-80 tw-mb-96 tw-h-screen">
      
      <form className=" tw-grid-cols-2 tw-max-w-md tw-w-full tw-bg-white tw-rounded-lg tw-shadow-2xl tw-p-8" onSubmit={handleSubmit}>
  <h2 className="tw-text-2xl tw-font-bold tw-mb-6">Register a Car</h2>

  {/* Input fields */}
  
  {/* Make */}
  <div className="tw-col-span-2">
    <label htmlFor="make" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Make</label>
    <input
      type="text"
      id="make"
      name="make"
      value={car.make}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid make.</p>}
  </div>

  {/* Price */}
  <div className="tw-col-span-2">
    <label htmlFor="price" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Price</label>
    <input
      type="text"
      id="price"
      name="price"
      value={car.price}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid price.</p>}
  </div>

  {/* Model */}
  <div className="tw-col-span-2">
    <label htmlFor="model" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Model</label>
    <input
      type="text"
      id="model"
      name="model"
      value={car.model}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid model.</p>}
  </div>

  {/* Year */}
  <div className="tw-col-span-2">
    <label htmlFor="year" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Year</label>
    <input
      type="number"
      id="year"
      name="year"
      value={car.year}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid year.</p>}
  </div>

  {/* Color */}
  <div className="tw-col-span-2">
    <label htmlFor="color" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Color</label>
    <input
      type="text"
      id="color"
      name="color"
      value={car.color}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid color.</p>}
  </div>

  {/* License Plate */}
  <div className="tw-col-span-2">
    <label htmlFor="licensePlate" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>License Plate</label>
    <input
      type="text"
      id="licensePlate"
      name="licensePlate"
      value={car.licensePlate}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid license plate.</p>}
  </div>

  {/* Availability */}
  <div className="tw-mb-4">
    <label htmlFor="availability" className="tw-block tw-font-bold tw-mb-2">
      Availability
    </label>
    <select
      id="availability"
      name="availability"
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      value={car.availability}
      onChange={handleChange}
      required
    >
      <option value="">Select Availability</option>
      <option value="available">Available</option>
      <option value="unavailable">Unavailable</option>
    </select>
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please select availability.</p>}
  </div>

  {/* Image */}
  <div className="tw-col-span-2">
    <label htmlFor="image" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Image</label>
    <input
      type="file"
      id="image"
      name="image"
      accept="image/*"
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      onChange={handleImageChange}
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid image.</p>}
  </div>

  {/* Rating */}
  <div className="tw-col-span-2">
    <label htmlFor="rating" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Rating</label>
    <input
      type="number"
      id="rating"
      name="rating"
      value={car.rating}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid rating.</p>}
  </div>

  {/* Automatic */}
  <div className="tw-col-span-2">
    <label htmlFor="automatic" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Automatic</label>
    <input
      type="checkbox"
      id="automatic"
      name="automatic"
      checked={car.automatic}
      onChange={handleChange}
      className="tw-form-checkbox tw-h-5 tw-w-5 tw-text-blue-600"
    />
  </div>

  {/* Seat Number */}
  <div className="tw-col-span-2">
    <label htmlFor="seatNumber" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Seat Number</label>
    <input
      type="number"
      id="seatNumber"
      name="seatNumber"
      value={car.seatNumber}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid seat number.</p>}
  </div>

  {/* Description */}
  <div className="tw-col-span-2">
    <label htmlFor="description" className={`tw-block tw-font-medium tw-mb-1 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}>Description</label>
    <textarea
      id="description"
      name="description"
      value={car.description}
      onChange={handleChange}
      className={`tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-border-gray-300 tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 ${registrationStatus && !registrationStatus.includes('success') ? 'tw-border-red-500' : ''}`}
      rows={4}
      required
    />
    {registrationStatus && !registrationStatus.includes('success') && <p className="tw-text-red-500 tw-text-sm">Error: Please provide a valid description.</p>}
  </div>

  {/* Submit button */}
  <div className="tw-mt-6 tw-flex tw-justify-center">
    <button
      type="submit"
      className={`tw-py-2 tw-px-4 tw-bg-blue-500 tw-hover:bg-blue-600 tw_focus:tw-outline-none tw_focus:tw-ring-1 tw_focus:tw-ring-blue-500 tw_text-white tw_font-semibold tw_rounded-md ${loading ? 'tw-opacity-75 tw-cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? 'Registering...' : 'Register Car'}
    </button>
  </div>

  {/* Success message */}
  {registrationStatus && registrationStatus.includes('success') && (
    <p className="tw-mt-4 tw-text-green-500">Car successfully registered!</p>
  )}
</form>



      </div>
      <Footer />
    </>
  );
};

export default CarRegistrationPage;
// import { Col, Row, Form, Input} from 'antd'






//  const handleChange = (e) => {
//     setCar({
//       ...car,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Get the first selected file
                
//     if (file) {
//       setCar((prevCar) => ({
//         ...prevCar,
//         image: URL.createObjectURL(file),
//       }));
//     }
//   };