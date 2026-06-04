const tutorModel = require("../model/tutorModel");

const getAllTutors = async (req, res) => {
  try {
    // const filter = {
    //   $and: [{ sessionStart: { $gt: from } }, { sessionStart: { $lt: till } }],
    // };
    const allTutors = await tutorModel.find();
    if (allTutors.length < 1) {
      return res.status(404).send({
        success: false,
        message: "Tutor not found",
      });
    }

    return res.status(200).send({
      success: true,
      tutors: allTutors,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
// -------------------------------------------------------

const addTutor = async (req, res) => {
  try {
    const tutorInfo = req.body;
    const userId = req.userId;
    if (userId !== tutorInfo.userId) {
      return res.status(400).send({
        message: "un-verified",
      });
    }

    const newTutor = await tutorModel.create(tutorInfo);
    return res.status(200).send({
      success: true,
      message: "Added new tutor",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// ------------------------------------------------------

const getTutorByUserId = async (req, res) => {
  try {
    const userId = req.userId;

    const tutors = await tutorModel.find({ userId });
    if (tutors < 1) {
      return res.status(404).send({
        message: "Tutor not found with this id",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Tutors returned successfully",
      tutors,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// ------------------------------------------------------

const getTutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const tutor = await tutorModel.findById(id);
    if (!tutor) {
      return res.status(404).send({
        message: "Tutor not found with this id",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Tutor returned successfully",
      tutor,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// -Update tutor------------------------------------------------------

const updateTutor = async (req, res) => {
  try {
    const updateInfo = req.body;
    const userId = req.userId;

    const { id } = req.params;
    const updates = {};

    for (let key in updateInfo) {
      updates[key] = updateInfo[key];
    }

    const tutor = await tutorModel.findById(id);
    if (!tutor) {
      return res.status(404).send({
        success: false,
        message: "Tutor not found with this ID",
      });
    }

    if (tutor.userId.toString() !== userId.toString()) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized action",
      });
    }

    const updated = await tutorModel.findByIdAndUpdate(id, updates);
    return res.status(200).send({
      success: true,
      message: "Tutor updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// ----------------------------------------------------------------

const deleteTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const tutor = await tutorModel.findById(id);
    if (!tutor) {
      return res.status(404).send({
        message: "Tutor not found with this ID",
      });
    }

    if (!userId || tutor.userId.toString() !== userId.toString()) {
      return res.status(401).send({
        message: "Unauthorized action",
      });
    }
    const deleted = await tutorModel.findByIdAndDelete(id);
    console.log(deleted);

    return res.status(200).send({
      success: true,
      message: "Tutor deleted successfully",
      payload: deleted,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getAllTutors,
  addTutor,
  getTutorByUserId,
  updateTutor,
  deleteTutor,
  getTutorById,
};
