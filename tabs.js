// Select the element with the ID "display-frogs":
const displayFrogs = document.getElementById("display-frogs");
// Select all elements with the class "frog-button":
const frogButtons = document.querySelectorAll(".frog-button");

// Attach event listener to each frog button:
frogButtons.forEach(addButtonListener);

// Add event listener for the click event to each frog button:
function addButtonListener(frogButtonElement) {
  frogButtonElement.addEventListener("click", frogButtonClick);
}

//Function triggered when a frog button is clicked:
function frogButtonClick(event) {
  let clickedButton = event.currentTarget;

  // Construct CSS selector to find the corresponding frog detail element:
  let elementSelector = `.frog-details-${clickedButton.value}`;

  // Find the corresponding frog detail element:
  let clickedElement = document.querySelector(elementSelector);

  // Remove the currently selected class from all frog buttons:
  frogButtons.forEach(updateClickedButtonState);

  // Remove the currently selected class from all frog details:
  const frogDetails = document.querySelectorAll(".frog-details");
  frogDetails.forEach(updateFrogDetails);

  // Add the currently selected class to the clicked frog detail element and button:
  clickedElement.classList.add("currently-selected-frog");
  clickedButton.classList.add("currently-selected-button");
}

// Function to remove the currently selected class from a frog button:
function updateClickedButtonState(frogButtonElement) {
  frogButtonElement.classList.remove("currently-selected-button");
}
// Function to remove the currently selected class from a frog detail:
function updateFrogDetails(frogDetailElements) {
  frogDetailElements.classList.remove("currently-selected-frog");
}
