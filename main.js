const main = document.querySelector("main");

const questionDiv = document.createElement("div");
questionDiv.className = "question";

const questionHeading = document.createElement("h3");
questionHeading.className = "Guess";
questionHeading.innerText = "Guess the word";
questionDiv.append(questionHeading);

const levelLabel = document.createElement("LABEL");
levelLabel.innerText="choose Level : "
const levelSelect = document.createElement("SELECT");
const easyLevel = document.createElement("option");
const hardLevel = document.createElement("option");
easyLevel.innerText = "Easy";
hardLevel.innerText = "hard";
levelSelect.add(easyLevel);
levelSelect.add(hardLevel);

let word = "";
const easyWords=["COW","FOX","CAT","LION","KIA","HONDA","TOYOTA","JEEP","ARM","LEG","EYE","NOSE","RED","BLUE","GREEN","BLACK"];
const HARDWords=["Crocodile","CHEETAH","Elephant","SQUIRREL","CHEVORLET","MERCEDES","CADILLAC","VOLKSWAGEN","SHOULDER","STOMACH","KIDNEY","TONGUE","BEIGE","TURQUOISE","LILAC","Brick"];
word=easyWords[Math.floor(Math.random() * easyWords.length)];

questionDiv.append(levelLabel);
questionDiv.append(levelSelect);

main.append(questionDiv);

const answerDiv = document.createElement("div");
answerDiv.className = "answer";


let maskedWord = "#".repeat(word.length);

const maskedAnswerWord = document.createElement("h2");
maskedAnswerWord.innerText = maskedWord.split("").join(" ");
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

const imageDiv = document.createElement("div");
imageDiv.className = "result";

const imageResult = document.createElement("img");
imageResult.src = "hangman_start.jpg";
imageResult.alt = "hangman result";
imageDiv.append(imageResult);

const hangmanImages = [
  "hangman_start.jpg",
  "hangman_1.jpg",
  "hangman_2.jpg",
  "hangman_3.jpg",
  "hangman_4.jpg",
  "hangman_5.jpg",
  "hangman_GameOver.jpg",
];

let incorrectGuesses = 0;
const maxIncorrectGuesses = hangmanImages.length - 1;
let gameOver = false;

const enableAllButtons = () => {
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
    playAgainButton.remove();
  });
  
};

const resetGame = () => {
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
      imageResult.src = "hangman_won.jpg";

      enableAllButtons();
      playAgainFunc();
    }
  } else {
    incorrectGuesses++;
    if (incorrectGuesses < hangmanImages.length - 1) {
      imageResult.src = hangmanImages[incorrectGuesses];
    } else {
      imageResult.src = hangmanImages[maxIncorrectGuesses];

      enableAllButtons();
      playAgainFunc();
    }
  }

  e.target.disabled = true;
  e.target.style.opacity = "0.6";
  e.target.style.cursor = "not-allowed";
};

for (let i = 0; i < 26; i++) {
  const alphabetButton = document.createElement("button");
  alphabetButton.textContent = String.fromCharCode(65 + i); // A = 65, B = 66, ..., Z = 90
  buttonsDiv.append(alphabetButton);

  alphabetButton.addEventListener("click", click_func);
}

choiceDiv.append(chooseHeading);
choiceDiv.append(buttonsDiv);
main.append(imageDiv);

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

muteButton.addEventListener("click", () => {
  isMuted = !isMuted;
  backgroundMusic.muted = isMuted;
});
