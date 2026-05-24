//MIT TASK "M"
function getSquNums(arr) {
  arr2 = [];
  for (num of arr) {
    arr2.push({ number: num, square: num * num });
  }
  return arr2;
}
console.log(getSquNums([1, 2, 3, 4]));
//MIT TASK L
// function revSent(str) {
//   arr = [];
//   for (word of str.split(" ")) {
//     arr.push(word.split("").reverse().join(""));
//   }
//   return arr.join(" ");
// }
// console.log(revSent("we like coding"));
