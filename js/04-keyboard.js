/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

/**
 * Обробка комбінацій клавіш
 */

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  console.log(event);
  //  event.code  - властивість у якій зберігається код клавіші. Він не залежить від розкладки клавіатури, а орієнтується на фізічне розташування клавіші. Ми його використовуємо тоді, коли хочемо щоб наша комбінація працювала коректно в не залежності від мови та розкладки користувача

  // event.key - властивість у якій зберігається символ клавіші яку було натиснуто (з привʼязкою до розкладки)

  // event.metaKey буде true якщо ви затиснули клавішу command (macOS) або клавішу Win (windows)

  //   if (event.code === "Escape") {
  //     console.log("Ви натиснули Esc");
  //   } else {
  //     console.log("Ви натиснули невідому мені клавішу!");
  //   }

  // перевіряємо, що була натиснута клавіша C і при цьому була затиснута або клавіша ctrl або клавіша command
  
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
    event.preventDefault(); // забороняємо копіювання
  }
}
