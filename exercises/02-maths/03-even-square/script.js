/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", calculate);

function calculate() {
  var i = 2;

  while (i < 21) {
    var carre = i * i;
    alert(i + " au carré = " + carre);
    i += 2;
  }
}
