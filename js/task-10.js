function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector(`[type='number']`);
console.log(inputEl);

const btnCreateEL = document.querySelector(`[data-create]`);
console.log(btnCreateEL);

const btnDestroyEL = document.querySelector(`[data-destroy]`);
console.log(btnDestroyEL);

const divBoxesEl = document.querySelector("#boxes");

console.log(divBoxesEl);

btnCreateEL.addEventListener("click");

btnDestroyEL.addEventListener("click");
