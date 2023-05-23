$(document).ready(function() {
	$("#div-pic").children().css("margin-top", "3%");
	// $("#social").children().addcss('my-social');
  
	$('#scrollup img').mouseover(function() {
	  $(this).animate({ opacity: 0.65 }, 100);
	}).mouseout(function() {
	  $(this).animate({ opacity: 1 }, 100);
	}).click(function() {
	  window.scroll(0, 0);
	  return false;
	});
  
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 0) {
		$('#scrollup').fadeIn('fast');
	  } else {
		$('#scrollup').fadeOut('fast');
	  }
	});
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission
  
	// Reset error messages
	var errorElements = document.getElementsByClassName('error-message');
	for (var i = 0; i < errorElements.length; i++) {
	  errorElements[i].innerHTML = '';
	}
  
	// Retrieve form inputs
	var name = document.getElementById('name').value.trim();
	var email = document.getElementById('email').value.trim();
	var phone = document.getElementById('phone').value.trim();
	var message = document.getElementById('message').value.trim();
  
	// Perform form validation
	var isValid = true;
  
	if (name === '') {
	  document.getElementById('name-error').innerHTML = 'Name is required';
	  isValid = false;
	}
  
	if (email === '') {
	  document.getElementById('email-error').innerHTML = 'Email is required';
	  isValid = false;
	} else if (!isValidEmail(email)) {
	  document.getElementById('email-error').innerHTML = 'Invalid email address';
	  isValid = false;
	}
  
	if (phone === '') {
	  document.getElementById('phone-error').innerHTML = 'Phone number is required';
	  isValid = false;
	} else if (!isValidPhone(phone)) {
	  document.getElementById('phone-error').innerHTML = 'Invalid phone number';
	  isValid = false;
	}
  
	if (message === '') {
	  document.getElementById('message-error').innerHTML = 'Message is required';
	  isValid = false;
	}
  
	if (isValid) {
	  // Form is valid, perform submission
	  // You can send the form data to the server using AJAX or fetch API
	  // For simplicity, let's assume the form submission is successful
  
	  // Display success message
	  document.getElementById('success-message').style.display = 'block';
	  document.getElementById('success-message').innerHTML = 'Form submitted successfully';
  
	  // Clear form inputs
	  document.getElementById('name').value = '';
	  document.getElementById('email').value = '';
	  document.getElementById('phone').value = '';
	  document.getElementById('message').value = '';
	}
  });
  
  function isValidEmail(email) {
	// Regular expression for email validation
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
	// Regular expression for phone number validation
	var phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
  }
  