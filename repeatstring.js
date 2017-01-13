
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newstr = ""; 
  while(num > 0){
    newstr = newstr + str;
    num--;
  }
  return (num < 0)?"":newstr;
}

console.log(repeatStringNumTimes("abc", 3));