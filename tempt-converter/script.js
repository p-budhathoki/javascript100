// --Convert Celsius to--
// fahrenheit = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert fahrenheit to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Convert Kelvin to --
// fahrenheit = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

// get the input temperature
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");
const form = document.querySelector("form");

// add event listener to the form
form.addEventListener("input", convertTemperature);

function convertTemperature(e) {
  if (e.target.classList.contains("celsius")) {
    let x = e.target.value;
    fahrenheit.value = (x * 1.8 + 32).toFixed(2);
    kelvin.value = (x + 273.15).toFixed(2);
  }
  if (e.target.classList.contains("fahrenheit")) {
    let x = e.target.value;
    celsius.value = ((x - 32) / 1.8).toFixed(2);
    kelvin.value = ((x - 32) / 1.8 + 273.15).toFixed(2);
  }
  if (e.target.classList.contains("kelvin")) {
    let x = e.target.value;
    fahrenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
    celsius.value = (parseFloat(x) - 273.15).toFixed(2);
  }
}
