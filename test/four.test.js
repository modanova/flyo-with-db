const test = require("node:test");
const assert = require("node:assert");
const { listUsers } = require("../src/model/user")
const { updateUsers } = require("../src/model/music")

//test if username is inserted into user table properly 

test("updateUsers update the table", () => {
    updateUsers('Abbie');
    const data = listUsers();
    assert.equal(data[4].username, 'Abbie')
})