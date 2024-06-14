/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var random = document.getElementById("run");

random.addEventListener("click", function () {
  var color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = color;
});
