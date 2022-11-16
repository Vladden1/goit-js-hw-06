const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const firstItem = document.createElement("li");
  const firstItemClass = firstItem.classList.add("item");

  firstItem.textContent = ingredient;
  list.append(firstItem);
  console.log(firstItem);
});
