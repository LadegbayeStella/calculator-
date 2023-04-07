

const inputText = document.getElementById("inputText");
const calcButtons = document.querySelectorAll(".calc button");

calcButtons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    
    if (buttonValue === "c") {
      inputText.value = "";

    } else if
     (buttonValue === "DEL") {
      inputText.value = inputText.value.slice(0, -1);
    } else if
    
    (buttonValue === "%") {
      inputText.value = inputText.value / 100;
    } else if
    
    (buttonValue === "=") {
      inputText.value = eval(inputText.value);
    } else{
      inputText.value += buttonValue;
    }
  });
});



  