// select button and add event listener

const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
// select input
const number = document.getElementById("number");
// const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert("Please enter a number");
  } else {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = shuffle(data);
        // console.log(JSON.stringify(data));
        let output = "";

        // response.forEach(function (data) {
        //   output += `
        //     <li>Quote : ${data.text}</li>
        //     <li>Author : ${data.author}</li>
        //     <hr />
        //     `;
        // });
        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
                <li>Quote: ${data[i].text}</li>
                <li>Author: ${data[i].author}</li>
               <hr>
           `;
        }
        document.querySelector(".quotes").innerHTML = output;
      });
  }
}

// function to shuffle the quotes
function shuffle(quotes) {
  let currentIndex = quotes.length;
  let tempValue, randomIndex;

  // while element exists in the array
  while (currentIndex > 0) {
    // generate random index
    randomIndex = Math.floor(Math.random() * currentIndex);
    // decrease the currentIndex by 1
    currentIndex--;

    // swap the last element with currentIndex
    tempValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
