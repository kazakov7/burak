//MIT TASK "W"
function test(arr, lengs) {
  new_arr = [];
  while (arr.length) {
    new_arr.push(arr.splice(0, lengs));
  }
  return new_arr;
}
console.log(test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// //MIT TASK "V"
// function countChars(word) {
//   obj = {};
//   for (x of word) {
//     if (obj[x]) {
//       obj[x] += 1;
//     } else {
//       obj[x] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countChars("hellos"));

// //MIT TASK "U"
// function sumOdds(num) {
//   let n = 1;
//   let sum = 0;
//   while (n < num) {
//     if (n % 2 == 1) {
//       sum++;
//     }
//     n++;
//   }
//   return sum;
// }
// console.log(sumOdds(9));

// //MIT TASK "S"
// function mergeSortedArrays(arr1, arr2) {
//   arr = arr1.concat(arr2);
//   return arr.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// //MIT TASK "T"
// function missingNumber(arr) {
//   max = arr[0];
//   for (x of arr) {
//     if (x > max) {
//       max = x;
//     }
//   }
//   new_arr = [];
//   for (let i = 0; i <= max; i += 1) {
//     new_arr.push(i);
//   }
//   return new_arr.find((x) => !arr.includes(x));
// }
// console.log(missingNumber([3, 0, 1]));

// //MIT TASK "R"
// function test(str) {
//   for (x of str) {
//     if (str.includes("+")) {
//       j = 0;
//       k = 0;
//       i = str.indexOf("+");
//       j += str.slice(0, i);
//       k += str.slice(i + 1, str.length);
//     } else {
//       return "(+) operatori mavjud emas";
//     }
//   }

//   return Number(j) + Number(k);
// }
// console.log(test("11+2"));

// //MIT TASK "P"
// function hasProperty(obj, str) {
//   for (let k in obj) {
//     if (k === str) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
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
