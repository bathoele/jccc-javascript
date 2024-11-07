let password;
let validPassword = false;

do {
  password = prompt("Please enter a strong password (at least 8 characters, with uppercase, lowercase, and a number):");

  // Check password strength (you can implement more complex checks as needed)
  validPassword = password.length >= 8 && 
                   /[A-Z]/.test(password) && 
                   /[a-z]/.test(password) && 
                   /[0-9]/.test(password);

  if (!validPassword) {
    alert("Invalid password. Please try again.");
  }
} while (!validPassword);

alert(`Valid password entered: ${password}`);