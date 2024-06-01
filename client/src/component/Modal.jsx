import React from "react";
import { Typography, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
const Modal2 = () => {

  const [selectedCar, setSelectedCar] = useState(null);
  const [paymentProof, setPaymentProof] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApprove = () => {
      
    setIsModalOpen(false);
    setSelectedCar(null);
    setPaymentProof("");
  };

  const handleReject = () => {  
    setIsModalOpen(false);
    setSelectedCar(null);
    setPaymentProof("");
  };

    const handleModalClose = () => {
      setIsModalOpen(false);
      setSelectedCar(null);
      setPaymentProof("");
    };

    const handlePaymentProofChange = (event) => {
      setPaymentProof(event.target.value);
    };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        className="tw-flex tw-items-center tw-justify-center"
      >
        <div className="tw-w-96 tw-bg-white tw-p-6 tw-rounded tw-shadow">
          <Typography variant="h6" component="h2" className="tw-mb-4">
            Car Rental Approval
          </Typography>
          <Typography variant="body1" component="p" className="tw-mb-4">
            Car: {selectedCar && `${selectedCar.make} ${selectedCar.model}`}
          </Typography>
          <div className="tw-grid tw-grid-cols-3 tw-gap-4">
            <img
              src="path/to/image1.png"
              alt="Payment Screenshot 1"
              className="tw-w-full tw-h-40 tw-object-cover tw-rounded"
            />
            <img
              src="path/to/image2.png"
              alt="Payment Screenshot 2"
              className="tw-w-full tw-h-40 tw-object-cover tw-rounded"
            />
            <img
              src="path/to/image3.png"
              alt="Payment Screenshot 3"
              className="tw-w-full tw-h-40 tw-object-cover tw-rounded"
            />
          </div>
          <TextField
            label="Payment Proof"
            value={paymentProof}
            onChange={handlePaymentProofChange}
            fullWidth
            className="tw-mb-4"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleApprove}
            className="tw-mr-2"
          >
            Approve
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReject}>
            Reject
          </Button>
        </div>
      </Modal>
      ;
    </div>
  );
};

export default Modal2;
