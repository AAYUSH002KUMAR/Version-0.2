const button = document.querySelector("#toggleBtn");
const body = document.querySelector("body");

button.addEventListener("click", function () {
    body.classList.toggle("dark");
});