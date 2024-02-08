/**
 * Ланцюжки методів
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers;
console.log(greaterThenTwo);

const multByThree = greaterThenTwo;
console.log(multByThree);

const sorted = multByThree;
console.log(sorted);

const sortedbyChaining = numbers;
console.log(sortedbyChaining);

/**
 * -------------------------------------
 */
const allCars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
const getModelsOnSale = (cars) => {};

// console.table(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
const getSortedCarsOnSale = (cars) => {};

// console.table(getSortedCarsOnSale(allCars));
