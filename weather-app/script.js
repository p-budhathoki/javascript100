const api = {
  key: "120457b125cf54e45e68447d52f4c909",
  base: "https://api.openweathermap.org/data/2.5/",
};

// get input, button
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

// add event listener
btn.addEventListener("click", getInput);

// get input function
function getInput(event) {
  event.preventDefault();

  // incase of click event get the data
  if (event.type == "click") {
    getData(search.value);
    console.log(search.value);
  }
}

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then(displayData);
}

function displayData(response) {
  console.log(response);
  if (response.cod === "404") {
    const error = document.querySelector(".error");
    error.textContent = "Please enter a Vaid City";
    search.value = "";
  } else {
    const city = document.querySelector(".city");
    city.innerText = `${response.name}, ${response.sys.country}`;

    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFunction(today);

    const temp = document.querySelector(".temp");
    temp.innerHTML = `Temp : ${Math.round(response.main.temp)} <span>°C</span>`;

    const weather = document.querySelector(".weather");
    weather.innerText = `Weather : ${response.weather[0].main}`;

    const tempRange = document.querySelector(".temp-range");
    tempRange.innerText = `Temp Range : ${Math.round(
      response.main.temp_min
    )}°C / ${Math.round(response.main.temp_max)}°C`;

    const weatherIcon = document.querySelector(".weather-icon");
    const iconUrl = "http://openweathermap.org/img/w/";
    weatherIcon.src = iconUrl + response.weather[0].icon + ".png";

    search.value = "";
  }
}

function dateFunction(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date}, ${month},${year}`;
}
