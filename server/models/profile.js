const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  phone: {
    type: String,
    
  },
  age: {
    type: String,
  },
  occupation: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
