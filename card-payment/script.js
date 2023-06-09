// select input(#number), input(#valid), input(#ccv)
const cardNumber = document.querySelector("#number");
const cardValidity = document.querySelector("#valid");
const cardCcv = document.querySelector("#ccv");

cardNumber.addEventListener("input", formatCardNumber);
cardValidity.addEventListener("input", formatCardValidity);
cardCcv.addEventListener("input", formatCcv);

function formatCardNumber(e) {
  cardNumber.maxLength = "19"; // includes 16 digits and 3 spaces

  // replace the A-Z, a-z characters with nothing, /(.{4})/g,"$1 " adds 1 space after four digits
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  if (cardNumber.value.length == 19) {
    formatCardValidity();
  }
}

// Format Validity
function formatCardValidity(e) {
  cardValidity.focus();
  cardValidity.maxLength = "5";

  if (cardValidity.value.length < 5) {
    cardValidity.value = cardValidity.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/[^\da-z]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();
  }
  if (cardValidity.value.length == 5) {
    formatCcv();
  }
}

// format ccv

function formatCcv() {
  cardCcv.focus();
  cardCcv.maxLength = "3";
  cardCcv.value = cardCcv.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
}
