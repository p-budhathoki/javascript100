// select button and paragraph elements
const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

// function to calculate tip
const calculateTip = () => {
  // get select and input fields
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  const hideError = () => {
    setTimeout(() => {
      error.style.display = "none";
    }, 5000);
  };

  if (bill === "") {
    // console.log("Please enter a bill amount");
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip Amount : ${tipAmt}`;

    let totalBill = Number(bill) + tipAmt;
    total.innerHTML = `Total Amount : ${totalBill}`;
  }
};

// add event listener
btn.addEventListener("click", calculateTip);
