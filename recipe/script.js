// select form (input field and search button)
const form = document.querySelector("form");
// search input field
const searchInput = document.getElementById("search");
// select meal (contains image, meal name and view recipe button)
const mealList = document.getElementById("meal");
// select meal modal
const mealModal = document.querySelector(".meal-modal");
// select recipe content(contains image, recipe name and instructions)
const recipe = document.querySelector(".recipe-content");
// select meal modal close button
const closeBtn = document.querySelector(".close-btn");

const searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="; // for recipe

// add event listener to the form
form.addEventListener("submit", getMeals);
// add event listener to the view recipe button
mealList.addEventListener("click", getMealRecipe);
// close button
closeBtn.addEventListener("click", () => {
  mealModal.style.display = "none";
});
// get meals
async function getMeals() {
  // get the user entered value from the input field
  let searchInputVal = searchInput.value.trim();
  const res = await fetch(`${searchURL}${searchInputVal}`);
  const data = await res.json();
//   console.log(data);

  // Display the meals
  displayMeals(data.meals);
}

// Display meals
function displayMeals(meals) {
  let html = "";

  if (meals) {
    meals.forEach((meal) => {
      html += `
            <div class="meal" data-id ="${meal.idMeal}">
            <div class="meal-img">
              <img src="${meal.strMealThumb}" alt="" />
            </div>
            <div class="meal-name">
              <h3>${meal.strMeal}</h3>
              <a href="#" class="recipe-btn">View Recipe &rarr;</a>
            </div>
          </div>
            `;
    });
  } else {
    html = "No meal was found, please try again";
  }
  mealList.innerHTML = html;
}

// get recipe
async function getMealRecipe(e) {
  if (e.target.classList.contains("recipe-btn")) {
    // get the id for the recipe
    let mealItem = e.target.parentElement.parentElement;
    // get the recipe
    const res = await fetch(`${lookupURL}${mealItem.dataset.id}`);
    const data = await res.json();

    // console.log(data);
    displayRecipe(data.meals);
  }
}

// Display Recipe
function displayRecipe(meal) {
  meal = meal[0];
  let html = `
        <div class="recipe-img">
          <img src="${meal.strMealThumb}" alt="" />
        </div>
        <h2 class="recipe-title">${meal.strMeal}</h2>

        <div class="recipe-instruction">
            <h3>Instruction</h3>
        <p>
         ${meal.strInstructions}
        </p>
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
        
    `;
  recipe.innerHTML = html;
  mealModal.style.display = "block";
}
