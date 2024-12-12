const startBtn = document.getElementById("start-btn");
const timerDisplay = document.getElementById("timer");
const numKeys = document.getElementsByClassName("num-key");
const clearBtn = document.getElementById("clear-btn");
const enterBtn = document.getElementById("enter-btn");
const decoder = document.getElementById("decoder");
const inputDisplay = document.getElementById("input-display");
const explosion = document.getElementById("explosion");

let playerInput = [0, 0, 0, 0];
let winStatus = 0;
let bombCode = 0;


function startGame() {
  //reset
  playerInput = [];
  winStatus = 0;
  inputDisplay.textContent = "";
  startBtn.style.display = "none";
  explosion.style.display = "none";
  decoder.textContent = "";

  //get new code
  bombCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  console.log("new bomb code:", bombCode);

  //start timer
  startTimer();
}

enterBtn.addEventListener("click", () => {
  let playerGuess = playerInput.join("");
  console.log("player guess:", playerGuess);
  console.log("bomb code:", bombCode);

  if (playerGuess == bombCode) {
    youWin();
    return;
  } else {
    compareCodes(bombCode);
    console.log("incorrect");
  }
    
  playerInput = [];
});

function compareCodes(bombCode) {
  let bombArr = bombCode.toString().split("");
  console.log(bombArr);
  let guideArr = [];
  for (let i = 0; i < 4; i++) {
    if (playerInput[i] < bombArr[i]) {
      guideArr.push("^");
    } else if (playerInput[i] > bombArr[i]) {
      guideArr.push("v");
    } else if (playerInput[i] === bombArr[i]) {
      guideArr.push("-");
    } else {
      guideArr.push("_");
    }
  }
  //display guidance tool
  decoder.textContent = guideArr.join("");
}

function youWin() {
  winStatus = 1;
  decoder.textContent = "----";

  //win screen
  alert("Bomb defused! Good work.");
  startBtn.textContent = "START";
  startBtn.style.display = "inline";
}

function updateTimerDisplay(count) {
  if (count > 59) {
    let minute = Math.floor(count / 60);
    let seconds = count - 60;
    timerDisplay.textContent = `0${minute}:${seconds > 9 ? seconds : "0" + seconds}`;
  } else {
    timerDisplay.textContent = `00:${count > 9 ? count : "0" + count}`;
  }

}

function startTimer() {
  let count = document.querySelector('input[name="diffi"]:checked').value;
  timerDisplay.textContent = "";

  const timer = setInterval(() => {
    if (winStatus == 1) {
      clearInterval(timer);
      updateTimerDisplay(count);
      return;
    }
    
    count--;
    updateTimerDisplay(count);

    //explosion
    if (count === 0) {
      explosion.style.display = "inline";
      startBtn.textContent = "TRY AGAIN?";
      startBtn.style.display = "inline-block";
      clearInterval(timer);
      return;
    }

    //timer blinking effect
    setTimeout(function() {
      timerDisplay.textContent = "";
    }, 750);
  }, 1000);
};

for (key of numKeys) {
  key.addEventListener("click", (e) => {
    let num = e.target.value;
    if (playerInput.length < 4) {
      playerInput.push(num);
    }
    //display player input
    inputDisplay.textContent = playerInput.join("");
  });
};

startBtn.addEventListener("click", () => {
  startGame();
});

clearBtn.addEventListener("click", () => {
  playerInput = [];
  inputDisplay.textContent = "";
});
