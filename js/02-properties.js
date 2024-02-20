/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector(".hero__image");

console.dir(imageEl);

imageEl.src =
  "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

imageEl.alt = "New cat";

const heroTitleEl = document.querySelector(".hero__title");

console.dir(heroTitleEl);

heroTitleEl.textContent = "It's new title";

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

console.log(imageEl.getAttribute("src"));
console.log(imageEl.src);
// imageEl.setAttribute("alt", "lfjsdkfljlsdfjldsf")
console.log(imageEl.hasAttribute("src"));
console.log(imageEl.hasAttribute("height"));
// imageEl.removeAttribute("width");

/*
 * Data-атрибути
 */
const actions = document.querySelectorAll(".actions button");

console.log(actions);
console.log(actions[1].dataset.action);
