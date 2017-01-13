
const numlessthan3 = (str, num) => str.slice(0,num) + truncatestr;

const numismax = (str, num) => str;

const truncate  = (str, num) => str.slice(0,num-truncatestr.length) + truncatestr;

const truncateString = (str, num) => {
    return (num <= 3)?numlessthan3(str, num):((num >= str.length)?numismax(str, num):truncate(str, num));
}

const truncatelength = 11;
const truncatestr ="...";
const teststring = "A-tisket a-tasket A green and yellow basket";
console.log(truncateString(teststring, truncatelength));