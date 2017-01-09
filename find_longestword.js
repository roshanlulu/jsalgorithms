function findLongestWordLength(str) {
    var strlengtharray = str.split(" ").map(function (word) {
        return word.length;
    }).sort(function (a, b) {
        return b - a;
    });
    return strlengtharray[0];
}


function findLongestWord(str) {
    return str.split(" ").sort(function (a, b) {
        return b.length - a.length;
    })[0];
}

var str = "The quick brown fox jumped over the lazy dog";

console.log("The longest word in the sentence \'" +  str + "\' is \'" + findLongestWord(str) + "\' ,of length " + findLongestWordLength(str));
