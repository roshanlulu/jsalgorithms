
function sortsubarray(a, b){
  return b - a;
}

function getLargestNum(subarray) {
  subarray.sort(sortsubarray);
  return subarray[0];
}

function largestOfFour(arr) {
  return arr.map(getLargestNum);
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
