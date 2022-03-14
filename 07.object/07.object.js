"use strict";

// 1. Literals and properties
// object는 key와 value의 집합체
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const julia = { name: "julia", age: 4 };
print(julia);
julia.hasJob = true;
console.log(julia.hasJob);

delete julia.hasJob;
console.log(julia);

// 2. computed properties
console.log(julia.name);
console.log(julia["age"]); // string으로 가져와야함

julia["hasJob"] = true;
console.log(julia.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // 동적으로 key에 관련된 value를 받아올때 유용
}
printValue(julia, "name");

// 3. Property value shorthand
const person1 = { name: "eric", age: 20 };
const person2 = { name: "kevin", age: 10 };
const person3 = { name: "lily", age: 5 };
const person4 = new Person("henry", 15);
console.log(person4);

// construction function
function Person(name, age) {
  // this = {}; // 생략
  this.name = name;
  this.age = age;
  // return this; // 생략
}

// 5. in operator
console.log("name" in julia); // name이 object안에 있는지
console.log("age" in julia);
console.log("random" in julia);
console.log(julia.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
for (let key in julia) {
  console.log(key);
}

// for (value of interable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

console.clear();
// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: "julia", age: 30 };
const user2 = user;
user2.name = "coder";
console.log(user); // name : coder, age: 30

// object 복사방법
// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "orange", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에서 값을 덮어씀
console.log(mixed);
