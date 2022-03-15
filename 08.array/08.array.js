"use strict";
// object: 서로 연관된 특징이나 물체를 엮음
// data structure: object들을 묶어 놓은 것

// first data structure
// Array
// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
for (let fruit of fruits) {
  console.log(fruit);
}
console.clear();
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍒");
// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift("🍕", "🌮");
console.log(fruits); // ['🍕', '🌮', '🍎', '🍌', '🍓']

// shift: remove an item from the begining
fruits.shift();
console.log(fruits); // ['🌮', '🍎', '🍌', '🍓']

// shift와 unshift는 push와 pop 보다 느리다.
// 말 그대로 맨 앞에 데이터를 넣기위해서는 다른 데이터를 밀고 넣어야 함
// 맨 앞에 데이터를 삭제하기 위해서는 맨앞을 지우고 뒤의 데이터를 앞으로 가져와야함

// splice: remove an item by index position
fruits.splice(1, 1); // index 1번째부터 1개의 item 삭제
fruits.splice(1, 1, "🍰", "🍋"); // index 1번쨰부터 1개 삭제하고 그 1번째에 뒤의 아이템추가

// combine two arrays
console.clear();
const food = ["icecream", "snack"];
const newFood = fruits.concat(food); // fruits배열 뒤에 food붙임
console.log(newFood);

// 5. searching
console.log(fruits.indexOf("🍎")); // 없으면 -1
console.log(fruits.includes("🍎")); // true
console.log(fruits.includes("icecream")); // false

// lastIndexOf
fruits.push("🌮");
console.log(fruits);
console.log(fruits.indexOf("🌮"));
console.log(fruits.lastIndexOf("🌮"));
