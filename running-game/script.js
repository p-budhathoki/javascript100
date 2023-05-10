// select hero, hero-boy and vilian
const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const vilian = document.querySelector(".vilian");

const jump = () => {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    vilian.style.animation = "move 1s infinite linear";
  }

  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
};

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    jump();
  }
});

let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));

  let vilianLeft = parseInt(
    window.getComputedStyle(vilian).getPropertyValue("left")
  );

  if (vilianLeft < 40 && vilianLeft > 20 && heroTop >= 130) {
    vilian.style.animation = "none";
    alert("Game Over!. Press spacebar to continue");
  }
}, 10);
