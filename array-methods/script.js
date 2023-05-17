// array method - every
// - true if all elements pass the test, otherwise false
// - the every() method executes a function for each array element
// - the every() method returns true if the function returns true for all elements
// - the every() method returns false if the function returns false for one elements
// - the every() method does not execute the function for empty elements
// - the every() method does not change the original array

const ages = [16, 18, 14, 34, 33, 12];
const ages1 = [34, 33];

const result = ages.every(isAdult);
const result1 = ages1.every(isAdult1);

function isAdult(age) {
  return age >= 18;
}
function isAdult1(age) {
  return age >= 18;
}

console.log(result); // returns false
console.log(result1); // returns true

// forEach
// - the forEach() method calls a function for each element in an array
// - the forEach() method is not executed for empty elements

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
days.forEach(myFunction);

function myFunction(item, index, arr) {
  // console.log(item);
}

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
months.forEach((item, index) => {
  // console.log(item);
  console.log(`Month ${index} = ${item}`);
});

const numbers = [65, 44, 12, 4, 45, 8];
let sum = 0;

numbers.forEach((item) => {
  sum = sum + item;
});
console.log(sum);

// includes
// - the includes() method returns true if an array contains a specified value
// - the includes() method returns false if the value is not found
// - the includes() method is case sensitive
// - array.includes(element, start) // default position is 0 for start

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const results = fruits.includes("Banana2");

if (results) {
  console.log("The array contains Banana. " + "results : " + results);
} else {
  console.log("The array does not contain Banana. " + "results : " + results);
}

// filter
// - the filter() method creates a new array filled with elements that passes a test provided by the function
// - the filter() method returns an array of elements that passes a test provided by the function. Returns an empty array if no elements pass the test
// - the filter() method does not execute the function for empty elements
// - the filter() method does not change the original array

const ages2 = [16, 18, 14, 34, 33, 12];
const results2 = ages2.filter(isAdult);

function isAdult(age) {
  return age >= 18;
}

console.log(results2);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers1.filter((num) => {
  return num % 2 === 0;
});

console.log(even);

// some
// - the some() method checks if an array elements pass a test(provided as a callback function)
// - the some() method executes the callback function once for each array element
// - the some() method returns true(and stops) if the function returns true for one of the array elements
// - the some() method returns false(and stops) if the function returns false for all of the array elements
// - the some() method does not execute the function for empty array elements
// - the some() method does not change the original array
const ages3 = [16, 18, 14, 34, 33, 12];
const result3 = ages3.some(isAdult3);

function isAdult3(age) {
  return age >= 18;
}
console.log(result3);

// concat
// - the concat() method concatenates(joins) two or more arrays
// - the concat() method returns a new array, containing the joined arrays
// - the concat() method does not change the existing array

const letter1 = ["a", "b", "c", "d"];
const letter2 = ["e", "f", "g", "h"];
const number2 = [1, 2, 3];

const result4 = letter1.concat(letter2, number2);
console.log(result4);

// map
// - map() creates a new array from calling a function for every array element
// - map() does not execute the function for empty elements
// - map() does not change the original array

const numbers3 = [1, 2, 3, 4, 5];
const doubled = numbers3.map(doubleNum);

function doubleNum(value) {
  return value * 2;
}
console.log(doubled);

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Austin",
  },
];

const fullName = people.map(
  (person) => `Full Name: ${person.firstName} ${person.lastName}`
);
console.log(fullName);

const fullName2 = people.map((person, index) => ({
  id: index + 1,
  fullName: person.firstName + " " + person.lastName,
}));

console.log(fullName2);

// pop
// - the pop() method removes (pops) the last element of an array
// - the pop() method changes the original array
// - the pop() method returns the removed element

const fruits1 = ["Banana", "Mango", "Orange", "Pear"];
const popped = fruits1.pop();
console.log(fruits1);
console.log(popped);

// push
// - the push() method adds new items to the end of an array
// - the push() method changes the length of the original array
// - the push() method returns the new length

// fruits1.push("Pineapple");
const addFruit = fruits1.push("Pineapple");
console.log(fruits1);
console.log(addFruit); // returns the length of the array

// reverse
// - the reverse() method reverses the order of the elements in an array
// - the reverse() method overwrites the original array

const numbers4 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers4.reverse());

let arr1 = [1, 2, 3, 4];
let arr2 = [];
let count = arr1.length;
for (let i = 0; i < arr1.length; i++) {
  let temp = arr1[count - 1];
  arr2[i] = temp;
  // console.log(temp);
  // arr2[i] = arr2.push(arr1[i]);
  count--;
}
console.log(arr2);

// shift
// - the shift() method removes the first item of an array
// - the shift() method changes the original array
// - the shift() method returns the shifted element
const shft = fruits1.shift();
console.log(shft);

// sort
// - the sort() method sorts the elements of an array
// - the sort() method overwrites the original array
// - the sort() method sorts the elements as strings in alphabetical and ascending order

// compareFunction defines a sort order. The function should return a negative, zero or positive value, depending on the arguments: function(a,b){return a-b}
// When sort compares two values, it sends the values to the compare function, and sorts the values according to the returned(negative, zero or positive) value.

const fruits2 = ["Pineapple", "Banana", "Kiwi fruit", "Dragon fruit", "Grapes"];
fruits2.sort();
console.log(fruits2);

const numbers5 = [40, 100, 1, 5, 25, 10];
console.log(numbers5.sort()); // checks only the first digits for sorting

const result5 = numbers5.sort(compareFunctions); // uses compareFunctions to sort the numbers
console.log(result5);
function compareFunctions(a, b) {
  // return a - b; // ascending order
  return b - a; // descending order
}

// unshift
// - the unshift() method adds new elements to the beginning of an array
// - the unshift() method overwrites the original array

const fruits3 = ["Pineapple", "Banana", "Kiwi fruit", "Dragon fruit", "Grapes"];
const addFruit3 = fruits3.unshift("Mango");
console.log(fruits3);

// find
// - the find() method returns the value of the first element that passes a test
// - the find() method executes a function for each array element
// - the find() method returns undefined if no elements are found
// - the find() method does not execute the function for empty elements
// - the find() method does not change the original array

const ages4 = [3, 10, 11, 20, 32];

function isAdult4(age) {
  return age >= 18;
}

const result6 = ages4.find(isAdult4);
console.log(result6);

const fruits4 = [
  { name: "Pineapple", quantity: 10 },
  { name: "Banana", quantity: 2 },
  { name: "Dragon fruit", quantity: 5 },
  { name: "Mango", quantity: 3 },
];

const result7 = fruits4.find(({ name }) => name === "Pineapple");
console.log(result7);

// findIndex
// - the findIndex() method executes a function for each array element
// - the findIndex() method returns the index(position) of the first element that passes a test
// - the findIndex() method returns -1 if no match is found
// - the findIndex() method does not execute the function for empty array elements
// the findIndex() method does not change the original array

const ages5 = [3, 10, 11, 20, 32];

function isAdult5(age) {
  return age >= 18;
}

const result8 = ages5.findIndex(isAdult5);
console.log(result8);

const ages6 = [3, 10, 11, 12, 2];
function isAdult6(age) {
  return age >= 18;
}
const result9 = ages6.findIndex(isAdult6);
console.log(result9); // -1 for index not found cases

// isArray
const lang = "javascript"
console.log(Array.isArray(lang));

let numbers6 = [1, 2, 3, 4, 5, 6, 7]
console.log(Array.isArray(numbers6));
