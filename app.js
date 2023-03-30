const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.getElementById("sign-up");
const success = document.querySelector(".success");

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
    password.classList.add("mismatch");
    confirmPassword.classList.add("mismatch");
  } else {
    confirmPassword.setCustomValidity("");
    password.classList.remove("mismatch");
    confirmPassword.classList.remove("mismatch");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  success.style.display = "block";
});
