// select input, button, ordered list and clear button
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

// add list item
const addTask = (e) => {
  e.preventDefault();
  // create list item inside the ordered list and a button inside it
  const newLi = document.createElement("li");
  const delBtn = document.createElement("button");

  // insert delete icon into button inside the list item
  delBtn.innerHTML = '<i class=" fas fa-trash-alt"></i>';

  if (input.value !== "") {
    // set the value inside the list item as the input value
    newLi.textContent = input.value;
    // add the delete icon to the list item
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
    input.value = "";
  } else {
    alert("Please enter a task");
  }

  // delete function
  delBtn.addEventListener("click", () => {
    const del = confirm("Are you sure you want to delete this task?");
    if (del == true) {
      const parent = this.ParentNode;
      parent.remove();
    }
  });
};

// btn.addEventListener("click", () => {
//   document.querySelector(".add-item").classList.add("button-click");
// });
btn.addEventListener("click", addTask);

clear.addEventListener("click", () => {
  todoList.innerHTML = "";
});
