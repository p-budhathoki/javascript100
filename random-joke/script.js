// get the joke class, button and url

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

// add event listener to the button
btn.addEventListener("click", getJoke);

function getJoke() {
  // fetch() method starts the process of fetching a resource from a server and returns a promise that resolves to a Response object
  fetch(url)
    //   access the response
    .then((response) => {
      return response.json();
    })
    //   access and log the data
    .then((data) => {
      console.log(data);
      joke.innerHTML = data.value.joke;
    });
}

// async await
async function getJokesAsync() {
  try {
    const responseAsync = await fetch(url);
    const dataAsync = await responseAsync.json();
    //   console.log(dataAsync);
    joke.innerHTML = data.value.joke;
  } catch (error) {
    joke.innerHTML = error.message;
  }
}
