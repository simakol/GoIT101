/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.name = "Rectangle";
  }

  greeting() {
    console.log(
      `I'm ${this.name}.\nMy width is ${this.width}\nMy height is ${this.height}`
    );
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimetr() {
    return this.width * 2 + this.height * 2;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length); // викликає конструктор батьківсього класу, це є обовʼязковим під час наслідування
    this.name = "Square";
  }

  greeting() {
    console.log(`I'm ${this.name}.\nMy side length is ${this.width}`);
  }
}


const rectangle = new Rectangle(10, 5);

rectangle.greeting();

console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimetr());

const square = new Square(5);

console.log(square);

square.greeting();

console.log(square.calculateArea());
console.log(square.calculatePerimetr());
