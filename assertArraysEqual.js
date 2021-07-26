//require eqArrays
const eqArrays = require('./eqArrays');

//test the truth of eqArrays against the two arrays
function assertArraysEqual(arr1, arr2){
  if(eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


//exporting
module.exports = assertArraysEqual;