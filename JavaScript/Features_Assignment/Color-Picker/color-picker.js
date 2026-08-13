const colorPicker = document.querySelector("#colorPicker");
const colorBox = document.querySelector("#colorBox");
const colorValue = document.querySelector("#colorValue");


colorPicker.addEventListener("input", function () {
    colorBox.style.backgroundColor = colorPicker.value;
    colorValue.textContent = colorPicker.value;
});