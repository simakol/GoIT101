/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// event.target - посилання на елемент, який викликав цю подію (або на цьому елементі подія спрацювала)
// event.currentTarget - посилання на елемент, на якому висить обробник подій

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(event) {
  console.log("============");
  console.log("onParentClick");
  console.log("onParentClick -> event.currentTarget", event.currentTarget);
  console.log("onParentClick -> event.target", event.target);
  console.log("============");
}

function onChildClick(event) {
  console.log("============");
  console.log("onChildClick");
  console.log("onChildClick -> event.currentTarget", event.currentTarget);
  console.log("onChildClick -> event.target", event.target);
  console.log("============");
}

function onInnerChildClick(event) {
  console.log("============");
  console.log("onInnerChildClick");
  console.log("onInnerChildClick -> event.currentTarget", event.currentTarget);
  console.log("onInnerChildClick -> event.target", event.target);
  console.log("============");
}
