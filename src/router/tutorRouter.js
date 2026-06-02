const express = require("express");
const {
  addTutor,
  getTutorByUserId,
  getAllTutors,
  updateTutor,
  deleteTutor,
} = require("../controller/tutorController");
const { isLogedin } = require("../middleware/auth");
const tutorRouter = express();

tutorRouter.post("/add-tutor", isLogedin, addTutor);
tutorRouter.get("/get-tutors/:userId", isLogedin, getTutorByUserId);
tutorRouter.get("/all-tutors", getAllTutors);
tutorRouter.patch("/update/:id", isLogedin, updateTutor);
tutorRouter.delete("/delete/:id", isLogedin, deleteTutor);

module.exports = tutorRouter;
