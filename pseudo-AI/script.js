// select form and the search input field
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// select div containing p and button, mic button and instruction
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const speechSynthesis = window.speechSynthesis;
// create global speech recognition object
const recognition = new speechRecognition();

// check if speech recognition and speech synthesis is supported in the browser
if (speechRecognition && speechSynthesis) {
  console.log("Speech Recognition and Speech Synthesis supported.");

  // add event listener to the mic button
  micBtn.addEventListener("click", micBtnClicked);

  function micBtnClicked(e) {
    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  // start speech recognition
  recognition.addEventListener("start", () => {
    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");
    instruction.textContent = "Recording... Press Ctrl + m to stop.";
    searchInput.focus();
    console.log("Speech Recognition Started");
  });

  // stop speech recognition
  recognition.addEventListener("end", () => {
    // micBtn.classList.remove("fa-microphone-slash");
    // micBtn.classList.add("fa-microphone");
    micBtn.classList.replace("fa-microphone-slash", "fa-microphone");
    instruction.textContent = "Press Ctrl + x or Click the Mic icon to start.";
    searchForm.focus();
    console.log("Speech Recognition Ended");
  });

    recognition.continuous = true;
    
//   const recognitionOn = setInterval(() => {
//     if (instruction.textContent.includes("start")) {
//       recognition.start();
//     }
//   }, 3000);
    
  // Keyboard shortcuts for speech recognition
  speechRecognitionKeys();
  loadTranscript();
} else {
  console.log("Speech Recognition and Speech Synthesis NOT supported.");
  //   hide the button and instruction
  speechBtnDiv.style.visibility = "hidden";
}

// shortcut keys for speech recognition function
function speechRecognitionKeys() {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "x") {
      recognition.start();
    }
    if (e.ctrlKey && e.key === "m") {
      recognition.stop();
    }
  });
}

// loadTranscript function for speech recognition
function loadTranscript() {
  recognition.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    showTranscript(transcript);

    // loop through the list array
    for (let i = 0; i < lists.length; i++) {
      console.log(lists[i].question);

      let askedQuestion = transcript.toLowerCase().trim();
      if (askedQuestion.includes(lists[i].question)) {
        console.log(askedQuestion);
        console.log(lists[i].answer);
        respond(lists[i].answer);
        break;
      }
      if (
        askedQuestion.startswith("what is", 0) &&
        askedQuestion !== lists[i].question &&
        (i = 1)
      ) {
        console.log("No match");
        let errorMsg =
          "Apologies, I do not have enough data to answer this question at this time.";
        respond(errorMsg);
        break;
      }
    }
  });
}

// Handle Response
function respond(res) {
  let voices = window.speechSynthesis.getVoices();
  console.log(voices);
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = res;
  speech.volume = "1";
  speech.rate = "1";
  speech.pitch = "1";
  speech.voice = speechSynthesis.speak(speech);
  if (voices) {
    speech.voice = voices[20];
  } else {
    speech.voice = voices[1];
  }
  window.speechSynthesis.speak(speak);
}

// Show Transcript
function showTranscript(transcript) {
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
}
