const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let array = [];
  for (let i = 1; i < arr.length; i++) {
    array.push(arr[i]); 
  }
  return array;
};


module.exports = tail;