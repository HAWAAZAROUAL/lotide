const assert = require('chai').assert;
const tail = require('../tail');

//test code

const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns Lighthouse", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("returns Labs", () => {
    assert.deepEqual(result[1], "Labs");
  });
});