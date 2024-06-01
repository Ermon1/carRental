const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

// GET /api/profile/:id - Get a user profile by ID
router.get("/:id", async (req, res) => {
  try {
    
    const profile = await Profile.findOne({email:req.params.id});
    
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/profile - Create a new user profile
router.post("/", async (req, res) => {
   try {
    const profileData = req.body;

    // Function to check if all fields are filled
    const checkProfileCompleteness = (profile) => {
      // Array of field names to check except isProfileComplete
      const fieldsToCheck = [
        "firstName",
        "lastName",
        "phone",
        "age",
        "occupation",
        "email",
        "address",
      ];

      // Check if any field is empty
      const isAnyFieldEmpty = fieldsToCheck.some((field) => !profile[field]);

      // Update isProfileComplete based on the result
      const updatedProfile = {
        ...profile,
        isProfileComplete: !isAnyFieldEmpty,
      };

      return updatedProfile;
    };

    const updatedProfileData = checkProfileCompleteness(profileData);

    const profile = new Profile(updatedProfileData);

    await profile.save();
    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

);


router.put("/:id", async (req, res) => {
  console.log(req.body)
  try {
       const profile = await Profile.findByIdAndUpdate(req.params.id, { $set: req.body },  {
      new: true,
    });
    console.log(profile)
    if (!profile) {
      
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
