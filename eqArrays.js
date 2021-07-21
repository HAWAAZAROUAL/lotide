const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION MUST TAKE 2 ARRAYS, COMPARE THEM, THEN RETURN TRUE/FALSE IF NOT A PERFECT MATCH.

function eqArrays(firstArr, secondArr){
  //this compares array length- make the false condition first because it eliminates without making mmultiple statements
 if(firstArr.length !== secondArr.length){
  return false;
 }
 for( i = 0; i < firstArr.length; i++){
  if( firstArr[i] !== secondArr[i]){
    return false;
  }
 }
 return true
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false