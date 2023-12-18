document.addEventListener("DOMContentLoaded", () => {
  const numberButtons = document.querySelectorAll('[data-action="number"]');
  const resDisplay = document.querySelector(".response");

  let num1 = "";
  let num2 = "";
  let operation = "";
  let result = "";

  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      if (operation.length === 0) {
        const numberValue = e.target.innerText;
        num1 += numberValue;
        resDisplay.innerHTML = num1;
      } else {
        const numberValue = e.target.innerText;
        num2 += numberValue;
        resDisplay.innerHTML = num2;
      }
    });
  });

  // clean operations
  const cleanOperations = () => {
    num1 = "";
    num2 = "";
    operation = "";
    result = "";
  };

  // plus
  const plusBtn = document.querySelector('[data-action="plus"]');
  plusBtn.addEventListener("click", (e) => {
    const plusOperation = e.target.innerText;
    operation = plusOperation;
    resDisplay.innerHTML = plusOperation;
  });

  // sub
  const subBtn = document.querySelector('[data-action="sub"]');
  subBtn.addEventListener("click", (e) => {
    const subOperation = e.target.innerText;
    operation = subOperation;
    resDisplay.innerHTML = subOperation;
    if (operation.length > 1) {
      operation = "";
    }
  });

  // multiply
  const multBtn = document.querySelector('[data-action="multiply"]');
  multBtn.addEventListener("click", (e) => {
    const multOperation = e.target.innerText;
    operation = multOperation;
    resDisplay.innerHTML = multOperation;
    if (operation.length > 1) {
      operation = "";
    }
  });

  // divide
  const divideBtn = document.querySelector('[data-action="divide"]');
  divideBtn.addEventListener("click", (e) => {
    const divideOperation = e.target.innerText;
    operation = divideOperation;
    resDisplay.innerHTML = divideOperation;
    if (operation.length > 1) {
      operation = "";
    }
  });

  // percent
  const percentBtn = document.querySelector('[data-action="percent"]');
  percentBtn.addEventListener("click", (e) => {
    const percentOperation = e.target.innerText;
    operation = percentOperation;
    resDisplay.innerHTML = percentOperation;
    if (operation.length > 1) {
      operation = "";
    }
  });

  // delete
  const delBtn = document.querySelector('[data-action="delete"]');
  delBtn.addEventListener("click", () => {
    cleanOperations();
    resDisplay.innerHTML = ''
  });

  // equal
  const equalBtn = document.querySelector('[data-action="equal"]');
  equalBtn.addEventListener("click", (e) => {
    switch (operation) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        resDisplay.innerHTML = `= ${result}`;
        cleanOperations();
        break;
      case "−":
        result = parseFloat(num1) - parseFloat(num2);
        resDisplay.innerHTML = `= ${result}`;
        cleanOperations();
        break;
      case "×":
        result = parseFloat(num1) * parseFloat(num2);
        resDisplay.innerHTML = `= ${result}`;
        cleanOperations();
        break;
      case "÷":
        if (parseFloat(num2) === 0 && parseFloat(num1) === 0) {
          result = "explode..."; // Se ambos num1 e num2 forem zero
          resDisplay.innerHTML = result;
        } else {
          result = parseFloat(num1) / parseFloat(num2);
          resDisplay.innerHTML = `= ${result}`;
          cleanOperations();
        }
        break;
      case "%":
        result = (parseFloat(num1) * parseFloat(num2)) / 100;
        resDisplay.innerHTML = `= ${result}`;
        cleanOperations();
        break;
      // Adicione mais casos conforme necessário para outros operadores
      default:
        console.log("Operador não reconhecido");
    }
  });
});
