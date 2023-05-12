import * as v from "./js/variables.js";
import { getUser, errorMessage } from "./js/functions.js";

// add event listener to the form
v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let user = v.search.value;
  let user = v.search.value.split(" ").join("");
  // let user = v.search.value.replace(/\s+/g, "");
  // alert(user);

  if (user === "") {
    // errorMessage("Input cannot be blank");
    console.log("blank");
  } else {
    getUser(user);
    v.form.reset();
    // v.search.value = "";
  }
});
 
