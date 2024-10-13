let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));
const action =[ 'X', '÷']

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
        case 'X':
            default:
          display.innerText = '×'
          break;
    }
  });
});
if (action.includes(key)) {

}