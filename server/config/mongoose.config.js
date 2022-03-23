const dotenv = require("dotenv");
dotenv.config();

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PWD
const database = "jokesapi";

const mongoose = require("mongoose");

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the database", err));