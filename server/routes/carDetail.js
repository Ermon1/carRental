// carRouter.js

const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// GET /api/cars/:carId - Get car detail
router.get('/:carId', async (req, res) => {
  try {
    
    const car = await Car.findById(req.params.carId);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more routes for car API, such as creating, updating, deleting cars

module.exports = router;
