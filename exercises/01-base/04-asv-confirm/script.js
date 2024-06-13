/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getUserDetails() {
  // Prompt the user for their age, gender, and city
  var age = prompt("Please enter your age:");
  var gender = prompt("Please enter your gender:");
  var city = prompt("Please enter your city:");
  var color = prompt("Your favourite color");

  // Display the entered information and ask for confirmation
  var confirmationMessage = `You entered:\nAge: ${age}\nGender: ${gender}\nCity: ${city}\nColor: ${color}\nIs this correct? (yes/no)`;
  var confirmation = prompt(confirmationMessage);

  // Check the confirmation response
  if (confirmation.toLowerCase() === "yes") {
    alert("Thank you for confirming your details!");
  } else {
    alert("Let's try again.");
    getUserDetails(); // Restart the process
  }
}

getUserDetails();
