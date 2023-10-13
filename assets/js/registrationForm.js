// JavaScript to display the pop-up message and overlay
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Show the overlay and pop-up message
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("popup").classList.remove("hidden");

  // Close the pop-up after 5 seconds (adjust the time as needed)
  setTimeout(function () {
      closePopup();
  }, 5000); // 5000 milliseconds (5 seconds)
});

// JavaScript to close the pop-up when the close button is clicked
document.getElementById("closeButton").addEventListener("click", function () {
  closePopup();
});

function closePopup() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("popup").classList.add("hidden");
}
