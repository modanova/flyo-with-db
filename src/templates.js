function sanitize(str) {
  return str.replace(/</g, "&lt;");
}

const content = (posts, error = {}) => {
  return /*html*/ `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width">
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css" />
          <title>Music List</title>
    </head>
    <body>
    <main>
    <h1>My Music</h1>
    <form method="POST" action="/" class="submit-form">
      <label for="username">Username</label>
      <input type="text" name="username" maxLength="15">
      ${validation(error.username)}
      <label for="artist">Artist</label>
      <input type="text" name="artist">
      ${validation(error.artist)}

      <label for="song">Song</label>
      <input type="text" name="song">
      ${validation(error.song)}

      <label for="genre">Genre</label>
      <input type="text" name="genre">
      ${validation(error.genre)}

      <label for="rating">Rating</label>
      <input type="range" name="rating" min="0" max="5">
      <button>Post</button>
      </form>
      <h2>All posts</h2>
      <ul class="grid-container">
    ${posts.map(postItem).join("")}
    </ul>
      </main>
      <footer>
              <p>@2022 Abby-Alex-Manoela-Suraj</p>
            </footer>
      </body>
      </html>
`;
};

function addStars(rating) {
  const star = `<span>✩</span>`;

  let rating_in_stars = star;

  while (rating > 1) {
    rating_in_stars += star;
    rating--;
  }
  return rating_in_stars;
}

function postItem(post) {
  return `
      <li>
        <p>@${sanitize(post.username)}</p>
        <p>${capitalizeFirstLetter(sanitize(post.artist))}</p>
        <p>${capitalizeFirstLetter(sanitize(post.song))}</p>
        <p>${capitalizeFirstLetter(sanitize(post.genre))}</p>
        <p>${addStars(post.rating)}</p>
      </li>
    `;
}
function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return "";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  sanitize,
  content,
};
