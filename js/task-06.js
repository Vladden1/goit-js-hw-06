const inputEl = document.querySelector("#validation-input");
inputEl.classList.add("valid", "invalid");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length != inputEl.dataset.length) {
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("invalid");
  }
});
