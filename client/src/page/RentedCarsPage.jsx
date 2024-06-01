import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RentedCarsPage = () => {
  const [totalRentedCars, setTotalRentedCars] = useState(0);
  const { reservation } = useSelector((state) => state.reservationReducer);

  useEffect(() => {
    // Calculate the total number of rented cars
    const totalRented = reservation?.rented.reduce(
      (total, res) => total + res.cars.length,
      0
    );

    setTotalRentedCars(totalRented);
  }, [reservation]);

  return (
    <div className="tw-mt-8 tw-p-8">
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4">Rented Cars</h1>
      <p className="tw-text-lg tw-mb-4">Total Rented Cars: {totalRentedCars}</p>

      <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        {reservation?.rented?.map((res) =>
          res.cars.map((car) => (
            <div
              key={car._id}
              className="tw-p-4 tw-border tw-border-gray-400 tw-rounded-lg"
            >
              <h3 className="tw-text-xl tw-font-bold tw-mb-2">{car.name}</h3>
              <p className="tw-text-sm tw-text-gray-600">{car.description}</p>
              <p className="tw-text-sm tw-font-bold tw-mt-2">
                Renter: {res.name}
              </p>
              <p className="tw-text-sm">Pick-up Date: {res.pickUpDate}</p>
              <p className="tw-text-sm">Drop-off Date: {res.dropOffDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RentedCarsPage;
