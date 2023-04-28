// variables
const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "01234567890",
  symbol = "!@#$%^&*()_+";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

// add event listener
submit.addEventListener("click", () => {
  // set initial password
  let initialPassword = empty;

  // add character if an option is selected
  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
  let pass = "";

  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

// copy function
copy.addEventListener("click", () => {
  if (password.value === "") {
    alert("Please Generate a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard");
  }
});
