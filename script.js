const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const loginButton = document.getElementById('login-button');
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');
const passwordError = document.getElementById('password-error');

// Function to toggle password visibility
togglePassword.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Function to validate name
function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 2) {
        showError(nameInput, 'Name must be at least 2 characters');
        return false;
    }
    hideError(nameInput);
    return true;
}

// Function to validate email (simple format check)
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        showError(emailInput, 'Invalid email format');
        return false;
    }
    hideError(emailInput);
    return true;
}

// Function to validate phone number
function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[0-9]+$/;
    if (phoneValue.length < 10 || !phoneRegex.test(phoneValue)) {
        showError(phoneInput, 'Phone number must be at least 10 digits and contain only numbers');
        return false;
    }
    hideError(phoneInput);
    return true;
}

// Function to validate password
function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        return false;
    }
    hideError(passwordInput);
    return true;
}

// Function to validate age
function validateAge() {
    const ageValue = ageInput.value.trim();
    if (ageValue < 15) {
        showError(ageInput, 'Age must be at least 15');
        return false;
    }
    hideError(ageInput);
    return true;
}

// Function to show error message
function showError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
}

// Function to hide error message
function hideError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Event listeners for input validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);
ageInput.addEventListener('blur', validateAge);

// Event listener for login button
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isAgeValid) {
        // All fields are valid, you can proceed with login or form submission
        alert('Form submitted successfully!');
    }
});
