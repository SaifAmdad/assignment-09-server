const bookingModel = require("../model/bookingModel");

const addBooking = async (req, res) => {
  try {
    const booking = req.body;
    const userId = req.userId;

    booking.userId = userId;

    const newBooking = await bookingModel.create(booking);
    return res.status(200).send({
      message: "Booking slot successfull",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ------------------------------------------

const getBooking = async (req, res) => {
  // pass
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
        message: "Un-authorized",
      });
    }

    const updates = {
      status: "Cancelled",
    };

    const canceled = await bookingModel.findByIdAndUpdate(id, updates);

    return res.status(200).send({
      message: "Cancelled booking successfull",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { addBooking, cancelBooking };
