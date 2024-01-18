/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

/*  slice(start, end) - метод для рядків, який копіює і повертає підрядок з основного рядка не змінюючи його.

start - це параметр який відповідає за початок, звідки ми будемо копіювати підрядок (index)
end - це необовʼязковий параметр, який відповідає за кінець копіювання не включно (index)

"hello".slice(1, 3) - [1, 3) - el
"hello".slice(3) - [3, "hello".length) -> [3, 5) - lo
"hello".slice(-1) - ["hello".length - 1, "hello".length) -> [4, 5) -> o
*/
// const username = "Jacob Mercer";

// const firstName = username.slice(0, 5)
// const lastName = username.slice(6)
// console.log(firstName)
// console.log(lastName)

//! ====================================

//* toLowerCase/toUpperCase

// const userMsg = "HeLLo, mY nAMe Is JAcOb MeRCEr!"

// console.log(userMsg.toLowerCase())
// console.log(userMsg.toUpperCase())

//! ====================================

//* includes(string, position) - перевіряє, чи є підрядок string в рядку, на якому викликається цей метод. Якщо цей підрядок знайдено - метод поверне true, якщо ж підрядка немає - метод поверте false. Якщо вам потрібно шукати підрядок починаючи з певного індексу, ви можете вказати цей індекс другим параметром position;

// function isUserKnow(stack, technology) {
//   return stack.toLowerCase().includes(technology.toLowerCase());
// }

// const userStack =
//   "Hello, I know HTML, CSS, JS, React.js, Node.js, MondoDB, Next.js";

// console.log(`HTML: ${isUserKnow(userStack, "html")}`);
// console.log(`Angular: ${isUserKnow(userStack, "angular")}`);
// console.log(`Vue.js: ${isUserKnow(userStack, "vue.js")}`);
// console.log(`CSS: ${isUserKnow(userStack, "css")}`);

//! ====================================

//* startsWith/endsWith - перевіряють чи починається/закінчується рядок якимось символом або іншим підрядком. Повертають true або false

// const url = "https://example.com";

// console.log(`site ${url} safty status: ${isUrlSafe(url)} `);
// console.log(`is ${url} base: ${isBaseUrl(url)} `);

// function isUrlSafe(url) {
//   return url.startsWith("https");
// }

// function isBaseUrl(url) {
//   return url.endsWith(".com");
// }

//! ====================================

//* indexOf(string, position) - повертає перший індекс початку підрядка string у рядку на якому викликається. Якщо такого підрядка немає - повертається -1. аргумент position вказує індекс початку пошуку, за замовчуванням там стоїть індекс 0

// const text = "Hello everyone. My name is Sean.";
// const firstSentence = getTextBeforeDivider(text, ".");
// console.log(firstSentence);

// function getTextBeforeDivider(text, divider) {
//   const index = text.indexOf(divider);

//   if (index === -1) {
//     console.log("Такого розділювача в тексті не існує!");
//     return "";
//   }

//   return text.slice(0, index + 1);
// }

//! ====================================

//* trim() - повертає новий рядок у якому видалені зайві пробіли на початку та у кінці рядку. "     hello world!    ".trim() -> "hello world!"

// const firstName = "    John    ";
// console.log(`Hello, ${firstName.trim()}!`);

// console.log("John    Snow".replaceAll(" ", ""));

// const str = "    JoHn SnOW  "
// console.log(str.trim().toLowerCase())
