//   Number of categories: 3
const item = document.querySelectorAll(".item");
const numberOfCategories = item.length;

console.log("Number of categories:", numberOfCategories);
// Category: Animals
// Elements: 4
const title = document.querySelector("h2");
console.log("Category:", title.textContent);

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

//   Number of categories: 3

const listEl = [...item];
console.log(listEl);
// const itemEl = listEl.children;
// console.log(itemEl);
// for (const title of titles) {
//   title.className = "title-animal";
//   console.log(title);
// }
