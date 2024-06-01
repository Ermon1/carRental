const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const cloudinary = require('../controllers/cloudinary');

router.post('/', async (req, res) => {
  const { make,color , seatNumber, description, model, rating, automatic, year, price, licensePlate, availability, image } = req.body;
  try {
    const existingCar = await Car.findOne({ licensePlate });
    if (existingCar) {
      return res.status(400).json({ error: 'License plate already exists' });
    }

    const result = await cloudinary.uploader.upload(image);

    const car = new Car({
      make,
      model,
      year,
      price,
      licensePlate,
      availability,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      rating,
      automatic: automatic === 'on', // Convert string value to Boolean
      seatNumber,
      description,
     color
    });

    console.log(car);

    await car.save();

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.put("/:id", async (req, res) => {
  console.log(req.body, req.params.id);
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    
    if (!car) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;


