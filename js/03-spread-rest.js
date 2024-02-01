/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// spread - розпилює дані на окремі значення, пишеться після знаку дорінює в контексті масивів або обʼєктів

// const num1 = [1, 2, 3];
// const num2 = [5, 6, 7];
// const num3 = [9, 10, 11];

// const numbers = [...num1, 4, ...num2, 8, ...num3];
// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const max = Math.max(...temps); //  Math.max(18, 14, 12, 21, 17, 29, 24)
// const min = Math.min(...temps);

// console.log(max);
// console.log(min);

/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// a[0].x = 100

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA,
//   ...objB
// };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
