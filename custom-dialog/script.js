// select button, confirm, close, title, content, btn-ok and btn-cancel
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeEl = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOk = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");

// add event listeners to button 1 and button 2
// btn1.addEventListener("click", () => {
//   changeBg("black");
// });
// btn2.addEventListener("click", () => {
//   const bgColor = "rgba(0, 0, 0, 0.5)";
//   changeBg(bgColor);
// });

// function changeBg(color) {
//   let x = confirm("Change Background to : " + color);
//   if (x) {
//     document.body.style.backgroundColor = color;
//   }
// }

// Custom Confirm Box

class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  trigger(callbackFn) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    confirmEl.classList.remove("close-modal");

    closeEl.addEventListener("click", this.closeModal);
    btnCancel.addEventListener("click", this.closeModal);

    btnOk.addEventListener("click", () => {
      callbackFn();
      this.closeModal();
    });
  }

  closeModal() {
    confirmEl.classList.add("close-modal");
  }
}

// Btn Event Listener
btn1.addEventListener("click", () => {
  changeBg("black");
});
btn2.addEventListener("click", () => {
  const bgColor = "rgba(0, 0, 0, 0.5)";
  changeBg(bgColor);
});

const changeBackg = new ShowConfirm(
  "Change Background",
  "You are about to change the background!",
  "Change",
  "Don't Change"
);

function changeBg(color) {
  changeBackg.trigger(setBg);

  function setBg() {
    document.body.style.backgroundColor = color;
  }
}
