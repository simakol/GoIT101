/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3, 11];

// const sorted = numbers.toSorted((a, b) => a - b); // за зростанням
const sorted = numbers.toSorted((a, b) => b - a); // за спаданням
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"].toSorted((a, b) => a.localeCompare(b)); // за зростанням
const letters = ["b", "B", "a", "A"].toSorted((a, b) => b.localeCompare(a)); // за спаданням

// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted(
  (aPlayer, bPlayer) => bPlayer.timePlayed - aPlayer.timePlayed
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (aPlayer, bPlayer) => aPlayer.timePlayed - bPlayer.timePlayed
);
// console.table(sortedByWorstPlayers);

// За першою буквою імені
const byName = players.toSorted((aPlayer, bPlayer) =>
  aPlayer.name[0].localeCompare(bPlayer.name[0])
);
console.table(byName);


