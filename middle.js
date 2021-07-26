function middle(array) {
  let output = []; //empty container
  if (array.length <= 2) { //if the array is<= 2 return an empty string
    return output
  }
  if (array.length % 2 === 0) { //if the length of array is even we want to take the first middle number by making it odd, then also take the middle number if it's even and add that to output
    output.push(array[(Math.floor(array.length/ 2)) - 1]);
    output.push(array[Math.floor(array.length/ 2)]);
    return output
  } else {
    output.push(array[Math.floor((array.length - 1)/ 2)]); // else if array is odd return only one.
    return output;
  }
};


module.exports = middle;








