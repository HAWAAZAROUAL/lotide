function eqArrays(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}
// eqobjects
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  let result = true;
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
        console.log(result, object1, object2);
      } else {
        result = false;
      }
    }
  }
  return result;
};

//assertobjects
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: 1, b: 2, c: [1, 2] }, { a: 1, b: 2, c: [1, 2] });
