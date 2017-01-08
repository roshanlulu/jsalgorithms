
function palindrome(str) {
    str = str.toLowerCase().split('').filter(function (item) {
        return item.match(/[a-z]|\d/);
    });
    return str.join('') === str.reverse().join('');
}

var teststring = "not a palindrome";
console.log("\'" + teststring + "\'" + " is a palindrome: "+ palindrome(teststring));
