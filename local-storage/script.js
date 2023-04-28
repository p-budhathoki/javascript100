console.log(window);

console.log(Object.getOwnPropertyNames(window));
// 671 : "sessionStorage"
// 672 : "localStorage"

// Local Storage Methods
// setItem() : Add key and value to localStorage;
// getItem() : This is how you get items from localStorage
// removeItem() : Remove an item by key from localStorage
// clear() : Clear all localStorage
// key() : Passed a number to retrieve the key of a localStorage

// store name and surname as key value pairs in localStorage;
// window.localStorage.setItem("key", "value");

window.localStorage.setItem("firstName", "Patrick");
window.localStorage.setItem("lastName", "Budhathoki");

const person = {
  fullName: "Patrick Budhathoki",
  location: "Sydney",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pear", "Apple", "Grapes", "Banana", "Strawberry", "Blueberry"];

localStorage.setItem("fruit", JSON.stringify(fruits));

// get items from localStorage
console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("user"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("fruit"));

// remove items from local Storage
// localStorage.removeItem("key");
// localStorage.removeItem("user");

// clear local storage
// localStorage.clear()

console.log("Local Storage Value : ", localStorage.key(0))
