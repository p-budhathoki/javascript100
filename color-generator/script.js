// get span containing hex class and the generate button
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

// function to generate hex value
const generateColor = () => {
  // generate a random number
  //   const randomColor = Math.random();
  // convert the number to a string as the color value is string
  // parameter 16 is the value from 0 to 9 and alphabets a to f
  // substring(start, end) end is exclusive value
  randomColor = Math.random().toString(16).substring(2, 8);
  console.log(randomColor);
  // apply the color to the background
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

// add event listener to the button
btn.addEventListener("click", generateColor);
// generate random color on each page load
generateColor();
