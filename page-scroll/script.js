// sticky header
window.addEventListener("scroll", () => {
  // get the header
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY);
});

// scroll progress bar
window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
  
  // newsletter js
  const newsLetter = document.querySelector(".newsletter");

if (scrollPercentage > 80) {
  newsLetter.style.transform = "translateX(0)";
} else {
  newsLetter.style.transform = "translateX(-100%)";
}

document.querySelector(".fa-times").addEventListener("click", () => {
  newsLetter.style.transform = "translateX(-100%)";
});

}