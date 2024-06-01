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
import { updateCarInfo } from "../redux/actions/renter";
import { useNavigate } from "react-router-dom";
function RenterDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { carInfo, loading } = useSelector((state) => state.carInfoReducer);

if (!carInfo || Object.keys(carInfo).length === 0) {
  return <div>Loading...</div>;
}

console.log(carInfo.posessionImage.url);


    const handleApprove = () => {
    
        const id = carInfo._id
        const updateresrve = {
          ...carInfo,
          status: "rented",
        };

        dispatch(updateCarInfo(id, updateresrve));
    }

    if (carInfo.status === "update") {
        const id = carInfo._id;

        console.log(id);
        const updateresrve = {
            ...carInfo,
            status: "rented",
        };
      
        dispatch(updateCarInfo(id, updateresrve));
    }
  
    //   const getAllReservation = () => {
    //     dispatch(getReservation());
    //   };

    const handleReject = () => {
        if (carInfo.status === "update") {
            const id = carInfo._id;

            console.log(id);
            const updateresrve = {
                ...carInfo,
                status: "canceld",
            };
            console.log(updateresrve);
            dispatch(updateCarInfo(id, updateresrve));
        }
        if (carInfo.status === "pending") {
          const id = carInfo._id;

          console.log(id);
          const updateresrve = {
            ...carInfo,
            status: "canceld",
          };
          console.log(updateresrve);
          dispatch(updateCarInfo(id, updateresrve));
        }
    }
  

    return (
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
              {null ? (
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
                carInfo: {carInfo.make + carInfo.model}
              </Typography>

              <Typography variant="body1" gutterBottom>
                Drop-off Location: {carInfo.dropOffLocation}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pick-up Date: {carInfo.pickUpDate}
              </Typography>

              <Typography variant="body1" gutterBottom>
                TotalAmount: {carInfo.pricePerDay}
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
                image={carInfo.carImage.url}
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
                image={carInfo.posessionImage.url}
                alt="driverLicenseImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  driverLicenseImage
                </Typography>
              </CardContent>
            </Card>

            <Grid container justifyContent="space-between" mt={3}>
              <Button
                variant="contained"
                sx={{ width: "200px" }}
                color="primary"
                onClick={handleApprove}
              >
                {loading ? "Approving please wait" : "Approve"}
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
export default RenterDetail;
