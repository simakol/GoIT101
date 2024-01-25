/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  console.log("fnA execution");
}

function fnB() {
  console.log("fnB execution");
}

function fnC() {
  console.log("fnC execution");
}

console.log("Before fnA execution");
fnA();
console.log("After fnA execution");

console.log("Before fnB execution");
fnB();
console.log("After fnB execution");

console.log("Before fnC execution");
fnC();
console.log("After fnC execution");
