document.getElementById("run").addEventListener("click", fractional);

function fractional() {
  const number = parseFloat(document.getElementById("number").value);
  const result = number * number * number;
  alert(result);
}
