
const buttonsDiv = document.createElement("div");
buttonsDiv.className = "characters_buttons";

for (let i = 0; i < 26; i++) {
    const alphabetButton = document.createElement("button");
    alphabetButton.textContent = String.fromCharCode(65 + i); // A = 65, B = 66, ..., Z = 90
    buttonsDiv.append(alphabetButton);
}

const choiceDiv = document.querySelector(".choice");

choiceDiv.appendChild(buttonsDiv);
