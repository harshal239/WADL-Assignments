const submitBtn = document.getElementById("submit-btn");
const loginForm = document.getElementById("login__form");
const snackbar = document.getElementById("snackbar");
let userData = [];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3006/Users", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  if (name.value !== "" && email.value !== "" && phone.value !== "") {
    xhr.send(
      JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
      })
    );
  } else {
    snackbar.innerText = "All Fields are required !";
  }
  loginForm.reset();
});
function myFunction() {
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
