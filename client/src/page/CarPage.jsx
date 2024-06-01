import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/carlistAction';
import CarCard from '../component/CarCard';
import Footer from '../component/Footer';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.carlistReducer);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const car = cars.cars
  

  if (!car) {
  
    return <div><p className="tw-text-center tw-text-gray-600">Loading...</p></div>;
  }

  return (
    <>
      <div className="tw-container tw-mx-auto tw-py-8">
        <h1 className="tw-text-3xl tw-font-bold tw-text-center tw-mb-8">
          Available Cars
        </h1>
        {loading ? (
          <p className="tw-text-center tw-text-gray-600">Loading...</p>
        ) : (
          <div className="tw-grid tw-justify-center tw-align-center sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-10">
            {car.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        )}
        {error && <p className="tw-text-center tw-text-red-500">{error}</p>}
      </div>
      <Footer />
    </>
  );
};

export default CarList;
