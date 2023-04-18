// get button and result
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// add event listener to the button element
btn.addEventListener("click", palindrome);

// function to handle palindrome
function palindrome() {
  // store the input in the constant variable word
  const word = document.querySelector(".input-text").value;
  // get the length of the input
  let len = word.length;

  // extract the first two words from the input 0 is the first alphabet and Math.floor(len/2) is the end value which is not inclusive when extracting the alphabet. floor rounds the number to the lowest whole number
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  // alert(start);
  // extract the last two words from the input
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  // alert(end);
  // flip the end value by splitting it first and then reverse it
    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");
    // alert(flip);

    // compare the start value and the flip value to see if they are the same
    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`
        
    }
}
