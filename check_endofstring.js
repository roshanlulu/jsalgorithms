const confirmEnding = (str, target) => target === str.substring(str.length - target.length);

const mainstring = "He has to give me a new name";
const checkstring = "name";

console.log("\'" + mainstring + " \' ends with the substring \'" + checkstring + "\' : " +confirmEnding(mainstring, checkstring));
