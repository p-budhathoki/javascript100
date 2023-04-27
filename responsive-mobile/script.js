// select the links
const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// mobile responsive menu
// select the navigation links, hamburger menu and close button
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
/*
const showMenu = () => {
  // hide hamburger when clicked
  hamburger.style.display = "none";
  // show close icon
  close.style.transform = "translateY(0)";
  // show menu
  menu.style.transform = "translateY(0)";
};
const hideMenu = () => {
  // hide close button when clicked
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  // hide menu close icon
  menu.style.transform = "translateY(-200%)";
};
*/

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};
const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
  submenuThree.style.transform = "translateX(-100%)";
  
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

// submenu section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const submenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
  submenuThree.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  submenuThree.style.transform = "translateX(-100%)";
});
