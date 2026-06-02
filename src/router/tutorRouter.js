const express = require("express");
const {
  addTutor,
  getTutorByUserId,
  getAllTutors,
  updateTutor,
  deleteTutor,
  getTutorById,
} = require("../controller/tutorController");
const { isLogedin } = require("../middleware/auth");
const tutorRouter = express.Router();

tutorRouter.post("/add-tutor", isLogedin, addTutor);
tutorRouter.get("/get-tutor/:id", isLogedin, getTutorById);
tutorRouter.get("/my-tutors", isLogedin, getTutorByUserId);
tutorRouter.get("/all-tutors", getAllTutors);
tutorRouter.patch("/update/:id", isLogedin, updateTutor);
tutorRouter.delete("/delete/:id", isLogedin, deleteTutor);

module.exports = tutorRouter;
