/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");

// submit - подія, яку потрібно вішати саме на форму і її задача - обробити відправку даних форми (з перезавантаженням вашої сторінки)

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // відміняємо поведінку браузера за замовчуванням (в даному прикладі відміняємо перезавантаження сторінки)
  //   console.log(event.currentTarget.elements);
  const elements = event.currentTarget.elements; // обʼєкт з усіма полями форми, до яких ми будемо звертатись у відповідності до атрибуту name кожного інпуту

  console.log(elements)

  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value,
  };

  console.log(info);

  event.currentTarget.reset(); // скидуємо поля форми (очистка)
}
