const descending = (a, b) => (b - a);

const getLargestNum = (subArray) => {
  subArray.sort(descending);
  return subArray[0];
}

const largestOfFour = arr => arr.map(getLargestNum);

const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

console.log(" New array = " + largestOfFour(arr));
