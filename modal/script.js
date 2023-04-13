// select modal,modal-content, button and close character
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

// add event listeners to btn, close and modal respectively
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  const evt = e.target.classList;
  if (evt.contains("modal") || evt.contains("close")) {
    closeModal();
  }
});

// open modal
function openModal(e) {
  // prevents the modal from refreshing when the button is clicked
  e.preventDefault();
  modal.style.display = "block";
}

// close modal
function closeModal(e) {
  // prevents the modal from refreshing when the button is clicked
  e.preventDefault();
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
