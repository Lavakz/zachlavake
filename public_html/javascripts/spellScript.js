"use strict";

const puzzle1 = {
  center: 'O',
  letters: ["W", "H", "M", "T", "A", "K"],
  solutions: ["tomahawk", "mohawk", "amok", "atom", "moat", "moth", "oath", "whoa", "whom", "hot", "how",
              "mow", "oak", "oat", "ohm", "who", "tow", "two", "wow", "wok", "ow", "oh", "ok"]
};

let currentPuzzle = puzzle1;
let foundWords = [];

window.onload = function() {
  addButtons(currentPuzzle);
}

// adds all new buttons to grid
function addButtons(puzzle) {
  var grid = document.getElementById("grid");
  var letters = puzzle.letters.sort(() => Math.random() - 0.5)//shuffle letters
  for (var i = 1; i <= 10; i++) {
    var b = document.createElement("button");
    switch (i) {
      case 1: case 2: case 3:// top row letters
        b.textContent = letters[i - 1];
        b.onclick = function() { addLetter(this.textContent) }
        break;
      case 4: // backspace
        b.textContent = '\u274C';
        b.onclick = function() { backspace() }
        break;
      case 5:// center letter
        b.textContent = puzzle.center;
        b.onclick = function() { addLetter(this.textContent) }
        break;
      case 6:// shuffle
        b.textContent = '\u2672';
        b.onclick = function() { shuffle() }
        break;
      case 7: case 8: case 9:// bottom row letters
        b.textContent = letters[i - 4];
        b.onclick = function() { addLetter(this.textContent) }
        break;
      case 10:// check
        b.textContent = '\u2705';
        b.onclick = function() { checkWord() }
        b.id = "check";
        break;
    }
    grid.appendChild(b);
  }
}

// Checks if the textBox word is in the solutions then alerts
function checkWord() {
  var word = textBox.textContent.toLowerCase();
  if (currentPuzzle.solutions.includes(word) && !foundWords.includes(word) ) {
    alert("Correct");
    foundWords.push(word);
    updateList();
  }
  else alert("Incorrect");
  textBox.innerHTML = "";
}

function addLetter(letter) {
  textBox.textContent = textBox.textContent + letter;
}

function shuffle() {
  grid.innerHTML = "";
  textBox.innerHTML = "";
  addButtons(currentPuzzle);
}

function backspace() {
  var text = textBox.textContent;
  textBox.textContent = text.substring(0, text.length - 1);
}

function updateList() {
  list.innerHTML = "";
  addListHeader()
  list = document.getElementById("list");
  foundWords.forEach((word) => {
    var li = document.createElement('li')
    li.textContent = word;
    list.appendChild(li);
  })
}

function addListHeader() {
  var lh = document.createElement('lh')
  lh.textContent = foundWords.length + "/" + currentPuzzle.solutions.length;
  list.appendChild(lh);
}