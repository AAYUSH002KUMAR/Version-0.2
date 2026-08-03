//Browser Object Model
    const reloadBtn = document.getElementById("reloadBtn");
    reloadBtn.addEventListener("click", function() {
        window.location.reload(); // This will reload the current page
    }); 

    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", function() {
        window.history.back(); // This will take the user back to the previous page in their browsing history
    });

    const forwardBtn = document.getElementById("forwardBtn");
    forwardBtn.addEventListener("click", function() {
        window.history.forward(); // This will take the user forward to the next page in their browsing history
    });

    const openBtn = document.getElementById("openBtn");
    openBtn.addEventListener("click", function() {
        window.open("https://www.example.com", "_blank"); // This will open a new tab with the specified URL
    });

    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", function() {
        window.close(); // This will close the current window
    });

    const printBtn = document.getElementById("printBtn");
    printBtn.addEventListener("click", function() {
        window.print(); // This will open the print dialog for the current page
    });

    const alertBtn = document.getElementById("alertBtn");
    alertBtn.addEventListener("click", function() {
        window.alert("This is an alert message!"); // This will show an alert dialog with the specified message
    });

    const resizeBtn = document.getElementById("resizeBtn");
    resizeBtn.addEventListener("click", function() {
        window.resizeTo(800, 600); // This will resize the current window to the specified width and height
    });

    const locationBtn = document.getElementById("locationBtn");
    locationBtn.addEventListener("click", function() {
        window.location.href = "https://www.google.com"; // This will navigate to the specified URL
    });

    const innerHeightBtn = document.getElementById("innerHeightBtn");
    innerHeightBtn.addEventListener("click", function() {
        alert("Inner Height: " + window.innerHeight); // This will show the inner height of the window
    });

    const innerWidthBtn = document.getElementById("innerWidthBtn");
    innerWidthBtn.addEventListener("click", function() {
        alert("Inner Width: " + window.innerWidth); // This will show the inner width of the window
    });