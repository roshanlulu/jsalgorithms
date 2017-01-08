
function palindrome(str) {
  var regex = /[^a-z0-9]/g;
  var cleanstr = str.toLowerCase().replace(regex, '');
  return cleanstr.split('').reverse().join('') === cleanstr;
}

var teststring = "not a palindrome";
console.log("\'" + teststring + "\'" + " is a palindrome: "+ palindrome(teststring));
