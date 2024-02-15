/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class Car {
  static description = "Клас для реалізації автомобіля!"; // статичне поле, воно доступне тільки ЧЕРЕЗ САМ КЛАС (фактично клас - це фукнція, а фукнція - це обʼєкт, так от статичне поле це просто поле цього обʼєкту). Вони не додаються в екземпляри, не наслідуються, вони існують тількт в обʼєкті класу і все

  static displayCarObj(carObj) {
    console.log("Обʼєкт автомобіля ->", carObj);
  }

  #owner; // створив приватне поле класу (вони доступні тільки всередині класу і все)

  // це метод, який викликається під час створення екземпляру класу
  constructor(brand, model, price, owner) {
    this.brand = brand; // публічне поле (доступне повсюди: всередині класу, в екземплярі, наслідуюється у дочірній клас)
    this.model = model;
    this.price = price;
    this.#owner = owner;
  }

  // публічний метод
  displayCarInfo() {
    console.log(
      `Марка автомобіля: ${this.brand}\nМодель автомобіля: ${
        this.model
      }\nЦіна автомобіля: ${this.price}$\nВласник автомобіля: ${this.#owner}`
    );
  }

  // приватний метод, доступний тільки всередині класу
  #checkEmail() {
    const email = prompt("Введіть свою пошту для підтвердження");
    return email === this.#owner;
  }

  // для того, щоб читати або перезаписувати приватні поля класу потрібно мати відповідні методи аксесори (get і set). Ці аксесори фактично створять в вашому екземплярі публічне поле яке буде робити те, що ви йому скажете.

  get owner() {
    if (this.#checkEmail()) {
      return this.#owner;
    }
  }

  set owner(newOwner) {
    if (this.#checkEmail()) {
      this.#owner = newOwner;
      console.log(`Власник успішно змінений! Новий власник: ${newOwner}`);
    } else {
      console.log("Поточний власник не є коректним! Спробуйте ще раз");
    }
  }
}

console.dir(Car);

console.log(Car.description); // звернення до статичного поля через сам клас

const infinityCar = new Car("Infinity", "Q60s", 30000, "aaa@gmail.com");
Car.displayCarObj(infinityCar);

infinityCar.displayCarInfo();
// console.log(infinityCar.#owner) //! Error
// console.log(infinityCar.owner);

// infinityCar.owner = "bbb@gmail.com";

Car.displayCarObj(infinityCar);

const bmwCar = new Car("BMW", "M3", 35000, "bbb@gmail.com");

Car.displayCarObj(bmwCar);

bmwCar.displayCarInfo();
/*
оператор new:
1. створює пустий обʼєкт, який називається екземпляром класу
2. викликає конструктор класу
3. під час виклику він встановлює контекст виконання (this) нашим пустим новоствореним обʼєктом. Тобто, метод constructor буде мати this яке вказує на наш пустий новий обʼєкт.
*/
