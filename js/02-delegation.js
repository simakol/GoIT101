/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

//! Приклад, як РОБИТИ НЕ ТРЕБА (не треба вішати обробник на кожен елемент колекції)

// const container = document.querySelector(".container");

// [...container.children].forEach((box) =>
//   box.addEventListener("click", handleBoxClick)
// );

// function handleBoxClick(event) {
//   console.log("color =>", event.currentTarget.dataset.color);
// }

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

//* Приклад того, як потрібно робити (потрібно вішати обробник подій на спільний батьківський елемент колекції, і всередині оброблювати подію)

const container = document.querySelector(".container");

container.addEventListener("click", handleBoxClick);

function handleBoxClick(event) {
//   if (event.target === event.currentTarget) return;
  if (!event.target.classList.contains("box")) return;

  console.log(event.currentTarget);
  console.log(event.target);
  console.log("color =>", event.target.dataset.color);
}
