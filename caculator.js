const buttonsElement = document.querySelectorAll("button");

const inputElement = document.getElementById("result");

for (let i = 0; i < buttonsElement.length; i++) {
  buttonsElement[i].addEventListener("click", () => {
    const buttonValue = buttonsElement[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      deleteLastCharacter();
    } else {
      appendValue(buttonValue);
    }
  });
}

deleteButton.addEventListener("click", deleteLastCharacter);

function clearResult() {
  inputElement.value = "";
}

function calculateResult() {
  inputElement.value = eval(inputElement.value);
}

function appendValue(buttonValue) {
  inputElement.value += buttonValue;
}

function deleteLastCharacter() {
  const inputValue = inputElement.value;
  inputElement.value = inputValue.slice(0, -1);
}
