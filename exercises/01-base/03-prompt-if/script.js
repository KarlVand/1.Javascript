/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var question = "Tu veux du gateau?"

// Prompt the user for an answer
var userAnswer = prompt()

// Define the correct answer
var correctAnswer = "oui"

// Check the user's answer using if/else conditions
if (userAnswer === correctAnswer) {
  alert("Super !! Bon app !")
} else {
  alert("t'es serieux bichon?")
}
