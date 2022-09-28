const express = require("express");
const server = express();
const { sanitize, content } = require("./templates.js");
const mockData = require('./mockData.js')

const bodyParser = express.urlencoded();

const postsArr = [...mockData]


server.get("/", (req, res) => {
  res.send(content(postsArr));
});


server.post("/", bodyParser, (req, res) => {
  const username = req.body.username;
  const artist = req.body.artist;
  const song = req.body.song;
  const genre = req.body.genre;
  const rating = req.body.rating;
  postsArr.push({ username, artist, song, genre, rating }); 

  res.redirect('/')
})

module.exports = server; 
