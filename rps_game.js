// Define an enum for the used game symbols
var symbols = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
  properties: {
    0: {name: "Rock", file: "svg/rock.svg"},
    1: {name: "Paper", file: "svg/paper.svg"},
    2: {name: "Scissors", file: "svg/scissors.svg"}
  }
};

// Map button ids to the symbol identifiers
var buttons =  {
  "btn_rock": symbols.ROCK, "btn_paper": symbols.PAPER, "btn_scissors": symbols.SCISSORS
};

// Define which symbol wins against other symbols
var decisionMatrix = [[1, 2, 0], [0, 1, 2], [2, 0, 1]];

// Define the different status messages
var messages = {0: "You lost!", 1: "Draw!", 2: "You won!"};

// Scores
var computer_wins = 0;
var player_wins = 0;

// Execute the function as soon as the page is fully loaded
document.addEventListener("DOMContentLoaded", function(event) {
  // Add eventlistener for the buttons
  document.getElementById("btn_rock").addEventListener("click", handleButtonClick);
  document.getElementById("btn_paper").addEventListener("click", handleButtonClick);
  document.getElementById("btn_scissors").addEventListener("click", handleButtonClick);

  // Handle the button click events
  function handleButtonClick(event) {
    console.log("Received button click from: ", event.target.id);

    // Get the player chosen symbol
    var player_symbol = buttons[event.target.id];
    var player_symbol_name = symbols.properties[player_symbol].name;

    // Generate a random symbol for the computer
    var computer_symbol = Math.floor(Math.random() * 3);
    var computer_symbol_name = symbols.properties[computer_symbol].name;

    console.log("Player: ", player_symbol_name, "vs Computer:", computer_symbol_name);

    // Decide who won
    var result = decisionMatrix[computer_symbol][player_symbol];
    computer_wins += (result == 0) ? 1 : 0;
    player_wins += (result == 2) ? 1 : 0;

    // Update the UI
    document.getElementById("score_computer").textContent = computer_wins;
    document.getElementById("score_player").textContent = player_wins;

    document.getElementById("symbolname_computer").textContent = computer_symbol_name;
    document.getElementById("symbolname_player").textContent = player_symbol_name;

    document.getElementById("status_text").textContent = messages[result] + " Choose a symbol to play again.";

    // Update the svg symbols
    document.getElementById("symbol_computer").src = symbols.properties[computer_symbol].file;
    document.getElementById("symbol_player").src = symbols.properties[player_symbol].file;


  }
});
