let playerGuess = null;
let pastGuesses = [];
let winningNumber = generateWinningNumber();
let hintNumbers = randomHintNumbers()


function generateWinningNumber() {
  let winNum = Math.floor(Math.random() * 100) + 1;
  return winNum;
}
function randomHintNumbers() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1)
  }
  var str = "";
  for (var i = 0; i < 3; i++) {
    str += " " + arr[i];
  }
  return str;
}


function shuffleNum(arr) {
  let i = arr.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function difference() {
  let sum = 0;
  let total = playerGuess - winningNumber;
  sum += total;
  return Math.abs(sum);
}

function isLower() {
  return (playerGuess < winningNumber);
}

function playersGuessSubmission(num) {
  if (num < 1 || num > 100 || isNaN(num)) {
    return "That is an invalid guess.";
  } else {
    return playerGuess;
  }
}


function checkGuess() {
  pastGuesses.push(playerGuess)
  
  if (pastGuesses.length > 4) {
  return "You Lose... Play again?";
  
  } else if (playerGuess == winningNumber) {
    return "You Win!";
  } else if (pastGuesses.indexOf(playerGuess) < pastGuesses.length -1 && pastGuesses.indexOf(playerGuess) > -1 ){
    return "You have already guessed that number.";
    
  } else if (difference() < 5) {
    return "You're burning up!!!";
    
  } else if (difference() < 20) {
    return "You're lukewarm...";
    
  } else if (difference() < 70) {
    return "You're a bit chilly~";
    
  } else if (difference() < 100) {
    return "You're ice cold!";
  }
  
}


function newGame() {
  console.log(newGame())
}

let form = document.getElementById("form");
form.addEventListener('submit', function (e) {
  e.preventDefault()

  playerGuess = document.getElementById('main-guess').value
  let boxes = document.querySelectorAll(".guess")

  let result = checkGuess()
  console.log(pastGuesses)
  document.getElementById('subtitle').textContent = result
  boxes[pastGuesses.length - 1].textContent = playerGuess

})


let hint = document.getElementById('hint-button')
hint.addEventListener('click', function(e) {
  hint.innerHTML = hintNumbers + " " + winningNumber 

})

