const cards = document.querySelectorAll(".card");
const highlightBtn = document.querySelector("#highlightBtn");
const searchInput = document.querySelector("#searchInput");
const departmentFilter = document.querySelector("#departmentFilter");
const toggleBtn = document.querySelector("#toggleBtn");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebar = document.querySelector("#sidebar");

highlightBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        const score = Number(card.dataset.score);
        if (score >= 90) {
            card.classList.add("highlighted");
        } else {
            card.classList.remove("highlighted");
        }
    });
});

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    cards.forEach(function (card) {
        const studentName = card.querySelector("h3").textContent.toLowerCase();
        if (studentName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

departmentFilter.addEventListener("change", function () {
    const selectedDepartment = departmentFilter.value;
    cards.forEach(function (card) {
        const department = card.dataset.department;
        if (
            selectedDepartment === "all" ||
            department === selectedDepartment
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});

const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        sidebarLinks.forEach(function (item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});

const viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const studentName = card.querySelector("h3").textContent;
        alert("Viewing profile of " + studentName);
    });
});