/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

// const numbers = [5, 7, 8, 10, 60, 15, 20, 25];

// const number = numbers.find((number) => number % 2 === 0 && number % 5 === 0);

// const numbersFilter = numbers.filter(
//   (number) => number % 2 === 0 && number % 5 === 0
// );

// console.log(number);

// console.log(numbersFilter);

/**
 * -----------------------------
 */
const allCars = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];

/**
 * Шукаємо машину за моделлю
 */
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(allCars, "F-150"));
// console.log(getCarByModel(allCars, "CX-9"));
// console.log(getCarByModel(allCars, "Cayenne"));

/**
 * Шукаємо машину за типом кузова
 */

// const getCarByType = (cars, type) => cars.find((car) => car.type === type);

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));
