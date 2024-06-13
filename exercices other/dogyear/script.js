/* let myAge (document.getElementById('age').value);
let HumanDogRatio (7);
let myDogAge = myAge * HumanDogRatio;

alert(myDogAge); 

let count = 50;
count = count * 2;

console.log(count);

count = count - 75;*/

let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
  count = count + 1
  countEl.innerText = count
}
