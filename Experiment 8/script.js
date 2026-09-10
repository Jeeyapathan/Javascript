/* =========================================
   Gym Membership Form
========================================= */

const form = document.getElementById("membershipForm");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const planInput = document.getElementById("membershipPlan");

const successMessage = document.getElementById("successMessage");

/* =========================================
   Utility Functions
========================================= */

function showError(input, errorId, message) {
    input.classList.add("invalid");
    document.getElementById(errorId).textContent = message;
}

function clearError(input, errorId) {
    input.classList.remove("invalid");
    document.getElementById(errorId).textContent = "";
}

/* =========================================
   Validation
========================================= */

function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        showError(nameInput, "nameError", "Please enter your full name.");
        return false;
    }

    if (name.length < 3) {
        showError(nameInput, "nameError", "Name must contain at least 3 characters.");
        return false;
    }

    clearError(nameInput, "nameError");
    return true;
}

function validateAge() {
    const age = Number(ageInput.value);

    if (!ageInput.value) {
        showError(ageInput, "ageError", "Please enter your age.");
        return false;
    }

    if (age < 16 || age > 100) {
        showError(
            ageInput,
            "ageError",
            "Age must be between 16 and 100."
        );
        return false;
    }

    clearError(ageInput, "ageError");
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError(emailInput, "emailError", "Please enter your email.");
        return false;
    }

    if (!emailPattern.test(email)) {
        showError(
            emailInput,
            "emailError",
            "Please enter a valid email address."
        );
        return false;
    }

    clearError(emailInput, "emailError");
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9+\-\s()]{10,15}$/;

    if (phone === "") {
        showError(
            phoneInput,
            "phoneError",
            "Please enter your phone number."
        );
        return false;
    }

    if (!phonePattern.test(phone)) {
        showError(
            phoneInput,
            "phoneError",
            "Please enter a valid phone number."
        );
        return false;
    }

    clearError(phoneInput, "phoneError");
    return true;
}

function validatePlan() {
    if (planInput.value === "") {
        showError(
            planInput,
            "planError",
            "Please select a membership plan."
        );
        return false;
    }

    clearError(planInput, "planError");
    return true;
}

/* =========================================
   Real-time Validation
========================================= */

nameInput.addEventListener("blur", validateName);
ageInput.addEventListener("blur", validateAge);
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);
planInput.addEventListener("change", validatePlan);

/* =========================================
   Form Submission
========================================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.classList.remove("show");

    const isNameValid = validateName();
    const isAgeValid = validateAge();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPlanValid = validatePlan();

    const formIsValid =
        isNameValid &&
        isAgeValid &&
        isEmailValid &&
        isPhoneValid &&
        isPlanValid;

    if (!formIsValid) {
        return;
    }

    /* Display success message */
    successMessage.classList.add("show");

    /* Optional: Get submitted form data */
    const membershipData = {
        name: nameInput.value.trim(),
        age: ageInput.value,
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        membershipPlan: planInput.value
    };

    console.log("Membership Details:", membershipData);

    /* Reset form after successful submission */
    form.reset();

    /* Remove validation styling */
    nameInput.classList.remove("invalid");
    ageInput.classList.remove("invalid");
    emailInput.classList.remove("invalid");
    phoneInput.classList.remove("invalid");
    planInput.classList.remove("invalid");

    /* Hide success message after 5 seconds */
    setTimeout(() => {
        successMessage.classList.remove("show");
    }, 5000);
});
