// select textarea - input, h3>span - character, h3>span - word, h3>span - readingTime, h3>span - word limit

let input = document.querySelector(".input");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let readingTime = document.querySelector(".reading-time");
let wordLimit = document.querySelector(".word-limit");
const WORD_LIMIT = 10;

// add event listener to count the characters and words
input.addEventListener("keyup", characterCounter);
input.addEventListener("keyup", wordCounter);

function characterCounter() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if (words) {
    // total words count
    word.innerHTML = words.length;
    // words left
    wordLimit.innerHTML = WORD_LIMIT - words.length;
  } else {
    word.innerHTML = 0;
  }

  // word limit block of code
  input.addEventListener("keydown", function (e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
        // prevent default behavior of textarea
        e.preventDefault();
      }
    }
  });

  // Reading time based on 225 words per minute
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + "m" + seconds + "s";
    } else {
      readingTime.innerHTML = seconds + "s";
    }
  } else {
    readingTime.innerHTML = "0";
  }
}
