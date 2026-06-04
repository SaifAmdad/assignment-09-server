const bookingModel = require("../model/bookingModel");
const tutorModel = require("../model/tutorModel");

const addBooking = async (req, res) => {
  try {
    const booking = req.body;
    const userId = req.userId;

    booking.userId = userId;
    const tutor = await tutorModel.findById(booking.tutorId);
    if (!tutor) {
      return res.status(401).send({
        success: false,
        message: "Tutor not available with this ID",
      });
    }

    if (tutor.totalSlot - tutor.bookedSlot < 1) {
      return res.status(401).send({
        success: false,
        message: "Slot not available ",
      });
    }

    const updates = {
      bookedSlot: tutor.bookedSlot + 1,
    };

    await tutorModel.findByIdAndUpdate(tutor._id, updates);
    const newBooking = await bookingModel.create(booking);
    return res.status(200).send({
      success: true,
      message: "Booking slot successfull",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ------------------------------------------

const getBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const booking = await bookingModel.find({ userId });
    if (!booking) {
      return res.status(404).send({
        success: false,
        message: "Booking not found",
      });
    }
    return res.status(200).send({
      success: true,
      booking,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// ---------------------------------------------

const cancelBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const booking = await bookingModel.findById(id);

    console.log(booking.userId);
    if (booking?.userId.toString() !== userId.toString()) {
      return res.status(401).send({
        success: false,
        message: "Un-authorized",
      });
    }

    const updates = {
      status: "Cancelled",
    };

    const canceled = await bookingModel.findByIdAndUpdate(id, updates);

    return res.status(200).send({
      success: true,
      message: "Cancelled booking successfull",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { addBooking, cancelBooking, getBooking };
