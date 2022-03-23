const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;

const express = require("express");
const app = express();

// * Fire Mongoose.connect to initialize database connection
require("./server/config/mongoose.config");

app.use(
  express.json(),
  express.urlencoded({ extended: true })
);

// * Import Routes
const allRoutes = require("./server/routes/joke.routes");
allRoutes(app);

app.listen(port, () => console.log(`The server is up on port ${port}`));