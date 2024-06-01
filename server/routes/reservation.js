const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservestionModel");
const cloudinary = require("../controllers/cloudinary");

router.post("/", async (req, res) => {
  try {
    const {
      paymentImage,
      idImage,
      car,
      email,
      status,
      profile,
      driverLicenseImage,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
      amount,
    } = req.body;
    const image = [paymentImage, idImage, driverLicenseImage];

    const result = await cloudinary.uploader.upload(paymentImage);
    const result2 = await cloudinary.uploader.upload(driverLicenseImage);
    const result3 = await cloudinary.uploader.upload(idImage);

    const reservation = new Reservation({
      pickUpLocation,
      dropOffLocation,
      dropOffTime,
      pickUpDate,
      pickUpTime,
      car,
      email,
      dropOffDate,
      status,
      amount,
      profile,
      paymentImage: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      idImage: {
        public_id: result3.public_id,
        url: result3.secure_url,
      },
      driverLicenseImage: {
        public_id: result2.public_id,
        url: result2.secure_url,
      },
    });
    await reservation.save();

    res.status(200).json({
      message: "reservation process  successfully done",
      data: reservation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const reservation = await Reservation.find();

    if (!reservation) {
      return res.status(404).json({ message: "Profile not found" });
    }
    //console.log(reservation)
    const requested = reservation.filter((res) => res.status === "pending");
    const update = reservation.filter((res) => res.status === "update");
    const cancel = reservation.filter((res) => res.status === "cancel");
    const rented = reservation.filter((res) => res.status === "rented");
    const canceld= reservation.filter((res) => res.status === "canceld");

    // res.map((res))
    res.status(200).json({ requested, update, cancel, rented ,canceld ,message:"seccessfully done"});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/:id/:email", async (req, res) => {
  try {
    let reserve;
   
    const { id, email } = req.params;
   
    if (id === "null") {
      reserve = await Reservation.find({ email: email });
    }
    if (email === "null") {
      reserve = await Reservation.find({ _id: id });
    }
    console.log(reserve);
    console.log(reserve.length === 0);
    if (reserve.length === 0) {
      reserve = [null];
      return res.status(200).json(reserve);
    }
    res.json(reserve);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


router.put("/:id", async (req, res) => {
  try {
  let {paymentImageAdd}=req.body


    let reservation;

    if (!paymentImageAdd?.public_id) {
            const result = await cloudinary.uploader.upload(paymentImageAdd);
      const add = {
        paymentImageAd: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      };
      
      const { paymentImageAd } = add 
      
     
      reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body, paymentImageAdd: paymentImageAd } }, // Merge the request body with the 'add' object
        {
          new: true,
        }
      );
    } else { 
      
      reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, // Merge the request body with the 'add' object
        {
          new: true,
        }
      );
      console.log(reservation)

    }

    res.status(200).json({
      message: "Reservation updated successfully",
      data: reservation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
