const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  const { email, password, confirmPassword, role } = req.body;

  // Validate the confirmPassword field
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Password and confirm password do not match" });
  }

  try {
    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      email,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Set the hashed password on the user object
    newUser.password = hashedPassword;

    // Save the user to the database
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "your_secret_key", {
      expiresIn: "90d",
    });
    // Return success response
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    // Check if the user with the given email exists
    const deletedUser = await User.findOneAndDelete({ email: email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return success response
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



router.put("/:email", async (req, res) => {
  const { email } = req.params;
  console.log(req.body);

  try {
    // Check if the user with the given email already exists
    const updatedUser = await User.findOneAndUpdate(
      { email: email }, // The filter criteria to find the user
      req.body, 
      { new: true } // This option returns the updated user as the result
    );

    if (!updatedUser) {
      // If the user is not found, return an error response
      return res.status(404).json({ message: "User not found" });
    }

    // Return success response with the updated user data
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
