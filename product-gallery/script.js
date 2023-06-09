// select large image and small images
const imgLarge = document.getElementById("large-img");
const productImages = document.querySelectorAll(".img-small img");

console.log(productImages);

productImages.forEach((image) => {
  // add event listener and get the source attribute of the image
  image.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src");
    // replace the large image with the new image src attribute
    imgLarge.src = src;
  });
});
// const imgLarge = document.getElementById("large-img");
// const productImages = document.querySelectorAll(".img-small img");

// console.log(productImages.length);

// productImages.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     let src = e.target.getAttribute("src");
//     imgLarge.src = src;
//   });
// });