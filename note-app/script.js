//  get button, input, textarea and delete all button
const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.getElementById(".clear");

// get the note from local storage
function getNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    // if notes does not exist, create it as an empty array
    notesObj = [];
  } else {
    // convert the notes inside the local storage to object
    noteObj = JSON.parse(notes);
  }
}

//  add event listener to the add note button
noteBtn.addEventListener("click", (e) => {
  e.preventDefault();

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
                    <button id = "${index}" onclick="editNote(this.id)" class="note-btn">
                      <i class="fas fa-trash"></i>Delete
                    </button>
                    <button id = "${index}" onclick="deleteNote(this.id)" class="note-btn edit-btn">
                      <i class="fas fa-edit">Edit</i>
                    </button>
                  </div>
                </div>
                <hr />
                <h3 class="note-title">Title: id = "${element.title}" </h3>
                <p class="note-text">id = "${element.text}" </p>
              </div>
        `;
  });

  let noteElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added. Please add notes.";
  }
}

// Delete a single note
function deleteNote(index) {
  let confirmDel = confirm("Are you sure you want to delete");

  if (confirmDel == true) {
    getNotes();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
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

  noteTitle.value = notesObj[index].title;
  noteTitle.value = notesObj[index].text;

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

showNotes();
