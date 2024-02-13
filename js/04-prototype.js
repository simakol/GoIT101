/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(Object.hasOwn(dog, "name")); // перевіряє чи є властивість обʼєкту власна, чи ні
// console.log(Object.hasOwn(dog, "legs"));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (Object.hasOwn(dog, key)) {
//     console.log(key);
//   } else {
//     console.log(`Властивість ${key} не є власною`);
//   }
// }

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(Object.hasOwn(objA, "a")); // true
// console.log(objA.a); //"objA prop"

// console.log(Object.hasOwn(objA, "b")); // false
// console.log(objA.b); // "objB prop"

// console.log(Object.hasOwn(objA, "c")); // false
// console.log(objA.c); // "objC prop"

// console.log(Object.hasOwn(objA, "x")); // false
// console.log(objA.x); // undefined

// console.log(Object.hasOwn(objB, "c")); // false
// console.log(objB.c); // "objC prop"

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer));
