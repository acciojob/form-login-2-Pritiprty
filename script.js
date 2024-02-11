document.getElementById('submitButton').addEventListener('click', function() {
  // Get form data
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;
  
  // Construct the alert message with spaces
  var alertMessage = "First Name: " + firstName + " " +
                     "Last Name: " + lastName + " " +
                     "Phone Number: " + phoneNumber + " " +
                     "Email ID: " + email;
  
  // Show the alert
  alert(alertMessage);
});
