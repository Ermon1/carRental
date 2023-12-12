import React,{useState} from 'react'
import { Typography, Grid, Button, Modal, TextField } from "@mui/material";
import Cardata from "../component/Cardata";
import { useSelector } from 'react-redux';
function Employeeapproval() {


  const [selectedCar, setSelectedCar] = useState(null);
  const [paymentProof, setPaymentProof] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
const { reservation } = useSelector((state) => state.reservationReducer);
   if (
     !reservation ||
     !reservation.requested ||
     reservation.requested.length === 0
   ) {
     return <div>No more update request...</div>;
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
          {reservation.requested.map((reservation) => (
            <Grid item xs={12} sm={6} md={4} key={reservation.id}>
              <Cardata carreservation={reservation} />
            </Grid>
          ))}
        </Grid>
        
      </div>
    );
}



export default Employeeapproval