// select typed word and the cursor
const typedWord = document.querySelector(".type-word");
const cursor = document.querySelector(".cursor");

const wordArray = ["Web Developer", "Product Designer", "Developer Advocate"];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

// typing function
function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay);
  }
}

// erase typing function

function erase() {
  if (letterIndex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    typedWord.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});

// type();
// wordArray.forEach((word, index) => {
//   console.log(`${index} => ${word}`);
// });

// const word = "Developer";
// const result = word.charAt(0);
// console.log(result);

// const word = "Developer";
// const result = word.substring(0, 3);
// console.log(result);

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style.display = "none";
})