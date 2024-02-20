/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = "/contact";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

console.log(linkEl.classList);

linkEl.classList.add("site-nav__link--current");
linkEl.classList.remove("site-nav__link--current");
linkEl.classList.toggle("site-nav__link--current");
linkEl.classList.toggle("site-nav__link--current");
linkEl.classList.replace("site-nav__link", "site-nav__link--current");

console.log(linkEl.classList.contains("site-nav__link--current"));
console.log(linkEl.classList.contains("active"));
