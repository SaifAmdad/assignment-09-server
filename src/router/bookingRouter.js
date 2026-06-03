const express = require("express");
const {
  addBooking,
  cancelBooking,
  getBooking,
} = require("../controller/bookingController");
const { isLogedin } = require("../middleware/auth");
const bookingRouter = express.Router();

bookingRouter.post("/add-booking", isLogedin, addBooking);
bookingRouter.get("/get-booking", isLogedin, getBooking);
bookingRouter.patch("/cancel-booking/:id", isLogedin, cancelBooking);

module.exports = bookingRouter;
