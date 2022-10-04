'use strict';

const Person = function (firstName, birthYear) {
  // instance properties - bice dostupne svim instancama objekta
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never make method in constructor function!!!
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991);
// 1. New {} is created
// 2. function is called, this keyword = {}
// 3. {} is linked to prototype
// 4. function automatically return {}
// console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(matilda);
// console.log(jack);

console.log(jonas instanceof Person); // provera da li je objekat stvarno instanca konstruktora
// console.log(Person.prototype);

// PROTOTYPES

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();
// console.log(jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matilda);

//
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //top of prototype chain
console.log(jonas.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 9, 11, 13, 14];
console.log(arr.__proto__);

// coding challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const carBmw = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);

carBmw.accelerate();
carBmw.brake();
carBmw.accelerate();

// javascript CLASSES

//class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
