const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Count Letters

function countLetters(allLetters) {

 allLetters = allLetters.replace(/ /g, ''); //regex

  const results = {};

  for (const letter of allLetters) { 
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
    return results
}


console.log(countLetters("Lighthouse Labs"));