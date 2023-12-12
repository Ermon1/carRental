import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  CardContent,
  Paper,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import { getReservation } from "../redux/actions/ReservationAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCar } from "../redux/actions/carsAction";
import { updateReservation } from "../redux/actions/ReservationAction";
import { useNavigate } from "react-router-dom";
function DetailReservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reserve, message, loadingg } = useSelector(
    (state) => state.reservationReducer
  );

  if (!reserve) {
    return <div>Loading...</div>;
  }

  const reser = reserve[0];
  if (!reser) {
    return <div>Loading...</div>;
  }

  const handleApprove = () => {
    const id = reser._id;
    if (reser.status === "pending") {
      const car = reser.car;
      const day = reser.amount / reser.car.price;

      console.log(day);
      const value = `availabile after ${day} days`;
      const updatedCarStutus = {
        ...car,
        availability: value,
      };

      dispatch(updateCar(updatedCarStutus));
      const updateresrve = {
        ...reser,
        status: "rented",
      };

      dispatch(updateReservation(id, updateresrve));
    }

    if (reser.status === "update") {
      const id = reser._id;

      console.log(id);
      const updateresrve = {
        ...reser,
        status: "rented",
      };
      console.log(updateresrve);
      dispatch(updateReservation(id, updateresrve));
    }
  };
  const getAllReservation = () => {
    dispatch(getReservation());
  };

  const handleReject = () => {
    if (reser.status === "update") {
      const id = reser._id;

      console.log(id);
      const updateresrve = {
        ...reser,
        status: "canceld",
      };
      console.log(updateresrve);
      dispatch(updateReservation(id, updateresrve));
    }
    if (reser.status === "pending") {
      const id = reser._id;

      console.log(id);
      const updateresrve = {
        ...reser,
        status: "canceld",
      };
      console.log(updateresrve);
      dispatch(updateReservation(id, updateresrve));
    }
  };

  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            {message ? (
              <div>
                message
                {/* <Link
                  to="/aprove"
                  className="tw-text-blue-500 hover:tw-underline tw-cursor-pointer"
                  onClick={getAllReservation}
                >
                  Click me
                </Link> */}
              </div>
            ) : (
              ""
            )}
          </Typography>
          <div className="tw-flex tw-flex-col  tw-items-center tw-justify-center">
            <Typography variant="h5" gutterBottom>
              Reservation Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car: {reser.car.make + reser.car.model}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pick-up Location: {reser.pickUpLocation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Drop-off Location: {reser.dropOffLocation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pick-up Date: {reser.pickUpDate}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pick-up Time: {reser.pickUpTime}
            </Typography>
            <Typography variant="body1" gutterBottom>
              TotalAmount: {reser.amount}
            </Typography>
          </div>
          {/* <Typography variant="body1" gutterBottom>
           Status: {reservationDetails.status}
         </Typography> */}
          <Card
            sx={{
              maxWidth: 500,
              minWidth: 300,
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "10px",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={reser.idImage.url}
              alt="ID Card"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                ID Card
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500, minWidth: 300, marginBottom: "10px" }}>
            <CardMedia
              component="img"
              height="200"
              image={reser.driverLicenseImage.url}
              alt="driverLicenseImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                driverLicenseImage
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500, minWidth: 300, marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="200"
              image={reser.paymentImage.url}
              alt="driverLicenseImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Payment Image
              </Typography>
            </CardContent>
          </Card>
          <h1>{message}</h1>
          <Grid container justifyContent="space-between" mt={3}>
            <Button
              variant="contained"
              sx={{ width: "200px" }}
              color="primary"
              onClick={handleApprove}
            >
              {loadingg ? "Approving please wait" : "Approve"}
            </Button>
            <Button
              variant="contained"
              sx={{ width: "200px" }}
              color="error"
              onClick={handleReject}
            >
              Reject
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DetailReservation;
