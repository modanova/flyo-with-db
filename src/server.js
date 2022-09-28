const express = require("express");
const server = express();
const { sanitize, content } = require("./templates.js");

const bodyParser = express.urlencoded();

server.get("/", (req, res) => {
  res.send(content);
});


server.post("/", bodyParser, (req, res) => {
  const username = req.body.username;
  const artist = req.body.artist;
  const song = req.body.song;
  const genre = req.body.genre;
  const rating = req.body.rating;
  console.log(username, artist, song, genre, rating)

  res.redirect('/')
})

// server.get('/', (request, response) => {
//   response.send()
// })


module.exports = server; 
