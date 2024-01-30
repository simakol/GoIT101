/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = "Mango";
const email = "mango@mail.com";

// const credentials = {
//   username: username,
//   email: email,
// };

const credentials = {
  username,
  email,
};

console.log(credentials);
console.log(credentials.username);
console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = "color";

const colorPickerData = {
    [inputName]: "blue"
};

console.log(colorPickerData);
