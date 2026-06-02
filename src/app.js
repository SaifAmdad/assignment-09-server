const express = require("express");
const app = express();
const tutorRouter = require("./router/tutorRouter");
const cors = require("cors");
const bookingRouter = require("./router/bookingRouter");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(tutorRouter);
app.use(bookingRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello server",
  });
});

module.exports = app;
