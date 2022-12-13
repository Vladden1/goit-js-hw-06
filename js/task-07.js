const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(sliderEl);

sliderEl.addEventListener("input", () => {
  textEl.style.fontSize = sliderEl.value + "px";
});
