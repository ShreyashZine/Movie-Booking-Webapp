// script.js
const bookingConfirmationAlert = document.getElementById("booking-confirmation-alert");
const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  bookingConfirmationAlert.classList.remove("showAlert");
  bookingConfirmationAlert.classList.add("hide");
});

// Send email or SMS notification to user after successful booking
function sendNotification() {
  // Implement email or SMS notification logic here
  console.log("Notification sent!");
}

// Show notification after booking confirmation
function showNotification() {
  bookingConfirmationAlert.classList.add("showAlert");
  sendNotification();
}

// Call showNotification function after booking confirmation
showNotification();