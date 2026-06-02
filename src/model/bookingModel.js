const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  tutorName: {
    type: String,
    required: true,
    trim: true,
  },
  tutorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});

const bookingModel = model("bookings", bookingSchema);
module.exports = bookingModel;
