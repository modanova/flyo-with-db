const db = require("../database/db.js");

const select_music = db.prepare(/*sql*/ `
SELECT
music.id,
music.genre,
music.artist,
music.song,
music.rating,
user.username
FROM music
JOIN user
ON music.user_id = user.id
`);

function listMusic() {
  return select_music.all();
}

// receives the username
//checks if username exists
// if exists
// return id

// feed the user_id into musicupdate function
const get_user_id = db.prepare(/*sql*/ `
  SELECT id 
  FROM user
  WHERE username = ?
`);

function getUserId(username) {
  return get_user_id.get(username);
};

const insert_music = db.prepare(/*sql*/ `

  INSERT INTO music (genre, artist, song, rating, user_id)
  VALUES(
    $genre, 
    $artist, 
    $song, 
    $rating,
    $user_id
  )
   RETURNING user_id
`);

function updateMusicList(song) {
  return insert_music.get(song);
}



const add_username = db.prepare(/*sql*/`
  INSERT INTO user (username)
  VALUES (
    $username
  )
  RETURNING username;
`);

function updateUsers(username) {
  return add_username.run({username});
}

function addUsername(username) {
  let user_id = getUserId(username).id;
  console.log(user_id);

  if (!user_id){

    updateUsers(username);
    user_id = getUserId({username}).id;
  }

  return user_id;
}

module.exports = { listMusic, updateMusicList, addUsername };
