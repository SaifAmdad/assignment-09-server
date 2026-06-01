const tutorModel = require("../model/tutorModel");

const getAllTutors = async (req, res) => {
  try {
    // const filter = {
    //   $and: [{ sessionStart: { $gt: from } }, { sessionStart: { $lt: till } }],
    // };
    const allTutors = await tutorModel.find();
    console.log(allTutors);
    res.status(200).send(allTutors);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addTutor = async (req, res) => {
  try {
    const tutorInfo = req.body;
    const token = req.headers.auth;

    const newTutor = await tutorModel.create(tutorInfo);
    res.json(newTutor);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTutorByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const tutors = await tutorModel.find({ userId });
    if (tutors < 1) {
      return res.status(404).send({
        message: "Tutor not found with this id",
      });
    }
    res.status(200).json(tutors);
    console.log(tutors);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTutor = async (req, res) => {
  const tutorInfo = req.body;
  const token = req.headers.auth;
  const userId = req.headers.userId;
  // pass
};

const deleteTutor = async (req, res) => {
  const id = req.params;
  // pass
};

module.exports = {
  getAllTutors,
  addTutor,
  getTutorByUserId,
  updateTutor,
  deleteTutor,
};
