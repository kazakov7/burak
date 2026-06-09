// //MIT TASK "S"
function test(arr) {
  max = arr[0];
  for (x of arr) {
    if (x > max) {
      max = x;
    }
  }
  new_arr = [];
  for (let i = 0; i <= max; i += 1) {
    new_arr.push(i);
  }
  arr2 = new_arr.filter((x) => !arr.includes(x));
  return arr2;
}
console.log(test([3, 0, 1, 6, 8, 10, 9]));

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
