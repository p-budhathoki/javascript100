// get form item div, button and paragraph(step)
const formItems = document.getElementsByClassName("form-item");
const button = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");
// console.log(formItems);

let currentFormItem = 0;
formItems[currentFormItem].style.display = "block";

if (currentFormItem == 0) {
  button[0].style.display = "none";
  button[1].style.marginLeft = "0";
  steps[0].style.backgroundColor = "#1e9df7";
}

// next button
button[1].addEventListener("click", () => {
  // increase the value of current form item by 1
  currentFormItem++;
  // remember the previous form item using a variable
  const previousFormItem = currentFormItem - 1;

  if (currentFormItem > 0 && currentFormItem < 4) {
    button[0].style.display = "inline-block";
    //   show next form item
    formItems[currentFormItem].style.display = "block";
    //   hide the previous form item
    formItems[previousFormItem].style.display = "none";
    //   change the background color of steps
    steps[currentFormItem].style.backgroundColor = "#1e9df7";

    //   Change the next button to Submit
    if (currentFormItem == 3) {
      button[1].innerHTML = "Submit";
    }
  } else {
    //   the next button becomes the submit button. At this point when the submit button is clicked the value of currentFormItem increases by 1
    //   validate the form
    if (currentFormItem > 3) {
      alert("Form Submitted Successfully");
    }
  }
});

// Previous Button
button[0].addEventListener("click", () => {
  if (currentFormItem > 0) {
    currentFormItem--;
    // preserve the state of the next form item
    const nextFormItem = currentFormItem + 1;
    // display the previous form item and hide the current form item
    formItems[currentFormItem].style.display = "block";
    formItems[nextFormItem].style.display = "none";
    // change the background color of the next form item
    let stepsColor = rgba(255, 255, 255, 0.3);
    steps[nextFormItem].style.backgroundColor = "#cfd2d4";

    //   hide previous button when the form is at step 1
    if (currentFormItem === 0) {
      button[0].style.display = "none";
    }
    //   if previous button is clicked change the submit button to next button
    if (currentFormItem < 3) {
      button[1].innerHTML = "Next";
    }
  }
});
