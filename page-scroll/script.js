// sticky header
window.addEventListener("scroll", () => {
  // get the header
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY);
});
