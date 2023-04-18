// get input, button and paragraph elements
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// add event listener to the button
btn.addEventListener("click", countVowels);

function countVowels() {
  let vowelCount = 0;
  // access the value of the variable word
  let wordVal = word.value.toLowerCase();
  // alert(wordVal)

  // loop through the input value
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    let vowelAlphabet = [];

    // if match found, increase vowelCount

    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
      vowelAlphabet = vowelAlphabet.push(letter);
      result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
    }
  }
  //   result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels ${vowelAlphabet}`;
}
