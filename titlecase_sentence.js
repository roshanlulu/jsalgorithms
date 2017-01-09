
function titleCase(str) {
  return str.split(" ").map(function(word){ 
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}).join(" ");;
}

var str = "HERE IS MY HANDLE HERE IS MY SPOUT";
console.log(titleCase(str));
