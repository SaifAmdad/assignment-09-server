const express = require("express");
const {
  addBooking,
  cancelBooking,
} = require("../controller/bookingController");
const { isLogedin } = require("../middleware/auth");
const bookingRouter = express();

bookingRouter.post("/add-booking", isLogedin, addBooking);
bookingRouter.patch("/cancel-booking/:id", isLogedin, cancelBooking);

module.exports = bookingRouter;
