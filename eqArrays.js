//FUNCTION MUST TAKE 2 ARRAYS, COMPARE THEM, THEN RETURN TRUE/FALSE IF NOT A PERFECT MATCH.

function eqArrays(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true; //If everything fails --> return true
}

//exporting file
module.exports = eqArrays;
