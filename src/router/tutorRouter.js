const express = require("express");
const {
  addTutor,
  getTutorByUserId,
  getAllTutors,
} = require("../controller/tutorController");
const tutorRouter = express();

tutorRouter.post("/add-tutor", addTutor);
tutorRouter.get("/get-tutors/:userId", getTutorByUserId);
tutorRouter.get("/all-tutors", getAllTutors);

module.exports = tutorRouter;
