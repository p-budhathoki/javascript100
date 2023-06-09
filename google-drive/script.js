// select input, button and textarea
const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const embedAudio = document.getElementById("embed-audio");
const embedVideo = document.getElementById("embed-video");
const clear = document.querySelector(".clear");

// add event listener to the button
btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();

  // store the contents of input element
  const glinkValue = document.getElementById("glink").value;

  const confirmLink = glink.value.includes("https://drive.google.com/file/d/");

  if (confirmLink == true) {
    const getDownloadLink = glink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");
    downloadLink.value = getDownloadLink;

    function copyText(target) {
      if (target.value == "") {
        alert("Please generate a download link");
      } else {
        // target.select();
        // document.execCommand("copy");
        navigator.clipboard.writeText(target.value).then(() => {
          alert("Link has been copied to clipboard");
        });
      }
    }
    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });

    // embed audio
    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';
    const embedAudio = document.getElementById("embed-audio");
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

    // copy audio embed code
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    // embed video
    const getVideoLink = glink.value.replace("/view?usp=sharing", "");
    const video1 = '<iframe src ="';
    const video2 = '/preview" width ="560"height="315"></iframe>';

    const embedVideo = document.getElementById("embed-video");
    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please enter a Google Drive link");
  }
}

clear.addEventListener("click", clearform);
function clearform(e) {
  e.preventDefault();
  glink.value = "";
  downloadLink.value = "";
  embedAudio.value = "";
  embedVideo.value = "";
}

/*

            <!-- Audio File -->
            <audio width="300" height="32" controls="controls" src="https://drive.google.com/uc?export=download&id=1pXFlodHkB3tVl1YM-9v5g9ngCwNTaKMG" type="audio/mp3"></audio>

            <a href="https://drive.google.com/uc?export=download&id=1pXFlodHkB3tVl1YM-9v5g9ngCwNTaKMG">Download</a>
            <br><hr>
            <p>Document: Getting Started</p>

            <!-- Embed Document -->

            <iframe src="https://drive.google.com/file/d/11bfE1ZfE9d1-3F9SuvHKw4ac3GzNcWos/preview" width="560" height="315"></iframe>
            <br><hr>
            <p>Video Title: Web Demo</p>
            <!-- Embed Video --></hr>
            

*/
