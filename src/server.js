const express = require("express");
const server = express();
const staticHandler = express.static("public");
const { sanitize, content } = require("./templates.js");

const { listMusic, updateMusicList, addUsername, searchByUsername } = require("./model/music.js");


server.use(staticHandler);

const bodyParser = express.urlencoded();

const postsArr = listMusic();

server.get("/", (req, res) => {
  res.send(content(postsArr));
});

server.post("/", bodyParser, (req, res) => {
  const error = {};
  const username = req.body.username;
  const artist = req.body.artist;
  const song = req.body.song;
  const genre = req.body.genre;
  const rating = req.body.rating;
  // Adds user input into an array of objects

  if (!username) {
    error.username = "Please enter your username";
  }
  if (!artist) {
    error.artist = "Please enter the artist' name";
  }
  if (!song) {
    error.song = "Please enter a song";
  }
  if (!genre) {
    error.genre = "Please enter the genre";
  }
  if (Object.keys(error).length > 0) {
    const body = content(postsArr, error);
    return res.status(400).send(body);

  } else {
    postsArr.push({ genre, artist, song, rating, username });
    // check whether username exists

    // Push the username into user table

    const user_id = addUsername(username);

    // Updates the music database with user input. Must use user_id because username doesn't feature on music table.
    updateMusicList({ genre, artist, song, rating, user_id });

    console.log(listMusic());
    res.redirect("/");
  }
});

server.get("/search", bodyParser, (req, res) => {
  // get username from the query
  const username = req.query.username;
  const error = {};
  // if empty throw error
  if (!username) {
    error.username = "Please enter your username";
  };
  
  // get an array of songs posted by this username
  let postsByUsername = searchByUsername();
  console.log(postsByUsername);

  //What does this do?!
  // if (Object.keys(error).length > 0) {
  //   const body = content(postsByUsername, error);
  //   return res.status(400).send(body);
  // } 

  // else {
  //   postsByUsername.push({ genre, artist, song, rating, username });
  // }

  res.redirect("/search");
});

module.exports = server;
