/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty("a"));
console.log(objA.a);

console.log(objA.hasOwnProperty("b"));
console.log(objA.b);

console.log(objA.hasOwnProperty("c"));
console.log(objA.c);

console.log(objA.hasOwnProperty("x"));
console.log(objA.x);
