// const result = document.getElementById("result");
// function add() {
//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);
//     result.innerHTML = "Answer = " + (num1 + num2);
// }
// function subtract() {
//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);
//     result.innerHTML = "Answer = " + (num1 - num2);
// }
// function multiply() {
//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);
//     result.innerHTML = "Answer = " + (num1 * num2);
// }
// function divide() {
//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);
//     if (num2 === 0) {
//         result.innerHTML = "Cannot divide by zero";
//     } else {
//         result.innerHTML = "Answer = " + (num1 / num2);
//     }
// }

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const adding = document.getElementById("add");
const subtracting = document.getElementById("subtract");
const multiplying = document.getElementById("multiply");
const dividing = document.getElementById("divide");
const clear = document.getElementById("clear");

const resultprint = document.getElementById("result");

function addingtwonumbers() {
    return resultprint.textContent = Number(number1.value) + Number(number2.value);
}

function subtractingtwonumbers() {
    return resultprint.textContent = Number(number1.value) - Number(number2.value);
}

function multiplyingtwonumbers() {
    return resultprint.textContent = Number(number1.value) * Number(number2.value);
}

function dividingtwonumbers() {
    if (Number(number2.value) === 0) {
        return resultprint.textContent = "Cannot divide by zero";
    }
    return resultprint.textContent = Number(number1.value) / Number(number2.value);
}

function clearFields() {
    number1.value = "";
    number2.value = "";
    resultprint.textContent = "";
}

adding.addEventListener("click", addingtwonumbers);
subtracting.addEventListener("click", subtractingtwonumbers);
multiplying.addEventListener("click", multiplyingtwonumbers);
dividing.addEventListener("click", dividingtwonumbers); 
clear.addEventListener("click", clearFields);

