// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
const cookieParser = require("cookie-parser");

const cors = require('cors')
const whitelist = [process.env.DOMAIN_LOCAL]

const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = whitelist.includes(origin)
        cb(null, originIsWhitelisted)
    }
}

// module.exports = app => {
//     app.use(cors(corsOptions))
// }

// Middleware configuration
module.exports = (app) => {
  app.use(cors( corsOptions ))
  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
