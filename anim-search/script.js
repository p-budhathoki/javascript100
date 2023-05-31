// select search icon, close icon, search div and input field
const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

// add event listener to the search icon
searchIcon.addEventListener("click", () => {
  // slide down the search icon
  searchIcon.style.transform = "translateY(200%)";
  // display the close icon
  closeIcon.style.transform = "translateY(0)";

  // show the search input field
  showSearchEl();
});

// add event listener to the close icon
closeIcon.addEventListener("click", () => {
  // set search icon in original position
  searchIcon.style.transform = "translateY(0%)";
  // hide the close icon
    closeIcon.style.transform = "translateY(-200%)";
    hideSearchEl();
});

function showSearchEl() {
  // slide in the search input from translateX(200) to translateX(0)
  searchEl.style.transform = "translateX(0)";

  // increase the width of the search input
  setTimeout(() => {
    searchEl.style.width = "30rem";
  }, 1000);

  setTimeout(() => {
    searchInput.setAttribute("placeholder", "Search...");
  }, 2000);
}
function hideSearchEl() {
  // slide in the search input from translateX(200) to translateX(0)
//   searchEl.style.transform = "translateX(0)";

  // increase the width of the search input
  //   Remove the placeholder from the search input
  searchEl.setAttribute("placeholder", "");

  // set the width of the search input back to the original value
  setTimeout(() => {
    searchEl.style.width = "4.5rem";
  }, 1000);

  // let the search input disappear from the page
  setTimeout(() => {
    searchEl.style.transform = "translateX(200%)";
  }, 2000);
}
