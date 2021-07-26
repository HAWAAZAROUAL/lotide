//eqArrays
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

//test the truth of eqArrays against the two arrays
function assertArraysEqual(arr1, arr2){
  //if eqarrays is equal and the two arrays too -- true
  if(eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}
assertArraysEqual([1,2,5], [1,2,6])
assertArraysEqual([1,2,3], [1,2,3])