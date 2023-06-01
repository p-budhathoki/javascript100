const apiURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280";

let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let input = document.querySelector(".search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
  displayMovies(data.results);
}
getMovies(apiURL);

// Display Movies
function displayMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {
    // create a new div element
    const div = document.createElement("div");
    // append the movie class to the div
    div.classList.add("movie");

    //   add the contents to the movie div
    div.innerHTML = `
      <img src="${imgPATH + movie.poster_path}" alt="" />
          <div class="details">
              <h2 class="title">${movie.title}</h2>
              <p class="rate">Rating : 
                <span class="rating">${movie.vote_average.toFixed(2)}</span>
              </p>
              <p class="overview">
                ${movie.overview}
              </p>
            </div> 
      `;
    moviesDiv.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = "";

  const inputVal = input.value;

  if (inputVal) {
    getMovies(searchAPI + inputVal);
    input.value = "";
  }
});
