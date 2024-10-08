const welcomeScreen = document.querySelector("#welcome-screen");
const gameContent = document.querySelector("#game-content");
const startGameBtn = document.querySelector("#start-game-btn");
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");

gameContent.append(header);
gameContent.append(main);

let points = 0;

const questionDiv = document.createElement("div");
questionDiv.className = "question";

const questionHeading = document.createElement("h");
questionHeading.className = "Guess";
questionHeading.innerText = "Guess the word";

const totalResult = document.createElement("h");
totalResult.className = "totalResult";
totalResult.innerText = "Total Points : " + points;

questionDiv.append(questionHeading);
questionDiv.append(totalResult);

let word = "";
let maskedWord = "";
let levelStatus = "";
const maskedAnswerWord = document.createElement("h2");
const easyWords = [
  "COW",
  "FOX",
  "CAT",
  "LION",
  "KIA",
  "HONDA",
  "TOYOTA",
  "JEEP",
  "ARM",
  "LEG",
  "EYE",
  "NOSE",
  "RED",
  "BLUE",
  "GREEN",
  "BLACK",
];
const hardWords = [
  "Crocodile",
  "CHEETAH",
  "Elephant",
  "SQUIRREL",
  "CHEVORLET",
  "MERCEDES",
  "CADILLAC",
  "VOLKSWAGEN",
  "SHOULDER",
  "STOMACH",
  "KIDNEY",
  "TONGUE",
  "BEIGE",
  "TURQUOISE",
  "LILAC",
  "Brick",
];
const timer = () => {
  let countdownNumber = 30;
  const countdownInterval = setInterval(() => {
    countdownDiv.textContent = "Timer :" + countdownNumber + " seconds";
    countdownNumber--;

    if (countdownNumber < 0) {
      clearInterval(countdownInterval);
      countdownDiv.textContent = "Time Out";
      imageResult.src = hangmanImages[maxIncorrectGuesses];
      correctAnswer.innerText = "GameOver";
      correctAnswer.style.background = "red";
      hintDiv.style.display = "none";
      levelDiv.style.display = "none";
      answerDiv.style.color = "red";
      maskedAnswerWord.innerText = word.split("").join(" ");  // Show the full word
      disableAllButtons();
      levelSelect.disabled = true;
      hintBtn.disabled = true;
      points--;
      totalResult.innerText = "Total Points : " + points;
      playAgainFunc();
    }
  }, 1000);

  return countdownInterval;
};

const level_Func = (e) => {
  if (e.target.value === "Easy") {
    word = easyWords[Math.floor(Math.random() * easyWords.length)];
    levelStatus = "Easy";
  } else if (e.target.value === "Hard") {
    word = hardWords[Math.floor(Math.random() * hardWords.length)];
    levelStatus = "Hard";
  } else if (e.target.value === "Master") {
    word = hardWords[Math.floor(Math.random() * hardWords.length)];
    levelStatus = "Master";
  }

  maskedWord = "#".repeat(word.length);
  maskedAnswerWord.innerText = maskedWord.split("").join(" ");
  resetGame();
  enableAllButtons();
  hint.innerText = "";
  hintBtn.disabled = false;
  countdownInterval = timer();
};
const levelDiv = document.createElement("div");
levelDiv.className = "level";

const levelLabel = document.createElement("LABEL");
levelLabel.innerText = "First choose Level : ";
const levelSelect = document.createElement("SELECT");
levelSelect.className = "select_level";

const initialOption = document.createElement("option");
const easyLevel = document.createElement("option");
const hardLevel = document.createElement("option");
const masterLevel = document.createElement("option");

initialOption.value = "";
initialOption.innerText = "Select Level";
easyLevel.value = "Easy";
easyLevel.innerText = "Easy";
hardLevel.value = "Hard";
hardLevel.innerText = "Hard";
masterLevel.value = "Master";
masterLevel.innerText = "Master";

initialOption.disabled = true;
initialOption.selected = true;

levelSelect.add(initialOption);
levelSelect.add(easyLevel);
levelSelect.add(hardLevel);
levelSelect.add(masterLevel);

levelSelect.addEventListener("change", level_Func);

levelDiv.append(levelLabel);
levelDiv.append(levelSelect);

questionDiv.append(levelDiv);

const hintDiv = document.createElement("div");
hintDiv.className = "hintDiv";

const hint = document.createElement("h4");
hint.className = "hint";
hint.innerText = "";

const hint_func = () => {
  if (levelStatus === "Easy") {
    if (easyWords.slice(0, 4).includes(word)) {
      hint.innerText = "Hint : Animal";
    } else if (easyWords.slice(4, 8).includes(word)) {
      hint.innerText = "Hint : Car";
    } else if (easyWords.slice(8, 12).includes(word)) {
      hint.innerText = "Hint : Body Part";
    } else if (easyWords.slice(12).includes(word)) {
      hint.innerText = "Hint : Color";
    }
  } else if (levelStatus === "Hard") {
    if (hardWords.slice(0, 4).includes(word)) {
      hint.innerText = "Hint : Animal";
    } else if (hardWords.slice(4, 8).includes(word)) {
      hint.innerText = "Hint : Car";
    } else if (hardWords.slice(8, 12).includes(word)) {
      hint.innerText = "Hint : Body Part";
    } else if (hardWords.slice(12).includes(word)) {
      hint.innerText = "Hint : Color";
    }
  } else if (levelStatus === "Master") {
    hint.innerText = "Hint not available for this level.";
  }
};

const hintBtn = document.createElement("button");
hintBtn.className = "hintBtn";
hintBtn.innerText = "Hint";
hintBtn.disabled = true;
hintBtn.addEventListener("click", hint_func);

hintDiv.append(hintBtn);
hintDiv.append(hint);

questionDiv.append(hintDiv);

const correctAnswer = document.createElement("h2");
correctAnswer.className = "correctAnswer";
correctAnswer.innerText = "";

questionDiv.append(correctAnswer);

const countdownContainerDiv = document.createElement("div");
const countdownDiv = document.createElement("div");

countdownContainerDiv.append(countdownDiv);

questionDiv.append(countdownContainerDiv);

main.append(questionDiv);

const answerDiv = document.createElement("div");
answerDiv.className = "answer";

answerDiv.append(maskedAnswerWord);

main.append(answerDiv);

const answerWord = document.createElement("h3");
answerWord.textContent = [""];
answerDiv.append(answerWord);

main.append(answerDiv);

const choiceDiv = document.createElement("div");
choiceDiv.className = "choice";

main.append(choiceDiv);

const chooseHeading = document.createElement("h4");
chooseHeading.className = "choose";
chooseHeading.innerText = "Choose a character:";

const buttonsDiv = document.createElement("div");
buttonsDiv.className = "characters_buttons";

const imageResult = document.createElement("img");
imageResult.src = "hangman_start.png";

const hangmanImages = [
  "hangman_start.png",
  "hangman_1.png",
  "hangman_2.png",
  "hangman_3.png",
  "hangman_4.png",
  "hangman_5.png",
  "hangman_GameOver.gif",
];

let incorrectGuesses = 0;
const maxIncorrectGuesses = hangmanImages.length - 1;
let gameOver = false;

const enableAllButtons = () => {
  const buttons = document.querySelectorAll(".characters_buttons button");
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  });
};

const disableAllButtons = () => {
  const buttons = document.querySelectorAll(".characters_buttons button");
  buttons.forEach((button) => {
    button.disabled = true;
    button.style.opacity = "0.6";
    button.style.cursor = "not-allowed";
  });
};

const playAgainFunc = () => {
  const playAgainButton = document.createElement("button");
  playAgainButton.id = "play_again";
  playAgainButton.textContent = "Play Again";

  questionDiv.append(playAgainButton);
  playAgainButton.addEventListener("click", () => {
    resetGame();
    disableAllButtons();
    levelSelect.selectedIndex = 0;
    hint.innerText = "";
    hintBtn.disabled = true;
    levelSelect.disabled = false;
    totalResult.innerText = "Total Points : " + points;
    countdownDiv.textContent = "";
    hintDiv.style.display = "block";
    levelDiv.style.display = "block";
    answerDiv.style.color = "black";
    playAgainButton.remove();
  });
};

const resetGame = () => {
  correctAnswer.innerText = "";
  incorrectGuesses = 0;
  gameOver = false;
  maskedWord = "#".repeat(word.length);
  maskedAnswerWord.innerText = maskedWord.split("").join(" ");
  imageResult.src = hangmanImages[0];
  const buttons = document.querySelectorAll(".characters_buttons button");
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  });
};

const click_func = (e) => {
  const chosenChar = e.target.textContent;
  let newMaskedWord = maskedWord.split("");
  let isCorrectGuess = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === chosenChar) {
      newMaskedWord[i] = chosenChar;
      isCorrectGuess = true;
    }
  }

  if (isCorrectGuess) {
    maskedWord = newMaskedWord.join("");
    maskedAnswerWord.innerText = maskedWord.split("").join(" ");

    if (maskedWord === word) {
      clearInterval(countdownInterval);
      imageResult.src = "hangman_won.gif";
      correctAnswer.style.background = "Green";
      correctAnswer.innerText = "Thanks For Saving Me!";
      hintDiv.style.display = "none";
      levelDiv.style.display = "none";
      maskedAnswerWord.innerText = word.split("").join(" "); 
      answerDiv.style.color = "green";
      disableAllButtons();
      levelSelect.disabled = true;
      hintBtn.disabled = true;
      points++;
      totalResult.innerText = "Total Points : " + points;
      playAgainFunc();
    }
  } else {
    incorrectGuesses++;
    if (incorrectGuesses < hangmanImages.length - 1) {
      imageResult.src = hangmanImages[incorrectGuesses];
    } else {
      clearInterval(countdownInterval);
      imageResult.src = hangmanImages[maxIncorrectGuesses];

      correctAnswer.innerText = "GameOver";
      correctAnswer.style.background = "red";
      hintDiv.style.display = "none";
      levelDiv.style.display = "none";
      maskedAnswerWord.innerText = word.split("").join(" "); 
      answerDiv.style.color = "red";
      disableAllButtons();
      levelSelect.disabled = true;
      hintBtn.disabled = true;
      points--;
      totalResult.innerText = "Total Points : " + points;
      playAgainFunc();
    }
  }

  e.target.disabled = true;
  e.target.style.opacity = "0.6";
  e.target.style.cursor = "not-allowed";
};

for (let i = 0; i < 26; i++) {
  const alphabetButton = document.createElement("button");
  alphabetButton.textContent = String.fromCharCode(65 + i); 
  alphabetButton.disabled = true;
  alphabetButton.style.opacity = "0.6";
  alphabetButton.style.cursor = "not-allowed";
  buttonsDiv.append(alphabetButton);

  alphabetButton.addEventListener("click", click_func);
}

choiceDiv.append(chooseHeading);
choiceDiv.append(buttonsDiv);
main.append(imageResult);

const clickSound = document.querySelector("#click-sound");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.play();
  });
});

const backgroundMusic = document.querySelector("#background-music");
const muteButton = document.querySelector("#mute-button");
let isMuted = false;

backgroundMusic.play();

muteButton.addEventListener("click", () => {
  isMuted = !isMuted;
  backgroundMusic.muted = isMuted;
});

const toggleSwitch = document.createElement("button");
toggleSwitch.className = "toggle-Switch";
toggleSwitch.textContent = "Dark Mode";
toggleSwitch.disabled = true;
toggleSwitch.style.opacity = "0.6";
toggleSwitch.style.cursor = "not-allowed";

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (toggleSwitch.textContent === "Dark Mode") {
    toggleSwitch.textContent = "Light Mode";
    toggleSwitch.style.backgroundColor = "#ECF0F1";
    toggleSwitch.style.color = "#131414";
  } else {
    toggleSwitch.textContent = "Dark Mode";
    toggleSwitch.style.backgroundColor = "#131414";
    toggleSwitch.style.color = "#ECF0F1";
  }
});

startGameBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  gameContent.style.display = "block";
  toggleSwitch.disabled = false;
  toggleSwitch.style.opacity = "1";
  toggleSwitch.style.cursor = "pointer";
});

body.append(toggleSwitch);
