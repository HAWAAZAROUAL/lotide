//import assertEqual
const assertEqual = require('./assertEqual')

//FUNCTION
const findkey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }
  }
};

//Steps to take
//make function
//make a for in loop to look at the keys
//check if the value of each key matches what is being passed through- if it's true then we return key.

//assert equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = findkey;

//test case
console.log(findkey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"



