document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Username validation
    if (usernameValue === "") {
      usernameError.textContent = "Username cannot be empty";
      usernameError.style.color = "red"; // Set text color to red
      isValid = false;
    }
    
    // Password validation (minimum 6 characters)
    if (passwordValue === "") {
      passwordError.textContent = "Password cannot be empty";
      passwordError.style.color = "red"; // Set text color to red
      isValid = false;
    } else if (passwordValue.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      passwordError.style.color = "red"; // Set text color to red
      isValid = false;
    }    

    if (!isValid) {
      event.preventDefault(); // Prevent the form from submitting
    }
  });
});
