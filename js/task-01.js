//   Number of categories: 3
const item = document.querySelectorAll(".item");
const numberOfCategories = item.length;

console.log("Number of categories:", numberOfCategories);
// Category: Animals
// Elements: 4
const firstTitle = document.querySelector("h2");
console.log("Category:", firstTitle.textContent);

const categoryEl = document.querySelector("ul");
const firstListEl = categoryEl.firstElementChild.querySelector("ul");
const firstListElLength = firstListEl.children.length;

console.log("Elemnets:", firstListElLength);
// Category: Products
// Elements: 3
const secondTitle = categoryEl.querySelectorAll("h2")[1];
console.log("Category:", secondTitle.textContent);

const secondListEl = categoryEl.children[1].querySelector("ul");
const secondListElLength = secondListEl.children.length;

console.log("Elemnets:", secondListElLength);

// Category: Technologies
// Elements: 5

const thirdTitle = categoryEl.querySelectorAll("h2")[2];
console.log("Category:", thirdTitle.textContent);

const thirdListEl = categoryEl.children[2].querySelector("ul");
const thirdListElLength = thirdListEl.children.length;
console.log("Elemnets:", thirdListElLength);
