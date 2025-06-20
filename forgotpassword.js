const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");

newPassword.addEventListener("input", function () {
  const value = newPassword.value;

  length.classList.toggle("valid", value.length >= 8);
  uppercase.classList.toggle("valid", /[A-Z]/.test(value));
  lowercase.classList.toggle("valid", /[a-z]/.test(value));
  number.classList.toggle("valid", /[0-9]/.test(value));
});

document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  if (
    newPassword.value.length >= 8 &&
    /[A-Z]/.test(newPassword.value) &&
    /[a-z]/.test(newPassword.value) &&
    /[0-9]/.test(newPassword.value)
  ) {
    alert("Password reset successful!");
    // You can now send the data to your backend
  } else {
    alert("Password does not meet all requirements.");
  }
});



