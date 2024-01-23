/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

console.table(courses);
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[4]);

courses[0] = "HTML5";
courses[1] = "CSS3";
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex);
