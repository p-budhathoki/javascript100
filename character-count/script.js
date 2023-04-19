// select span and input element
const count = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
