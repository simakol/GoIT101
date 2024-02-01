/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: true },
// ];

// console.table(friends);

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friendName === friend.name) {
//       console.log("Exists!");
//       return friend;
//     }
//   }

//   console.log("Doesn't exist :(");
//   return null;
// }

// console.log(findFriendByName(friends, "Poly")); // { name: "Poly", online: false }
// console.log(findFriendByName(friends, "Chelsy")); // null

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// }

// console.log(getAllNames(friends)); // ["Mango", "Poly", ...]

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       names.push(friend.name);
//     }
//   }
//   return names;
// }

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.quantity * stone.price;
    }
  }

  return 0;
}

console.log(calcTotalPrice(stones, "щебінь")); // 400
console.log(calcTotalPrice(stones, "Діамант")); // 8100
console.log(calcTotalPrice(stones, "Рубін")); // 8100
