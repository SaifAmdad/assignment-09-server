const bookingModel = require("../model/bookingModel");

const addBooking = async (req, res) => {
  try {
    const booking = req.body;
    const userId = req.userId;

    const newBooking = await bookingModel.create(booking);
    return res.status(200).send({
      message: "Booking slot successfull",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// ---------------------------------------------

const cancelBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;

    

    const updates = {
        status = 'Cancelled'
    }

    const canceled = await bookingModel.findByIdAndUpdate(id, );
    return res.status(200).send({
      message: "Booking slot successfull",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { addBooking, cancelBooking };
