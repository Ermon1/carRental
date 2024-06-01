// carModel.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const renterSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dropOffDate: {
    type: String,
    required: true,
  },
  pickUpDate: {
    type: Date,
    required: true,
  },
  carImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  posessionImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const Renter = mongoose.model("Renter", renterSchema);

module.exports = Renter;
