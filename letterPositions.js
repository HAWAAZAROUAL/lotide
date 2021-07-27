//LetterPositions
function assertArraysEqual(arr1, arr2){
  //if eqarrays is equal and the two arrays too -- true
  if(eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


const letterPositions = function(sentence) {
  sentence = sentence.replace(/ /g, ''); //regex
  //console.log(sentence);
  const results = {};
  for (const index in sentence) { 
    const letter = sentence[index] 
    if (results[letter]) {
      results[letter] += (", " + index);
    } else {
      results[letter] = index;
    }
    console.log(letter);
  }
    return results
  }



console.log(letterPositions("hello"));

//Purpose of letterPositions:
//return all index position # for each letter in the string.

module.exports = letterPositions;