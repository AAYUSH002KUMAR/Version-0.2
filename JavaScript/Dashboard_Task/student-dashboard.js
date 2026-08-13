const cards = document.querySelectorAll(".card");

const button = document.querySelector("#highlightBtn");

button.addEventListener("click", function () {

    cards.forEach(function (card, index) {

        card.style.border = "2px solid #1a73e8";
        card.style.borderRadius = "12px";
        card.style.boxShadow = "0 5px 15px rgba(26, 115, 232, 0.25)";

        if (index % 2 === 0) {
            card.style.backgroundColor = "#e8f0fe";
        } else {
            card.style.backgroundColor = "#e6f4ea";
        }

    });

});