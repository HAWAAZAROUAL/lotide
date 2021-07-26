const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION MUST TAKE 2 ARRAYS, COMPARE THEM, THEN RETURN TRUE/FALSE IF NOT A PERFECT MATCH.

function eqArrays(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    //this compares array length- make the false condition first because it eliminates without making mmultiple statements
    return false;
  }
  for (i = 0; i < firstArr.length; i++) { //loop through the first array
    if (firstArr[i] !== secondArr[i]) { //if the elements in eacha array are not equal --> return false
      return false;
    }
  }
  return true; //If everything fails --> return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
