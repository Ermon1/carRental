import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getOneReservation } from "../redux/actions/ReservationAction";
import { useDispatch } from "react-redux";

function Cardata({ carreservation }, { on }) {
  console.log(on);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = carreservation._id;

  const handldetaile = () => {
    dispatch(getOneReservation(id, null));
    navigate("/detialreservation");
  };

  return (
    <div className="tw-shadow-2xl tw-border  tw-h-72 tw-border-t-slate-300">
      <Card>
        <CardContent className="tw-flex tw-items-center tw-justify-center tw-flex-col ">
          <Typography variant="h6" component="h2">
            <span className="tw-text-red-600">Car</span>
            {carreservation.car.make} {carreservation.car.model}
          </Typography>
          <Typography variant="body2" component="p">
            Customer:
            {carreservation.profile.firstName +
              " " +
              carreservation.profile.lastName}
          </Typography>
          <Typography variant="body2" component="p">
            New Request
          </Typography>
          <div className="tw-flex tw-items-center tw-justify-center tw-mt-6 ">
            <Button variant="contained" onClick={handldetaile}>
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cardata;
