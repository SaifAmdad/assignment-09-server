const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const mongodbUrl = process.env.MONGODB_URL;
const joseKeyUrl = process.env.JOSE_KEY_URL;

module.exports = { port, joseKeyUrl, mongodbUrl };
