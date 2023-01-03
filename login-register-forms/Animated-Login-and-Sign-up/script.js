const signupButton = document.getElementById("signup-button");
const loginButton = document.getElementById("login-button");
const userForm = document.getElementById("user_options-forms");

signupButton.addEventListener(
    "click",
    () => {
        userForm.classList.remove("bounceRight");
        userForm.classList.add("bounceLeft");
    },
    false
);

loginButton.addEventListener(
    "click",
    () => {
        userForm.classList.remove("bounceLeft");
        userForm.classList.add("bounceRight");
    },
    false
);
