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
/*
const maskedAnswerWord = document.createElement("h4");
const word = "HANGMAN";
const maskedWord = "The word is " + "# ".repeat(word.length);

maskedAnswerWord.innerText = maskedWord;
answerDiv.append(maskedAnswerWord);
*/
const word = "HANGMAN";
let maskedWord = "#".repeat(word.length);

const maskedAnswerWord = document.createElement("h3");
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

/*const func_1=() => {
   /* if (word.toLocaleUpperCase().includes (alphabetButton.textContent)){
        answerWord.textContent.push(alphabetButton.textContent)
    }
   for(let i =0 ; i<word.length; i++)
   if (word.includes (alphabetButton.textContent)){
    maskedAnswerWord.innerText.split.splice(i, 1, alphabetButton.textContent)
}
    */
const func_1 = (e) => {
    const chosenChar = e.target.textContent; 
    let newMaskedWord = maskedWord.split(""); 
  
    for (let i = 0; i < word.length; i++) {
      if (word[i] === chosenChar) {
        newMaskedWord[i] = chosenChar; 
      }
    }
  
    maskedWord = newMaskedWord.join(""); 
    maskedAnswerWord.innerText = maskedWord.split("").join(" "); 
  
    e.target.disabled = true; 
    e.target.style.opacity = "0.6";
    e.target.style.cursor = "not-allowed";
};

for (let i = 0; i < 26; i++) {
  const alphabetButton = document.createElement("button");
  alphabetButton.textContent = String.fromCharCode(65 + i); // A = 65, B = 66, ..., Z = 90
  buttonsDiv.append(alphabetButton);

  alphabetButton.addEventListener("click",func_1)
}

const imageDiv = document.createElement("div");
imageDiv.className = "result";

const imageResult = document.createElement("img");
imageResult.src = "";
imageResult.alt = "hangman result";
imageDiv.append(imageResult);

choiceDiv.append(chooseHeading);
choiceDiv.append(buttonsDiv);
choiceDiv.append(imageDiv);


