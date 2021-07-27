// START CODE
const takeUntil = function (array, callback) {
  const results1 = [];
  for (const item of array) {
    if (callback(item)) {
      //if true
      return results1;
    }
    // if false add to the array
    results1.push(item);
  }
  return results1;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results2 = takeUntil(data1, (x) => x < 0);
console.log(results2);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results3 = takeUntil(data2, (x) => x === ",");
console.log(results3);

//this loops through the given array- Now I want to test for the true value
//console.log(callback(item));
//so if item of array is = to callback(item) - if that's true- then we stop the loop

//export
module.exports = takeUntil;
