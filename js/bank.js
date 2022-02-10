document.getElementById("submit-btn").addEventListener("click", function () {
  const userField = document.getElementById("user-email");
  const userEmail = userField.value;
  //   console.log(userEmail);

  // get password User

  const userPasswordField = document.getElementById("user-password");

  const userPassword = userPasswordField.value;
  //   console.log(passwordField);

  /* if (userEmail == "rahib12@gmail.com" && userPassword == "mahadi") {
    // console.log("Valid User");
    window.location.href = "banking.html";
  } */

  if (userEmail.includes("gmail.com") && typeof (userPassword == "number")) {
    // console.log("Valid User");
    window.location.href = "banking.html";
  }
});
