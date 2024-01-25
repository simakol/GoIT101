/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  console.log("1 fnA execution");
  fnB();
}

function fnB() {
  console.log("2 fnB execution");
  fnC();
}

function fnC() {
  console.log("3 fnC execution");
}

fnA()

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");
