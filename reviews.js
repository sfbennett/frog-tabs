// Add an event listener to each individual-reviews div/button
let reviewButtonElements = document.querySelectorAll(".individual-reviews");
reviewButtonElements.forEach(addReviewButtonListener);

// Attach event listener for the click event to each review button:
function addReviewButtonListener(reviewButtonElement) {
  reviewButtonElement.addEventListener("click", reviewButtonClick);
}

// Function triggered when a review button is clicked:
function reviewButtonClick(event) {
  let clickedReview = event.currentTarget;

  // Construct CSS selector to find the corresponding review details element:
  let detailsElementSelector =
    ".review-details-" +
    clickedReview.querySelector(".review-name").textContent.toLowerCase();

  // Find the corresponding review details element:
  let detailsElement = document.querySelector(detailsElementSelector);

  // Remove the selected state from all review buttons:
  reviewButtonElements.forEach(updateClickedReviewButton);

  // Remove the selected state from all review buttons:
  let reviewDetails = document.querySelectorAll(".review-quote");
  reviewDetails.forEach(updateReviewDetail);

  // Add the selected state to the clicked review and its details:
  detailsElement.classList.add("currently-selected-review");
  clickedReview.classList.add("currently-selected-review-button");
}

// Function to remove the selected state from a review button:
function updateClickedReviewButton(reviewButtonElement) {
  reviewButtonElement.classList.remove("currently-selected-review-button");
}
// Function to remove the selected state from a review detail:
function updateReviewDetail(reviewDetailElement) {
  reviewDetailElement.classList.remove("currently-selected-review");
}
