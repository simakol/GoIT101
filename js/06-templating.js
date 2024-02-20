/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector(".title");

// titleEl.innerHTML = ""; // очистка контейнеру
titleEl.innerHTML =
  "<a href='#'>Я посилання! Я було створене через джавасрипт</a>...";
// innerHTML тільки в тих випадках, коли нам потрібно очистити все, що було у контейнері і замінити його на нове

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const listEl = document.querySelector(".product-list");

const liEl = "<li>Ковбаса</li><li>Сир</li>";

listEl.insertAdjacentHTML("beforeend", liEl);
