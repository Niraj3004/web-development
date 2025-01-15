//  listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validation
      const firstName = document.getElementById('firstname').value.trim();
      const lastName = document.getElementById('lastname').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (firstName === '' || lastName === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
      }

      // Form submission confirmation
      alert('Thank you for submitting!');

      // Display submitted data
      const submittedData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      };
      console.log(submittedData);

      // Clear form fields
      form.reset();
    });
  });