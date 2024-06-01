// routes/cars.js
const express = require('express');
const  cloudinary  = require('../controllers/cloudinary');
const router = express.Router();
const Car = require('../models/Car');

// Fetch all cars
router.get('/', async (req, res) => {
  try {
   
           
    Car.find({})
      .exec()
      .then((cars) => {
       res.json({ cars});
      })
      .catch((err) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;