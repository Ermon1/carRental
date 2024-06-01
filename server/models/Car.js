const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    default: 'available',
    required: true,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  rating: {
    type: Number,
    min: 1,
    max:5,
  },
  automatic: {
    type: Boolean,
    default: false,
  },
  seatNumber: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
});


const Car = mongoose.model('Car', carSchema);

module.exports = Car;
