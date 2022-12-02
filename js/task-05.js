const form = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

form.addEventListener("input", () => {
  if (form.value.length === 0) {
    text.textContent = "Anonymous";
  } else {
    text.textContent = form.value;
  }
});
