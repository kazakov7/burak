//MIT TASK L
function revSent(str) {
  arr = [];
  for (word of str.split(" ")) {
    arr.push(word.split("").reverse().join(""));
  }
  return arr.join(" ");
}
console.log(revSent("we like coding"));
