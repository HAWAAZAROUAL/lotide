/*
function eqArrays(firstArr, secondArr){
  //this compares array length- make the false condition first because it eliminates without making mmultiple statements
 if(firstArr.length !== secondArr.length){
  return false;
 }
 //this compares the individual items in the array
 for( i = 0; i < firstArr.length; i++){
  if( firstArr[i] !== secondArr[i]){
    return false;
  }
 }
 return true
};


function assertArraysEqual(arr1, ar2){
  if(eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}

//Middle function






// TEST/ASSERTION FUNCTIONS
const eqArrays = function(...) {
  //...
}

const assertArraysEqual = function(actual, expected) {
  //...
}

// ACTUAL FUNCTION
const middle = function(array) {
  //...
}
*/


// What the function does: take in an array --> return the MIDDLE element of any array.
/*
//Steps to take
//1. make the function
function middle(array) {
  for (i = 0; i < array.length; i++) {   //2. make it iterate through an array
   if (array.length === 1 || array.length === 2) {    //3. If there is no middle array (array of 1, or 2 items)- return an empty array
    return "[]"   //should I write it as a console.log?
  }
   if (array.length % 2 === 0) {   //5. if array.length has even (% 2 === 0) amount of items ---> return 2 middle items
    return array[Math.floor(array.length/ 2)];
  }
   if (array.length % 2 !== 0) {   //4. if array.length has an odd (% !== 0)amount of items --> return only 1 middle item
    return array[Math.floor((array.length - 1)/ 2)];
  }
  }
  return array
};
*/

function middle(array) {
  let output = [];
  if (array.length <= 2) {
    return output
  }
  if (array.length % 2 === 0) {
    output.push(array[(Math.floor(array.length/ 2)) - 1]);
    output.push(array[Math.floor(array.length/ 2)]);
    return output
  } else {
    output.push(array[Math.floor((array.length - 1)/ 2)]);
    return output;
  }
};



console.log(middle([1]) )// => []
console.log(middle([1, 2]))

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]








