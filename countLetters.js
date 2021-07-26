const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Count Letters

function countLetters(allLetters) {

 allLetters = allLetters.replace(/ /g, ''); //regex --> this gets rid of spaces

  const results = {}; // empty object

  for (const letter of allLetters) { //for of loop
    if (results[letter]) { //
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
    return results
}


console.log(countLetters("Lighthouse Labs"));