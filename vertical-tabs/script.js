// select tab links and tab contents
const tabLinks = document.getElementsByClassName("tab-link");
const allContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabLinks.length; i++) {
  // get the current tab link button and add event listener
  tabLinks[i].addEventListener("click", function (e) {
    // select the active tab link
    const current = document.getElementsByClassName("active");
    // remove the active class
    current[0].className = current[0].className.replace(" active", "");
    //   set the active class to this element
    this.className = " active";

    // switch content
    const filter = e.target.dataset.filter;
    console.log(filter);

    allContent.forEach((content) => {
      if (content.classList.contains(filter)) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
    // allContent.forEach((content) => {
    //   if (content.classList.contains(filter)) {
    //     content.style.display = "block";
    //   } else {
    //     content.style.display = "none";
    //   }
    // });
  });
}
