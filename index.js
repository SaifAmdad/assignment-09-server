const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
// const { port } = require("./src/secrets");

// app.listen(port, async (req, res) => {
//   console.log(`Server is running at http://localhost:${port}`);
//   await connectDB();
// });

connectDB();
module.exports = app;
