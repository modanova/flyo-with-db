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

module.exports = { listMusic };
