/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

const btn1 = document.querySelector("button");
const btn2 = document.querySelector(".js-magic-btn");
const btn3 = document.querySelector("#magicBtn");

console.log(btn1);
console.log(btn2);
console.log(btn3);

const btnId = document.getElementById("magicBtn");

console.log(btnId);

const allLinks = document.querySelectorAll(".site-nav__link");
console.log(allLinks);

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

const navEl = document.querySelector(".site-nav");

console.dir(navEl);
console.log(navEl.children);
console.log(navEl.firstElementChild);
console.log(navEl.lastElementChild);
