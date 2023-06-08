// get modal, input, button and close
const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const closeEl = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openPopup);
// closeEl.addEventListener("click", closePopup);

// openPopup function
function openPopup(e) {
  e.preventDefault();
  //   console.log(input.value);
  modal.style.display = "block";
  startCountdown();
}

// closePopup function
function closePopup(e) {
  e.preventDefault();
  //   console.log(input.value);
  modal.style.display = "none";
}

// close modal when clicked anywhere in the screen
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// counter function
let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountdown() {
  let downloadTimer = setInterval(() => {
    progressBar.value = 10 - --reverseCounter;

    if (reverseCounter <= -1) {
      clearInterval(downloadTimer);
      closePopup();
      window.open(input.value, "_blank");
    }
    counting.innerHTML = reverseCounter;
  }, 1000);
  reverseCounter = 10;
}
