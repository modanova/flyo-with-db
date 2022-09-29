const test = require("node:test");
const assert = require("node:assert");
const { updateUsers } = require("../src/model/music")
const { listUsers } = require("../src/model/user")
//test if username is inserted into user table properly 

test("updateUsers update the table", () => {
    updateUsers('Abbie');
    const data = listUsers();
    assert.equal(data.username, 'Abbie')
})