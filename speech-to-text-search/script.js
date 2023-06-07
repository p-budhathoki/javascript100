//  select form, textarea, speech-btn div, mic button, paragraph, mic button
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const instruction = document.querySelector(".instruction");
const micBtn = document.querySelector(".btn .fas");

// access SpeechRecognition
const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// check for browser support
if (speechRecognition) {
  console.log("Speech Recognition is supported");

  const recognition = new speechRecognition();

  micBtn.addEventListener("click", micBtnClicked);

  function micBtnClicked(e) {
    e.preventDefault();

    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  // Start speech recognition
  recognition.addEventListener("start", () => {
    // remove mic button and add microphone button with slashes
    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");
    //   add text Recording...
    instruction.textContent = "Recording... Press Ctrl + m to stop.";
    searchInput.focus();
    console.log("Speech Recognition Enabled");
  });

  // Stop speech recognition
  recognition.addEventListener("end", () => {
    // add mic button and remove microphone button with slashes
    micBtn.classList.remove("fa-microphone-slash");
    micBtn.classList.add("fa-microphone");
    //   add text Click the Mic button to start
    instruction.textContent = "Press Ctrl + x or Click the Mic icon to start";
    searchInput.focus();
    console.log("Speech Recognition Disabled");
  });

  // Get the result of Speech Recognition
  recognition.continuous = true;
  let content = "";
  recognition.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === "stop recording") {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === "search") {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === "reset form") {
        searchInput.value = "";
      } else {
        searchInput.value = transcript;
      }
    }
  });

  // Add keyboard Event Listener
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "x") {
      recognition.start();
    }
    if (e.ctrlKey && e.key === "m") {
      recognition.stop();
    }
  });
} else {
  console.log("Speech Recognition is not supported");
  // hide the instruction div and the mic button
  speechBtnDiv.style.visibility = "hidden";
}
