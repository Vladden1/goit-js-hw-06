const formEl = document.querySelector(".login-form");
const userData = {};
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All fields must be filled!");
  } else {
    userData.email = email.value;
    userData.password = password.value;

    console.log(userData);
    event.currentTarget.reset();
  }
}
