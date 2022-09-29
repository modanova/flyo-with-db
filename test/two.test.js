const test = require("node:test");
const assert = require("node:assert");
const { listMusic } = require("../src/model/music");

test("can list all the dummy data in the page", () => {
    const listData = listMusic();

    assert.equal(
        listData.length, 4,
        `recieved ${listData.length} data, expected 4`
    );

    const data = listMusic()[0];
    assert.equal(data.artist, 'disclosure');
    assert.equal(data.genre, 'Electronic');
    assert.equal(data.id, 1);
    assert.equal(data.rating, 5);
    assert.equal(data.song, 'Latch');
    assert.equal(data.username, 'Alex');
});