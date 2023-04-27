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
}

// active menu switcher
// select the list
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => { 
  const navLink = e.target.parentElement;

  if (navLink.classList.contains("link")) {
    // remove active class from the list
    navList.querySelector(".active").classList.remove("active");
    // add the active class to the current list that is clicked
    navLink.classList.add("active");
  }
 })