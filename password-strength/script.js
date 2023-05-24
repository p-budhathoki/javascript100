let state;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".number i");
let specialChar = document.querySelector(".special-char i");
let eightChar = document.querySelector(".eight-char i");
let showPassword = document.querySelector(".show-pass");
let eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
  let pass = password.value;
  checkStrength(pass);
});

// toggle password visibility
function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

// toggle icon in password field
function toggleEye() {
  eyeIcon.classList.toggle("fa-eye-slash");
}

// Check password strength
function checkStrength(password) {
  let strength = 0;

  // check lower and upper case letters
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    // add check icon
    addCheck(lowUpperCase);
  } else {
    removeCheck(lowUpperCase);
  }


// Check For Numbers
if (password.match(/([0-9])/)) {
  strength += 1;
  addCheck(number);
} else {
  removeCheck(number);
}

// check for special characters
if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
  strength += 1;
  addCheck(specialChar);
} else {
  removeCheck(specialChar);
}

// check if password is greater than 7
if (password.length > 7) {
  strength += 1;
  addCheck(eightChar);
} else {
  removeCheck(eightChar);
}

// Update the progress bar
// passwordStrength.classList.remove(
//   "pb-danger",
//   "pb-warning",
//   "pb-primary",
//   "pb - success"
// );

if (strength == 1) {
  removePasswordStrength();
  passwordStrength.classList.add("pb-danger");
  passwordStrength.style = "width:25%";
} else if (strength == 2) {
  removePasswordStrength();
  passwordStrength.classList.add("pb-warning");
  passwordStrength.style = "width:50%";
} else if (strength == 3) {
  removePasswordStrength();
  passwordStrength.classList.add("pb-primary");
  passwordStrength.style = "width:75%";
} else if (strength == 4) {
  removePasswordStrength();
  passwordStrength.classList.add("pb-success");
  passwordStrength.style = "width:100%";
}

}
// remove password strength classes
function removePasswordStrength() {
  passwordStrength.classList.remove(
    "pb-warning",
    "pb-primary",
    "pb-success",
    "pb-danger"
  );
}

// Add check icon
function addCheck(charRequired) {
  charRequired.classList.remove("fa-circle");
  charRequired.classList.add("fa-check");
}

// remove check icon
function removeCheck(charRequired) {
  charRequired.classList.remove("fa-check");
  charRequired.classList.add("fa-circle");
}
