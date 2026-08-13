const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");
const total = document.querySelector("#total");
const reviewInput = document.querySelector("#reviewInput");
const rating = document.querySelector("#rating");
const reviewButton = document.querySelector("#reviewBtn");
const reviewList = document.querySelector("#reviewList");

const productPrice = 29999;
quantity.addEventListener("input", function () {
    const quantityValue = Number(quantity.value);
    const totalPrice = productPrice * quantityValue;
    total.textContent = totalPrice;
});

reviewButton.addEventListener("click", function () {
    const reviewText = reviewInput.value.trim();
    const ratingValue = rating.value;
    if (reviewText === "") {
        return;
    }

    const review = document.createElement("div");
    review.classList.add("review");

    const text = document.createElement("p");
    text.textContent = reviewText;

    const stars = document.createElement("p");
    stars.classList.add("stars");
    stars.textContent = "⭐".repeat(Number(ratingValue));

    review.appendChild(text);
    review.appendChild(stars);
    reviewList.appendChild(review);
    reviewInput.value = "";
});