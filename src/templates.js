function sanitize(str) {
    return str.replace(/</g, "&lt;");
}

const content = (posts) => {
    return/*html*/ `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width">
        <meta charset="utf-8">
          <title>Music List</title>
    </head>
    <body>
    <main>
    <form method="POST" action="/" class="submit-form">
      <label for="username">Username</label>
      <input type="text" name="username">

      <label for="artist">Artist</label>
      <input type="text" name="artist">

      <label for="song">Song</label>
      <input type="text" name="song">

      <label for="genre">Genre</label>
      <input type="text" name="genre">

      <label for="rating">Rating</label>
      <input type="range" name="rating" min="0" max="5">
      <button>Post</button>
      </form>
      <h2>All posts</h2>
      <ul>
    ${posts.map(postItem).join("")}
    </ul>
      </main>
      <footer>
              <p>@2022 Abby-Alex-Manoela-Suraj</p>
            </footer>
      </body>
      </html>
`
}
function postItem(post) {
    return `
      <li>
        <p>${sanitize(post.username)}</p>
        <p>—${sanitize(post.artist)}</p>
        <p>${sanitize(post.song)}</p>
        <p>${sanitize(post.genre)}</p>
        <p>${(post.rating)}</p>
      </li>
    `;
}



module.exports = {
    sanitize,
    content,
};