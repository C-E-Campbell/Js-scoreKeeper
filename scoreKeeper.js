let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let reset = document.getElementById("reset")
let h1 = document.getElementById('score');
let h3 = document.getElementById('h3');
let player1Score = document.querySelector("#player1Score");
let player2Score = document.getElementById("player2Score");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
let numInput = document.querySelector('input');
let newScore = Number(numInput.value);
let pText = document.getElementById('setScore');


console.log(newScore);
p1.addEventListener("click", function () {
  if (!gameOver) {
    p1Score = p1Score + 1;
    if (p1Score === winningScore) {
      gameOver = true;
      player1Score.classList.add('scoreGreen');
      h3.textContent = "Player 1 Wins!";

    }
    player1Score.textContent = p1Score;
  }
})

p2.addEventListener("click", function () {
  if (!gameOver) {
    p2Score = p2Score + 1;
    if (p2Score === winningScore) {
      gameOver = true;
      player2Score.classList.add('scoreGreen');
      h3.textContent = "Player 2 Wins!"
    }
    player2Score.textContent = p2Score;
  }
})

reset.addEventListener("click", function () {
  p1Score = 0;
  p2Score = 0;
  player1Score.classList.remove('scoreGreen');
  player2Score.classList.remove('scoreGreen');
  player1Score.textContent = p1Score;
  player2Score.textContent = p2Score;
  h3.textContent = "Who will win?"
  gameOver = false;
});


numInput.addEventListener("change", function(){
pText.textContent = this.value;
winningScore = Number(this.value);
})

