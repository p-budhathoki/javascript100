const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

// loop through the buttons and add event listener
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    // get the class by the name of active
    const current = document.getElementsByClassName("active");
    //   replace the active class with blank
    //   current[0].classList.remove("active");
    current[0].className = current[0].className.replace(" active", "");
    //   apply the active class to the current element
    this.className += " active";

    //   Switch tab content
    const filter = e.target.dataset.filter;
    console.log(filter);

    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

// search filter
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
const noResult = document.querySelector(".no-result");

// add event listener
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();

  productName.forEach((product) => {
    const item = product.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
      noResult.style.display = "none";
    } else {
      product.parentElement.parentElement.style.display = "none";
      noResult.style.display = "block";
    }
  });
}
