//FOR WITHOUT-
  //THE INPUT IS A SOURCE ARRAY
  //WITH ANOTHER ARRAY WITH ITEMS WE WANT TO REMOVE FROM THE SOURCE
  //AND IT WILL RETURN ONLY THE ITEMS WE WANT. WITHOUT ITEMSTOREMOVE


function eqArrays(firstArr, secondArr){
  //this compares array length- make the false condition first because it eliminates without making mmultiple statements
 if(firstArr.length !== secondArr.length){
  return false;
 }
 //this compares the individual items in the array
 for( i = 0; i < firstArr.length; i++){
  if( firstArr[i] !== secondArr[i]){
    return false;
  }
 }
 return true
};


function assertArraysEqual(arr1, arr2){
  if(eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


//WITHOUT

function without(source, itemsRemoved){
  let newArray = [];
  for(let i = 0; i < source.length; i++) {
  if (!itemsRemoved.includes(source[i])) {
    newArray.push(source[i]);
   }
  }
  return newArray
}
/*
function without(source, itemsRemoved) {
  let newArray = [];
  //eqarray is true? return empty string
  if(eqArrays(source, itemsRemoved)){
    return newArray;
  }
  //loop through source and exclude what is in itemsRemoved. but add what isn't included in itemsRemoved
  for (item of source) {
  if(!(itemsRemoved.includes(item))) {
    newArray.push(item);
   }
  }
  return newArray;
}
*/
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.