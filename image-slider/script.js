const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll = true;
let slideInterval;
let intervalTime = 5000;

// Next button
const nextSlide = () => {
  // remove the current class
  const current = document.querySelector(".current");
  current.classList.remove("current");
  // add the current class to the next sibling
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  current.classList.remove("current");
};

// Previous button
const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  current.classList.remove("current");
};
// autoscroll
if (autoScroll) {
  function auto() {
    // clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}

auto();

// Add Event listeners
next.addEventListener("click", () => {
  nextSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (autoScroll) {
    clearInterval(slideInterval);
    auto();
  }
});
