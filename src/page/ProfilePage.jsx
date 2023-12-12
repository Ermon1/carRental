import React, { useEffect, useState } from "react";
import { Typography, Grid, Button, TextField, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/profile";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import { blue } from "@mui/material/colors";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profileReducer);

  const isAuthenticated = useSelector(
    (state) => state.loginReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.loginReducer);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: user.email,
    phone: profile.phone || "",
    address: profile.address || "",
    occupation: profile.occupation || "",
    age: profile.age || null,
    isProfileComplete: false,
  });
  const [valChecker, setValChecker] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated]);
  const { _id, isProfileComplete } = profile;
  const { firstName, lastName, email, phone, address, occupation, age } =
    formData;

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      address &&
      occupation &&
      age
    ) {
      console.log(isProfileComplete);
      setFormData((prev) => ({ ...prev, isProfileComplete: true }));
    } else {
      setFormData((prev) => ({ ...prev, isProfileComplete: false }));
    }
  }, [
    firstName,
    lastName,
    email,
    phone,
    address,
    occupation,
    age,
    isProfileComplete,
  ]);

  console.log(formData);

  if (!isAuthenticated) {
    return navigate("/login");
  }

  if (!user) {
    return <div>Loading...</div>; // or any other loading state
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditProfile = () => {
    setEditMode(true);
    setFormData((prev) => ({ ...prev, formData }));
  };

  const handleSaveProfile = () => {
    dispatch(updateProfile(formData, { id: _id }));
    setEditMode(false);
  };

  return (
    <div>
      <div className="tw-flex tw-flex-col tw-items-center tw-mb-3">
        <Typography
          variant="h4"
          component="h1"
          color={"blue"}
          margin={"30px"}
          fontSize={45}
        >
          Profile Page
        </Typography>
        {editMode ? (
          <form>
            <div className="tw-p-10 tw-mb-32 tw-shadow-xl tw-rounded-lg tw-w-[50%] tw-m-auto">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Address"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} mb={6}>
                  <TextField
                    label="Age"
                    name="age"
                    value={formData.age || ""}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveProfile}
              >
                Save Profile
              </Button>
            </div>
          </form>
        ) : (
          <div className=" lg:tw-w-[650px] tw-h-auto  tw-m-20 tw-bg-gradient-to-r tw-from-cyan-200 tw-via-sky-200 tw-to-teal-400  tw-shadow-xl tw-p-16   tw-rounded-2xl">
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500 ">First Name</span>{" "}
              <span className=" tw-text-purple-900 tw-ml-10">
                {profile.firstName.toUpperCase()}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500 ">Last Name</span>{" "}
              <span className=" tw-text-purple-900 tw-ml-10">
                {profile.lastName.toUpperCase()}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500  ">Email</span>
              <span className=" tw-text-purple-900 tw-ml-28">
                {" " + profile.email}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500  ">Phone</span>
              <span className=" tw-text-purple-900 tw-ml-24">
                {profile.phone}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500  ">Address</span>
              <span className=" tw-text-purple-900 tw-ml-20">
                {profile.address.toUpperCase()}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500  ">Occupation</span>
              <span className=" tw-text-purple-900 tw-ml-8">
                {profile.occupation.toUpperCase()}
              </span>
            </Typography>
            <Typography variant="h4" color="black">
              <span className="tw-mr-6 tw-text-purple-500  ">Age</span>
              <span className=" tw-text-purple-900 tw-ml-36">
                {profile.age}
              </span>
            </Typography>

            <Typography
              variant="h4"
              color={`${formData.isProfileComplete ? "green" : "red"}`}
            >
              {formData.isProfileComplete
                ? " you can reserve now"
                : " you have to complete your profile to reserve "}
            </Typography>
            <div className="tw-flex ">
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditProfile}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
