const test = require("node:test");
const assert = require("node:assert");
const { updateMusicList,addUsername } = require("../src/model/music")

//test if data is inserted into music table properly 
test("updateMusicList update the table"), () => {
    const user_id = addUsername('Alex');
    const musicData = updateMusicList({ genre: 'classic', artist: 'drake', song: 'hello', rating: 3, user_id: user_id})

    assert.equal(checkData.genre, 'ji')
    assert.equal(checkData.artist, "drake")
    assert.equal(checkData.song, "j")
}