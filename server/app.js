const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors")

// const dbConnector = require("./config/db");
const routes = require("./routes");

// connect to the database
// dbConnector();

// Base requirements
const app = express();
const PORT = process.env.port || 8000;

// MiddleWares
app.use(cors());
// refactored to use helmet set security-related HTTP response headers
// app.use(helmet());
// Will replace prohibited characters with _,
// app.use(mongoSanitize({ replaceWith: "_" }));
// support parsing of application/json type post data and limit payload
// app.use(express.json({ limit: "300kb" }));
//support parsing of application/x-www-form-urlencoded post data
// app.use(express.urlencoded({ extended: true }));
// set up static folder
// app.use(express.static(path.join(__dirname, "./client/build")));

// set express to use all of the routes we have defined in our router
app.use(routes);

module.exports = app;