/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//* join(separator) -> цей метод повертає рядок у якому будуть склеєні всі елементи масиву + між кожним елементом масиву буде символ, який ви передасте в якості параметру separator. Якщо ви не передаєте значення для параметру separator, то за замовчуванням буде кома

// console.log(courses.join(", "))
// console.log(courses.join(""))

//* split(divider) -> цей метод викликається на рядках та повертає масив у якому кожен елемент це частинка рядка, яка була розбита за допомогою символу з параметру divider

// console.log("Hello world!".split(""))
// console.log("Hello world!".split(" "))
// console.log("Hello world!".split("o"))

// const techStack = "HTML, CSS, JS, REACT.js, Next.js"
// console.log(techStack.split(", "))

//* slice(start, end) - повертає новий масив, який є копією частини масиву на якому викликається метод. Копіювання відбувається з індексу start по індекс end (не включно)

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// const base = courses.slice(0, 3);
// console.log(base);

// console.log(courses.slice(10)) // навіть якщо немає такого індексу - повертається пустий масивчик

//* concat(...arrays) - повертає новий масив, у якому будуть всі масиви, які ви передаєте в якості аргументів(кількість необмежена). По сути цей метод зливає всі масиви в один.

// const base = ["HTML", "CSS", "JavaScript"];
// const advanced = ["React", "PostgreSQL"];
// const frameworks = ["Vue.js", "Angular"];

// const allStack = base.concat(advanced, frameworks);

// console.log(allStack);

// const a = [1, 2, 3, 4];
// const b = [4, 5];
// const c = [6, 7, 8];
// console.log(a.concat(b, c));

//* indexOf(value) - повертає індекс першого значення value яке зустрінеться у масиві. якщо такого значення у масиві немає - повернеться -1

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// console.log(courses.indexOf("JavaScript"))
// console.log(courses.indexOf("Vue"))

//* push(...values) - додає в кінець масиву один або декілька елементів
//* pop() - видаляє один елемент з кінця масиву

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// console.log(courses);

// courses.pop();

// console.log(courses);

// courses.push("Node.js", "React Native")

// console.log(courses);
