document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Send registration data to server (can be done via AJAX)
  
    console.log("Registered:", name, email, password);
    window.location.href = "/login.html"; // Redirect to login page after registration
});
  