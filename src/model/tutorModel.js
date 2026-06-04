const { Schema, model } = require("mongoose");

const tutorSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User ID is required."],
    },
    tutorName: {
      type: String,
      required: [true, "Tutor name is required"],
      trim: true,
    },
    photoUrl: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
      trim: true,
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    availableDateTime: {
      type: String,
      required: [true, "Available Date-Time is required."],
      trim: true,
    },
    feePerHour: {
      type: Number,
      required: [true, "Fee is required"],
    },
    totalSlot: {
      type: Number,
      required: [true, "Slot is required."],
    },
    sessionStart: {
      type: String,
      required: [true, "Starting date is required."],
    },
    institution: {
      type: String,
      required: [true, "Institution name is required."],
      trim: true,
    },
    experience: {
      type: Number,
      required: [true, "Experience is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    teachingMode: {
      type: String,
      required: [true, "Teaching mode is required"],
    },
    bookedSlot: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const tutorModel = model("tutors", tutorSchema);

module.exports = tutorModel;
