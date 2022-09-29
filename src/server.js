const express = require("express");
const server = express();
const staticHandler = express.static("public");
const { sanitize, content } = require("./templates.js");
const {
  listMusic,
  updateMusicList,
  getUserId,
  addUsername,
} = require("./model/music.js");

server.use(staticHandler);

const bodyParser = express.urlencoded();

const postsArr = listMusic();

server.get("/", (req, res) => {
  res.send(content(postsArr));
});

server.post("/", bodyParser, (req, res) => {
  const username = req.body.username;
  const artist = req.body.artist;
  const song = req.body.song;
  const genre = req.body.genre;
  const rating = req.body.rating;
  // Adds user input into an array of objects
  postsArr.push({ genre, artist, song, rating, username });
  // check whether username exists

  // Push the username into user table

  const user_id = addUsername(username);

  // Updates the music database with user input. Must use user_id because username doesn't feature on music table.
  updateMusicList({ genre, artist, song, rating, user_id });

  console.log(listMusic());

  res.redirect("/");
});

module.exports = server;
