import React, { useState } from "react";
import { Typography, Grid, Button, Modal, TextField } from "@mui/material";
import RenterDate from "../component/RenterData";
import { useSelector } from "react-redux";
function AproveRenter() {
  
    const { carInfoList } = useSelector((state) => state.carInfoReducer);
    console.log(carInfoList);

   if (!carInfoList && carInfoList.length === 0) {
    return <div>No more renter request...</div>;
   }
  return (
    <div className="tw-m-8 md:tw-m-12 lg:tw-m-16 ">
      <div className="tw-mb-10">
        <Typography
          variant="h4"
          component="h1"
          className="tw-text-blue-500 tw-text-center "
        >
          Car Rental Approval Page
        </Typography>
      </div>
      <Grid container spacing={4} className="tw-m-9">
        {carInfoList?.map((reservation) => (
          <Grid item xs={12} sm={6} md={4} key={reservation.id}>
            <RenterDate carreservation={reservation} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AproveRenter;
