const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
router.post("/", async (req, res) => {
  const { email } = req.body;
  const TOKENSECRETE = "your_secret_key";
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
     return res.status(404).json({ message: "no user exist" });
    }
     if (!oldUser.password) {
       res.status(404).json({ message: "no user exist" });
     }
    console.log(oldUser);
    const secret = TOKENSECRETE + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "3m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
     const transporter = nodemailer.createTransport({
      // Replace with your email service configuration (SMTP settings)
      service: "Gmail",
      auth: {
        user: "", // Replace with your email address
        pass: "your_email_password", // Replace with your email password
      },
    });

    const mailOptions = {
      from: "your_email@example.com", // Replace with your email address
      to: email,
      subject: "Password Reset Link",
      text: link
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send password reset email" });
      }
      console.log("Password reset link sent:", info.response);
      return res.status(200).json({ message: "Password reset link sent to your email" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
  

module.exports=router;
