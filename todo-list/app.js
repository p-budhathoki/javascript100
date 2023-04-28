window.onload = function () {
  displayTask();
};
// select input, button, ordered list and clear button
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");
let tasks;

btn.addEventListener("click", addTask);

// get task from the local storage
function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    // if no tasks are available in local storage then tasks is an empty array
    tasks = [];
  } else {
    // convert tasks to string
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

function addTask() {
  if (input.value !== "") {
    // add task to the local storage
    addTaskLs();
    //   clear everything before updating the task list
    todoList.innerHTML = "";
    displayTask();
  } else {
    alert("Please enter a task");
  }
}

// save task to the local storage
function addTaskLs() {
  getTasks();

  // add tasks to the local storage using array methods
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}

// Display task on the page
function displayTask() {
  // get the tasks from the local storage
  getTasks();

  // display the task in browser by looping through the tasks
  tasks.forEach((task, index) => {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class='fas fa-trash-alt' id ="${index}" onclick="deleteTask(this.id)"></i>  `;

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

// Delete tasks
function deleteTask(index) {
  const del = confirm("Are you sure you want to delete this task");
  if (del == true) {
    //   get the task from local storage
    getTasks();
  }
  // delete item from the array using splice method
  tasks.splice(index, 1);
  // save local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // clear everything before updating the local storage
  todoList.innerHTML = "";
  // display the tasks in browser
  displayTask();
}

// clear tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
  const deleteTasks = confirm("Are you sure you want to delete all task");

  if (deleteTasks == true) {
    localStorage.clear();
    todoList.innerHTML = "";
    displayTask();
  }
}
