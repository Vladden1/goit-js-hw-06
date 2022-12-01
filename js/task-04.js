let counterValue = 0;

const resultEl = document.querySelector("#value");
const btnDownEl = document.querySelector(`[data-action="decrement"]`);
const btnUpEl = document.querySelector(`[data-action="increment"]`);

btnDownEl.addEventListener("click", () => {
  resultEl.textContent = counterValue -= 1;
});
btnUpEl.addEventListener("click", () => {
  resultEl.textContent = counterValue += 1;
});
