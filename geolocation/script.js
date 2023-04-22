const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

// add event listener
btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br />
    Longitude: ${position.coords.longitude}
    `;
}
