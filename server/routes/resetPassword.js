const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
router.get("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(id);
  const user = await User.findById({ _id: id });
  if (!user) {
    res.status(404).json({ error: "no user exist" });
  }

  const TOKENSECRETE = "your_secret_key";
  const secret = TOKENSECRETE + user.password;
  try {
    const verify = jwt.verify(token, secret);

    res.render("index", { email: verify.email, message: null, id, token });
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  const user = await User.findById({ _id: id });
  if (!user) {
    res.status(404).json({ error: "no user exist" });
  }

  const TOKENSECRETE = "your_secret_key";
  const secret = TOKENSECRETE + user.password;
  try {
    const verify = jwt.verify(token, secret);
    const { password } = req.body;
    const encryptPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptPassword,
        },
      }
    );
    res.render("index", {
      email: verify.email,
      message: "reset seccessfull",
      id,
      token,
    });

    // res.render("index", { email:verify.email });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
