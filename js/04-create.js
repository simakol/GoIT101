/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const heroContainer = document.querySelector(".hero");

const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Це заголовок сторінки!";
console.log(titleEl);
heroContainer.append(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const heroEl = document.querySelector(".hero");
const imageEl = document.createElement("img");
imageEl.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "valais-alpine-mountains-glacier";
imageEl.width = 300;
console.log(imageEl);
heroEl.append(imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
const ulEl = document.querySelector(".site-nav");
const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.href = "/profile";
navLinkEl.textContent = "Особистий кабінет";
navLinkEl.classList.add("site-nav__link");

navItemEl.append(navLinkEl); // додаю тег а в тег лі
ulEl.append(navItemEl); // додаю тег лі в тег ул
