//  get button, input, textarea and delete all button
const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.querySelector(".clear");

// get the note from local storage
function getNotes() {
  // getItem() method returns the value of the specified Storage Object item. getItem() method is used to read data from local storage
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    // if notes does not exist, create it as an empty array
    noteObj = [];
  } else {
    // convert the notes inside the local storage(string) to object
    noteObj = JSON.parse(notes);
  }
}

//  add event listener to the add note button
noteBtn.addEventListener("click", (e) => {
  // prevent the default behavior of page refresh when the button is clicked
  e.preventDefault();

  // check if the user has entered anything in the input fields(note title, note text)
  if (noteTitle.value == "" || noteText.value == "") {
    return alert("Please add note title and details");
  }

  // get note from local storage
  getNotes(); // we get noteObj array from localStorage

  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  };

  // push myObj to the noteObj array
  noteObj.push(myObj);

  // save the noteObj back to the local storage as "notes", it has to be saved as string
  localStorage.setItem("notes", JSON.stringify(noteObj));

  // clear the form
  document.querySelector("form").reset();

  // display notes in the browser
  showNotes();
});

// display notes in the browser
function showNotes() {
  // get the notes from local storage
  getNotes();

  let html = "";
  noteObj.forEach(function (element, index) {
    html += `
      <div class="note">
                <div class="note-cta">
                  <p class="note-counter">Note ${index + 1}</p>
                  <div class="note-cta-btn">
                    <button id = "${index}" onclick="deleteNote(this.id)" class="note-btn">
                      <i class="fas fa-trash"></i>Delete
                    </button>
                    <button id = "${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
                      <i class="fas fa-edit">Edit</i>
                    </button>
                  </div>
                </div>
                <hr />
                <h3 class="note-title">Title: ${element.title} </h3>
                <p class="note-text">${element.text} </p>
              </div>
        `;
  });

  let noteElm = document.getElementById("notes");

  if (noteObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added. Please add notes.";
  }
}

// Delete a single note
function deleteNote(index) {
  let confirmDel = confirm("Are you sure you want to delete");

  if (confirmDel) {
    getNotes();
    // index represents the index of the note to be deleted and 1 indicates how many notes to delete
    noteObj.splice(index, 1);

    // save data to local storage after the completion of note deletion
    localStorage.setItem("notes", JSON.stringify(noteObj));

    // display updated notes on the screen
    showNotes();
  }
}

// delete all notes

clear.addEventListener("click", () => {
  localStorage.clear();
  showNotes();
});

// Edit notes

function editNote(index) {
  if (noteTitle.value !== "" || noteText.value !== "") {
    return alert("Please clear the form before editing");
  }
  getNotes();

  noteTitle.value = noteObj[index].title;
  noteTitle.value = noteObj[index].text;

  // index represents teh index of the note to be deleted and number 1 is the number of notes to be deleted
  noteObj.splice(index, 1);

  // after the deletion save the note in localStorage
  localStorage.setItem("notes", JSON.stringify(noteObj));

  // display the note in the browser
  showNotes();
}

showNotes();
