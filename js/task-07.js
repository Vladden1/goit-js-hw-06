const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = "40px";

console.group(textEl);
sliderEl.addEventListener("input", () => {
  textEl.style.fontSize = sliderEl.value + "px";
});
