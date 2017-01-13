function modifyarray(arr, size){
    while(size > 0){
      arr.shift();
      size--;
    }
}

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newarray = [];
  while(arr.length > 0){
    newarray.push(arr.slice(0, size));
    modifyarray(arr, size);
  }
  return newarray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));