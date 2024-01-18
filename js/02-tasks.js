/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.com/about/";

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = "https://my-site.com/about";

// if (url.includes("my-site") && !url.endsWith("/")) {
//   url += "/";
// }

// url += url.includes("my-site") && !url.endsWith("/") ? "/" : "";

// console.log(url);

/*
 * Пошук у рядку методом includes()
 */

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

// const string2 = "Biggest SALE this week, don't miss out!";

// const string3 = "#fatlivesmatter advertising campaign";

// console.log(`str1: ${checkWordInSentence(string1, blacklistedWord1)}`);
// console.log(`str1: ${checkWordInSentence(string1, blacklistedWord2)}`);

// console.log(`str2: ${checkWordInSentence(string2, blacklistedWord1)}`);
// console.log(`str2: ${checkWordInSentence(string2, blacklistedWord2)}`);

// console.log(`str3: ${checkWordInSentence(string3, blacklistedWord1)}`);
// console.log(`str3: ${checkWordInSentence(string3, blacklistedWord2)}`);

// function checkWordInSentence(sentence, word) {
//   return sentence.toLowerCase().includes(word.toLowerCase());
// }
