"use strict";

const env = "" + process.env.NODE_ENV;

const express = require("express");
const path = require("path");
const app = express();

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
});

const bodyConfig = {
    limit: "10mb",
    extended: true
};
app.use(express.urlencoded(bodyConfig));
app.use(express.json(bodyConfig));
app.use(express.static(path.resolve(__dirname, '/client/build')));

const middleware = require("./config/middleware");
app.use(middleware.cors);
// app.use(express.static('public'));

const routes = require("./routes/routes");
app.use("", routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);
console.log("http://localhost:" + PORT);

module.exports = app;
