// Real-time input validation for User Login form
document.addEventListener("DOMContentLoaded", function () {
    const aadharInput = document.getElementById('aadhar');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    
    const aadharError = document.getElementById('aadhar-error');
    const emailError = document.getElementById('email-error');
    const mobileError = document.getElementById('mobile-error');
  
    // Aadhar Validation (12 digits)
    aadharInput.addEventListener('input', function () {
      const aadharPattern = /^[0-9]{12}$/;
      if (!aadharPattern.test(aadharInput.value)) {
        aadharError.textContent = 'Aadhar number must be a 12-digit number.';
        aadharInput.style.border = '2px solid red';
      } else {
        aadharError.textContent = ''; // Clear error message
        aadharInput.style.border = '2px solid green'; // Show valid state
      }
    });
  
    // Email Validation (Basic email format validation)
    emailInput.addEventListener('input', function () {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.style.border = '2px solid red';
      } else {
        emailError.textContent = '';
        emailInput.style.border = '2px solid green';
      }
    });
  
    // Mobile Number Validation (10 digits)
    mobileInput.addEventListener('input', function () {
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobileInput.value)) {
        mobileError.textContent = 'Mobile number must be a 10-digit number.';
        mobileInput.style.border = '2px solid red';
      } else {
        mobileError.textContent = '';
        mobileInput.style.border = '2px solid green';
      }
    });
  });
  