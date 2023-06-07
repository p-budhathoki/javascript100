//  select form, textarea, speech-btn div, mic button, paragraph, mic button
const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const instruction = document.querySelector(".instruction");
const micBtn = document.querySelector(".btn .fas");

// access speechSynthesis
const speechSynthesis = window.speechSynthesis;

// check for browser support
if (speechSynthesis) {
  console.log("Speech Synthesis is supported");

  micBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = input.value;

    // create a new speechSynthesis request
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = inputValue;
    speech.volume = "1";
    speech.rate = "1";
    speech.pitch = "1";
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log("Speech Synthesis is not supported");
  // hide the instruction div and the mic button
  speechBtnDiv.style.visibility = "hidden";
}
