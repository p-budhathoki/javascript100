// get the input and button element
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  // prevent the default behavior - prevent page reload when the button is clicked
  e.preventDefault();
  /*
  // select the coupon
  coupon.select();
  // range to select using start and end value
  // coupon.setSelectionRange(2,5);
  coupon.setSelectionRange(0, coupon.value.length);
  // console.log(coupon.value.length)

  // change the button from Copy to Copied!
  btn.textContent = "Copied!";

  setTimeout(() => {
    // change the button from Copied! to Copy after 3 seconds
    btn.textContent = "Copy";
  }, 3000);
  */
  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy";
      coupon.value = "";
    }, 3000);
  });
};

// add event listener to the button element
btn.addEventListener("click", copyText);
