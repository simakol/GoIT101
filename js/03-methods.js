/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// ці методи потрібні щоб викликати фукнцію з новим контекстом (ми самі можемо його задати)

// call/apply - викликають функцію на місці, відрізняються тільки тим, що call приймає аргументи через кому, а apply приймає масив з аргументів

// bind - повертає копію фукнції з новим контекстом, щоб пізніше ми могли її викликати (наприклад, це може використовуватись під час передачі функції в якості колбеку)

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

// showThis(); // undefined

const objA = {
  a: 5,
  b: 10,
};

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */

const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

// changeColor.call(hat, "orange")
// console.log(hat);

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(5, counter.increment.bind(counter)); // при передачі цього методу ми втрачаємо контекст виклику (тому що фукнція не викликається), відповідно, щоб не втрачати його, потрібно його привʼязати, з цим нам допоможе метод bind(), викликавши його ми повернемо копію нашої функції до якої вже буде привʼязано контекст
updateCounter(45, counter.increment.bind(counter));
updateCounter(26, counter.decrement.bind(counter));
