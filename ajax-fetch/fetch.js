// load all users
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

// create function getUsers
function getUsers(e) {
  e.preventDefault();

  fetch("users.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `
              <hr>
              <ul>
              <li>Id : ${user.id}</li>
              <li>Name : ${user.name}</li>
              <li>Age : ${user.age}</li>
              <li>Email : ${user.email}</li>
              </ul>
              `;
      });
      document.getElementById("users").innerHTML = output;
    });
}
