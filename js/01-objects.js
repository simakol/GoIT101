/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

console.log(playlist);
console.log(playlist.name);
console.log(playlist.rating);
playlist.newProp = "something new";
playlist.rating = 4;

/**
 * -----------------------------------
 */
const propertyName = "tracks";

console.log(playlist[propertyName]);
console.log(playlist["rating"]);

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

foo({
  a: 5,
  b: 10,
});
