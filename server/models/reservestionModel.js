const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  pickUpLocation: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  dropOffDate: {
    type: String,
    required: true,
  },
  dropOffLocation: {
    type: String,
    required: true,
  },
  pickUpDate: {
    type: Date,
    required: true,
  },
  pickUpTime: {
    type: String,
    required: true,
  },
  dropOffTime: {
    type: String,
    required: true,
  },
  driverLicenseImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  paymentImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  },
  paymentImageAdd: {
    public_id: {
      type: String,
          },
    url: {
      type: String,
          },
    
  },
  idImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
});

reservationSchema.set("toJSON", { virtuals: true });
reservationSchema.set("toObject", { virtuals: true });
reservationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "profile",
    select: "firstName lastName phone email",
  }).populate({
    path: "car",
    select: "availability make model price _id ",
  });
  next();
});
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
