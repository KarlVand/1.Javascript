/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* 
function calculate() {
    while (i <= 30) {
        var number = 1;

        var mul3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
        var mul5 = [5, 10, 15, 20, 25, 30];
        number = number ++  ;
        if (number = mul3) {
            console.log("fizz");
            number += 1;
        } 
        if (number = mul5) {
            console.log("buzz");
            number += 1;

        } 
        else if (number =mul3, mul5) {
            console.log("fizzbuzz");
            number += 1;
        }
        else() {
            console.log(number);
            number += 1;
        }
}} 
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
