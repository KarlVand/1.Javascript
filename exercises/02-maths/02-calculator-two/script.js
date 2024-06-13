/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

;(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = operation => {
    const num1 = document.getElementById("op-one").value
    const num2 = document.getElementById("op-two").value
    switch (operation) {
      case "addition":
        var result = parseInt(num1) + parseInt(num2)
        alert(result)
        break
      case "substraction":
        var result = parseInt(num1) - parseInt(num2)
        alert(result)
        break
      case "multiplication":
        var result = parseInt(num1) * parseInt(num2)
        alert(result)
        break
      case "division":
        var result = parseInt(num1) / parseInt(num2)
        alert(result)
        break
    }
  }

  Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  )
})()
