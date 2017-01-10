
function largestOfFour(arr) {
  var newarray = arr.map(function(subarray){
    subarray.sort(function(a, b){
      return (b - a);
    });
    return subarray[0];
 });
 return newarray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
