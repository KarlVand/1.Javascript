/* document.getElementById("run").addEventListener("click", sortout(); 

    
    function sortout() {
        const numbers = [2, 4, 14, 10, 90, 23, 16];
      numbers = numbers.sort();
      alert(numbers);
    };
    
    */

document.getElementById("run").addEventListener("click", sortout);

function sortout() {
  let numbers = [2, 4, 14, 10, 90, 23, 16];
  numbers = numbers.sort((a, b) => a - b);
  alert(numbers);
}
