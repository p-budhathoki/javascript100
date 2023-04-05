// select buttons
const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

// add event listeners for three buttons
// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

// event delegation : you can add just one event listener to the parent element instead of multiple event listeners to child elements

const buttons = document.querySelector(".buttons");

// event delegation : you can add just one event listener to the parent element instead of multiple event listeners to child elements
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML -= 1;
    setColor();
  } else {
    count.innerHTML = 0;
    setColor();
  }
});

// set color of the output based on its current value : orangered for negative, yellow for positive and white for reset
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "whitesmoke";
  }
}
