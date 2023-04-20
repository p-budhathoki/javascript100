// get image, paragraph and main element
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

// create a function to set the background color
function setColor() {
  bgColor.classList.add("online");
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime().toExponential
    );
    image.src = "../images/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.log(error);
    statusDisplay.textContent =
      "OOPS!! Your internet connection is down. Please try again later.";
    image.src = "../images/offline.png";
    bgColor.classList.remove("online");
  }
}

// Monitor the connection status
setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You are ONLINE, Connection looks good";
    setColor();
  } else {
  }
}, 5000);

// Check connection when the page loads
window.addEventListener("load", async () => {
  if (connectionStatus()) {
    statusDisplay.textContent = "You are ONLINE";
  } else {
    statusDisplay.textContent = "You are OFFLINE";
  }
});
