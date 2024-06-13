// Get references to the buttons
var redButton = document.getElementById("red");
var yellowButton = document.getElementById("yellow");
var greenButton = document.getElementById("green");
var blueButton = document.getElementById("blue");

// Add click event listeners to each button
redButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

yellowButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

greenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
