/*
 * Події миші
 * - mouseenter і mouseleave (це ховер, який не спливає)
 * - mouseover і mouseout (навіть коли перехід робиться з батьківського на дочірній)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseover", handleMouseOver);
boxRef.addEventListener("mouseout", handleMouseOut);
boxRef.addEventListener("mousemove", handleMouseMove);

function handleMouseOver(event) {
  console.log(event);
  event.currentTarget.classList.add("box--active");
}

function handleMouseOut(event) {
  console.log(event);
  event.currentTarget.classList.remove("box--active");
}

function handleMouseMove(event) {
  console.log(event);
}
