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
//console.log(shuffleNum(numbers))
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
    let num = playerGuess;
  }
  checkGuess();
}

function checkGuess() {
  pastGuesses.push(playerGuess) // same result with unshift and splice(1,0,playerGuess) 
  // playerGuess is being pushed twice into my empty array. ex:[5,5]
  // index[1] shows but not index[0]
  // "already guessed that number" repeats
  if (playerGuess == winningNumber) {
    return "You Win!";

  } else if (pastGuesses.indexOf(playerGuess) > -1 && pastGuesses.indexOf(playerGuess) < pastGuesses.length - 1) {
    return "You have already guessed that number.";

  } else if (playersGuessSubmission(5) == winningNumber) {
    return "You Lose... Play again?";

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

//when a user types their guess and clicks the "guess" button to submit it 
let form = document.getElementById("form")
form.addEventListener('submit', function (e) {
  e.preventDefault()

  playerGuess = document.getElementById('main-guess').value
  let boxes = document.querySelectorAll(".guess")

  let result = checkGuess()
  document.getElementById('subtitle').textContent = result
  console.log(winningNumber)
  boxes[pastGuesses.length - 1].textContent = playerGuess

})

let hint = document.getElementById('hint-button')
hint.addEventListener('click', function(e) {
  hint.innerHTML = hintNumbers + " " + winningNumber 

})
// let reset = document.getElementById('reset-button')
// reset.addEventListener('click', function (e) {
//   playerGuess = null;
//   pastGuesses = [];
//   let boxes = document.querySelectorAll('.guess')
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].innerHTML = '-'
//   }
// })
