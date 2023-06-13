(function () {
  // target all of the list items
  const items = document.querySelectorAll(".timeline li");

  // check if any of the item is in viewport
  function isElementInViewport(e) {
    // provides size and position of dom element based on the viewport
    let rect = e.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();
