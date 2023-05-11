// select accordion class
const acc = document.querySelectorAll(".accordion");

// loop through all the accordion classes
for (let i = 0; i < acc.length; i++) {
  // add event listeners to the accordion and toggle the active class
  //   this.classList.toggle("active");
  acc[i].addEventListener("click", function () {
    // select the next sibling of accordion and description class
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordion active");

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      for (let i = 0; i < activeAcc.length; i++) {
        activeAcc[i].classList.remove("active");
      }
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.toggle("active");
    }
  });
}
