// select input(username), input(date of birth), button(submit),  paragraph(Show Name)
const username = document.querySelector("#username");
const dob = document.querySelector("#dob");
const btn = document.querySelector(".btn");
const showName = document.querySelector(".u-name");
const months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

btn.addEventListener("click", calculateAge);

function calculateAge(e) {
  e.preventDefault();
  let today = new Date();
  let dobInput = new Date(dob.value);
  let birthMonth, birthDate, birthYear;

  // user input
  let birthDetails = {
    date: dobInput.getDate(),
    month: dobInput.getMonth() + 1,
    year: dobInput.getFullYear(),
  };

  // current date
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

    // throw error when
    // current year is lower than the birth year of the user or 
    // when birth month is greater than the current month and birth year is equal to current year or 
    // birth date is greater than current date and birth month is equal to current month and birth year is equal to the current year
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Invalid birth date");
    return;
  }

  birthYear = currentYear - birthDetails.year;

  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
    showName.textContent = username.value;
    document.querySelector(".age-year").textContent = bYear + " Years";
    document.querySelector(".age-month").textContent = bMonth + " Months";
    document.querySelector(".age-day").textContent = bDate + " Day";
}
