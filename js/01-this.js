/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/*
1. this - це контекст виклику фукнції. Він вказує на тей обʼєкт, який цю функцію викликає. Тому, щоб зрозуміти чим буде this завжди треба дивитись на тип фукнції та на місце її виклику.

2. Якщо фукнція була викликана без контексту (без обʼєкту) - то this буде посилатись на Window(звичайний режим) або на undefined (суворий режим user strict)

3. При передачі функції у якості колбеку, контекст втрачається (тому що колбек фукнції під час передачі не викликаються), для його коректної передачі можна використовувати метод .bind()

4. Стрілочні функції не мають свого власного this. Тому вони беруть this у свого батька (в рамках того місця, де була створена стрілочна функція). Стрілочні функції запамʼятовуть this назавжди і потім його змінити не можна. Тому використання this у стрілочних фукнціях позбавлено сенсу (ніколи не використовуйте стрілочні фукнції як методи для обʼєктів). Також в суворому режимі стрілочні функції ігнорують звертання до глобального обʼєкту window.

*/

// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

/**
 * Глобальний контекст
 */
function foo() {
  console.log("foo -> this", this);
}

// foo();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag; // тут відбулася втрата контексту, так як фукнція не була викликана

// console.log(outerShowTag)

// outerShowTag();

// const mango1 = {
//   tag: "Mango",
//   mangoShowTag: outerShowTag
// }

// mango1.mangoShowTag()

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

function invokeAction(action) {
  console.log(action);
  action();
}

// invokeAction(jacob.showTag);

// This in Arrow Function

// const showThisArrow = () => console.log("Inside Arrow", this);

// showThisArrow();

// *** arrow fn as object methods

// const siteUser = {
//   username: "Vanya111",
//   sayHi: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.username}`);
//   },
// };

// // siteUser.sayHi()
// siteUser.sayHi.call(siteUser)

// ***

// const siteUser = {
//   username: "Vanya111",
//   sayHi() {
//     console.log(this);
//     console.log(`Hello, my name is ${this.username}`);
//     const arrowInside = () => {
//       console.log("Inside arrow fn", this);
//     };

//     arrowInside();
//   },
// };

// siteUser.sayHi();
