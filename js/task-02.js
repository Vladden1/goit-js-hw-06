const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listElements = [];

ingredients.forEach((ingredient) => {
  const firstItem = document.createElement("li");
  const firstItemClass = firstItem.classList.add("item");
  firstItem.textContent = ingredient;

  listElements.push(firstItem);
});

list.append(...listElements);
