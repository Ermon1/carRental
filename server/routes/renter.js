// carRoutes.js

const express = require("express");
const router = express.Router();
const Renter = require("../models/renter");
const cloudinary = require("../controllers/cloudinary");

// Route to add a new car
router.post("/", async (req, res) => {
    try {
      console.log(req.body)
    const {
      pricePerDay,
      carImage,
      make,
      model,
      year,
      color,
      registrationNumber,
      transmission,
      fuelType,
      seats,
      posessionImage,
    } = req.body;
    console.log(req.body);
    const result = await cloudinary.uploader.upload(carImage);

    const result2 = await cloudinary.uploader.upload(posessionImage);

      const newCar = new Renter({
        make,
        model,
        year,
        color,
        registrationNumber,
        transmission,
        fuelType,
        seats,
        posessionImage: {
          public_id: result2.public_id,
          url: result2.secure_url,
        },
        pricePerDay,
        carImage: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      });
    const savedCar = await newCar.save();
    console.log(savedCar);

    res.status(201).json(savedCar);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: error.message });
  }
});

// Route to get all cars
router.get("/", async (req, res) => {
  try {
    const renter = await Renter.find();
    res.status(200).json(renter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a specific car by ID
router.get("/:id", async (req, res) => {
  try {
    const renter = await Renter.findById(req.params.id);
    if (!renter) {
      return res.status(404).json({ message: "renter not found" });
    }
    res.status(200).json(renter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a car by ID
router.put("/:id", async (req, res) => {
 try {
   const renter = await Renter.findById(req.params.id);
   if (!renter) {
     return res.status(404).json({ message: "Car not found" });
   }

   // Update the renter object with the data from req.body
   renter.set(req.body);

   // Save the updated renter object using the instance method save()
   const updatedRenter = await renter.save();

   res.status(200).json(updatedRenter);
 } catch (error) {
   console.log(error);
   res.status(500).json({ error: error.message });
 }

});

// Route to delete a car by ID

router.delete("/:id", async (req, res) => {
  try {
    const rent = await Renter.findById(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: "Renter not found" });
    }
    await rent.remove();
    res.status(200).json({ message: "Renter deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
