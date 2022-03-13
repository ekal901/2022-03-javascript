"use strict";
// class vs object
// class : template, declare once, no data in
// object : instance of a class, created many times, data in

// 1. class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const jessy = new Person("jessi", 20);
console.log(jessy.name);
console.log(jessy.age);
jessy.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // set age() 함수 호출,
    // 근데 setter 함수 내부에 this.age = value가 똑같이 존재
    // 무한 재귀
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value; // 여기서 무한 재귀
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age); // getter 호출됨, getter가 없으면 user.age라고 해도 undefiend 발생

// 3. public, private Fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 뭐 당연히 private이라 접근 불가

// 4. Static properties and methods
class Article {
  static publisher = "Coding hater";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
// console.log(article.publisher); // undefiend, object의 값이 아니라
// 변수 앞에 static이 붙으면 Article class의 값이기 때문에 undefined로 나옴
Article.printPublisher();

// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overiding
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. class checking
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
