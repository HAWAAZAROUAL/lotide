
const words = ["hello", "darkness", "my", "old", "friend"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);


let results5 = map(words, word => word.length)
console.log(results5);

//export
module.exports = map;