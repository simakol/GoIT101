/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: "червоний", color: "#F44336" },
  { label: "зелений", color: "#4CAF50" },
  { label: "синій", color: "#2196F3" },
  { label: "сірий", color: "#607D8B" },
  { label: "рожевий", color: "#E91E63" },
  { label: "індіго", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

const elements = options.map((btn) => {
  const buttonEl = document.createElement("button"); // створення елементу кнопки
  buttonEl.type = "button"; // додаємо кнопці тип (атрибут)
  buttonEl.classList.add("color-picker__option"); // додаємо кнопці клас
  buttonEl.textContent = btn.label; // додаємо кнопці текст (який витягуємо з обʼєкту btn)
  buttonEl.style.backgroundColor = btn.color; // додаю кнопці динамічні стилі (фон), колір беру з обʼєкту

  return buttonEl;
});

console.log(elements);

colorPickerContainerEl.append(...elements); // додаємо наші кнопки в контейнер розпиливши масив вузлів, які ми створили
