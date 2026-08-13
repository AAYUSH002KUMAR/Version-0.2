const keyValue = document.querySelector("#keyValue");
const keyName = document.querySelector("#keyName");
const keyCode = document.querySelector("#keyCode");


document.addEventListener("keydown", function (event) {
    keyValue.textContent = event.key;
    keyName.textContent = event.key;
    keyCode.textContent = event.code;
});