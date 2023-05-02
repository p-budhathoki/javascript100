// select submit button result and reset button
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

// add event listener to calculate button

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  // prevent default behavior
  e.preventDefault();

  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  console.log(height, weight);

  // validate the input value
  if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Please provide a valid height value");
  } else if (weight === "" || isNaN(weight)) {
    return (result.innerHTML = "Please provide a valid weight value");
  } else {
    height = height / 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);
    // console.log(bmi);

    // categorize the results
    if (bmi < 18.5) {
      showResult(`Underweight : <span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      showResult(`Normal : <span>${bmi}</span>`, "green");
    } else if (bmi > 24.9 && bmi <= 29.9) {
      showResult(`Overweight : <span>${bmi}</span>`, "blue");
    } else {
      showResult(`Obese : <span>${bmi}</span>`, "red");
    }
  }
  result.style.display = "block";
  reset.style.display = "block";
}

function showResult(val, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = val);
}
// add event listener to the reset button
reset.addEventListener("click", () => {
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
});
