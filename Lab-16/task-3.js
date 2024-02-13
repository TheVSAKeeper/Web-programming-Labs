function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let expression = document.getElementById("display").value;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = "Error";
  }

  document.getElementById("display").value = result;
  return result;
}

function calculateAction(action) {
  let result = calculate();
  document.getElementById("display").value = action(result);
}

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
