// //MIT TASK "P"
function hasProperty(obj, str) {
  for (let k in obj) {
    if (k === str) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
// //MIT TASK "O"
// function objectToArray(obj) {
//   new_obj = [];
//   for (let x in obj) {
//     new_obj.push([x, obj[x]]);
//   }
//   return new_obj;
// }

// console.log(objectToArray({ a: 10, b: 20 }));

// //MIT TASK "O"
// function calculateSumOfNumbers(arr) {
//   count = 0;
//   for (let x of arr) {
//     if (typeof x === "number") {
//       count += x;
//     }
//   }
//   return count;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
/* Project standarts
   1) Logging standarts
   2) Naming standarts:
          funtion,method,vaariable=> camelCase
          class=> PASCAL
          folder=>KEbab
          css=> Snake\
   3) Error handling
*/

// //MIT TASK "N"
// function palindromCheck(word) {
//   let new_word = word;
//   if (new_word === word.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromCheck("kiyik"));

//MIT TASK M
// function getSquNums(arr) {
//   arr2 = [];
//   for (num of arr) {
//     arr2.push({ number: num, square: num * num });
//   }
//   return arr2;
// }
// console.log(getSquNums([1, 2, 3, 4]));

//MIT TASK L
// function revSent(str) {
//   arr = [];
//   for (word of str.split(" ")) {
//     arr.push(word.split("").reverse().join(""));
//   }
//   return arr.join(" ");
// }
// console.log(revSent("we like coding"));
