/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

// input - подія, яка спрацьовує при зміні стану поля вводу

const userName = document.querySelector(".js-user-name");

// userName.addEventListener("input", handleInput);

function handleInput(event) {
  // event - це обʼєкт події, у якому зберігається уся важлива інформація про подію, яка відбулась

  // console.log("поле було змінене");
  // console.log(event.currentTarget); // посилання на дом елемент, на якому висить обробник подій
  console.log(event.currentTarget.value); // дані, які записані в полі вводу
}

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// blur - подія, яка спрацьовує при втраті фокусу з елементу

// change - подія, яка спрацьовує при втраті фокусу з поля вводу, при умові, що значення всередині поля було змінено

userName.addEventListener("blur", handleBlur);

function handleBlur(event) {
  console.log(event);

  const name = event.currentTarget.value;

  alert(`Привіт, ${name}. Раді бачити вас на сайті!`);
}
