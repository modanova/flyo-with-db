const test = require("node:test");
const assert = require("node:assert");
const { updateMusicList } = require("../src/model/music")

//test if data is inserted into music table properly 
test("updateMusicList update the table", () => {

    const musicData = updateMusicList({ genre: 'classic', artist: 'drake', song: 'hello', rating: 3, user_id: 1 });
    // const checkData = musicData[musicData.length];
    
    assert.equal(musicData.user_id, 1)
})