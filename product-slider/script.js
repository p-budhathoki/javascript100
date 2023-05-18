const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;

    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

prevBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;

    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

// Slider width values
function sw() {
  alert("Slider width(Total width) : " + slider.scrollWidth);
}
function sl() {
  alert("Scroll Left : " + slider.scrollLeft);
}
function cw() {
  alert("Client width : " + slider.clientWidth);
}
function calc() {
  alert(
    "Slider width - Client Width  : " +
      (slider.scrollWidth - slider.clientWidth)
  );
}

// Auto Play Function
function autoPlay() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

// pause the slide on hover
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnails[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 10));
  });
}
