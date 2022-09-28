const express = require("express");
const server = express();
const { sanitize, content } = require("./templates.js");

server.get("/", (req, res) => {
  res.send(content);
});

module.exports = server; 