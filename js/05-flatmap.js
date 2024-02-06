/**
 * Метод flatMap
 */

// працює так само як метод меп, але з двовимірними масивами (матрицями), дістаючи вкладеність

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tags = tweets.map((tweet) => tweet.tags);
const tags = tweets.flatMap((tweet) => tweet.tags);
console.log(tags);

const arr = [
  ["js", "nodejs"],
  ["js", "nodejs"],
  ["js", "nodejs"],
  ["js", "nodejs", ["js", "nodejs", ["js", "nodejs"]]],
];

console.log(arr)
console.log(arr.flat(3))