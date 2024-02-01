/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [];
// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

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

const finalSettings = {};

// console.log(finalSettings);
