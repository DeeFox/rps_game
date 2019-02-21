// Define an enum for the used game symbols
var symbols = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
  properties: {
    0: {name: "Rock"},
    1: {name: "Paper"},
    2: {name: "Scissors"}
  }
};

// Assign the button ids to the symbol identifiers
var buttons =  {
  "btn_rock": symbols.ROCK, "btn_paper": symbols.PAPER, "btn_scissors": symbols.SCISSORS
};

// Execute the function as soon as the page is fully loaded
document.addEventListener("DOMContentLoaded", function(event) {
  // Add eventlistener for the buttons
  document.getElementById("btn_rock").addEventListener("click", handleButtonClick);
  document.getElementById("btn_paper").addEventListener("click", handleButtonClick);
  document.getElementById("btn_scissors").addEventListener("click", handleButtonClick);

  function handleButtonClick(event) {
    var button = buttons[event.target.id];

    console.log("Received button click from: ", symbols.properties[button].name);
  }
});
