const main = document.querySelector("main");

const questionDiv = document.createElement("div");
questionDiv.className = "question";

const questionHeading = document.createElement("h3");
questionHeading.className = "Guess";
questionHeading.innerText = "Guess the word";
questionDiv.append(questionHeading);

main.append(questionDiv);

const answerDiv = document.createElement("div");
answerDiv.className = "answer";

const maskedAnswerWord = document.createElement("h4");
const word = "HANGMAN";
const maskedWord = "The word is " + "# ".repeat(word.length);

maskedAnswerWord.innerText = maskedWord;
answerDiv.append(maskedAnswerWord);

const answerWord = document.createElement("h3");
answerWord.textContent=[""];
answerDiv.append(answerWord)

main.append(answerDiv);

const choiceDiv = document.createElement("div");
choiceDiv.className = "choice";

main.append(choiceDiv);

const chooseHeading = document.createElement("h4");
chooseHeading.className = "choose";
chooseHeading.innerText = "Choose a character:";

const buttonsDiv = document.createElement("div");
buttonsDiv.className = "characters_buttons";

for (let i = 0; i < 26; i++) {
  const alphabetButton = document.createElement("button");
  alphabetButton.textContent = String.fromCharCode(65 + i); // A = 65, B = 66, ..., Z = 90
  buttonsDiv.append(alphabetButton);

  alphabetButton.addEventListener("click",func_1)
}

const imageDiv = document.createElement("div");
imageDiv.className = "result";

const imageResult = document.createElement("img");
imageResult.src = "hangman.jpg";
imageResult.alt = "hangman result";
imageDiv.append(imageResult);

choiceDiv.append(chooseHeading);
choiceDiv.append(buttonsDiv);
choiceDiv.append(imageDiv);

const func_1=() => {
    if (word.toLocaleUpperCase().includes (alphabetButton.textContent)){
        answerWord.textContent.push(alphabetButton.textContent)
    }
}
