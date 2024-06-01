const express = require("express");
const dbConnection = require("./db");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const carRoutes = require("./routes/carRoutes");
const loginRouter = require("./routes/loginRouter");
const carlistRouter = require("./routes/carlistRoute");
const app = express();

const cors = require("cors");
const usersRoutes = require("./routes/usersRoute");
const Cars = require("./routes/car");
const CarDetail = require("./routes/carDetail");
const profile = require("./routes/profile");
const reservation = require("./routes/reservation");
const forgetPassword = require("./routes/forgetPassword");
const resetPassword = require("./routes/resetPassword");
const renter = require("./routes/renter");


app.use(cors());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
// Routes
app.use("/api/register", usersRoutes);
app.use("/api/addcar", Cars);
app.use("/api/login", loginRouter);
app.use("/api/cars/", carlistRouter);
app.use("/api/carDetail", CarDetail);
app.use("/api/profile", profile);
app.use("/api/reservation", reservation);
app.use("/api/forgot-Password", forgetPassword);
app.use("/reset-password", resetPassword);
app.use("/api/renter", renter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//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