const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.textContent;

        // Clear
        if (value === "AC") {
            expression = "";
            display.textContent = "0";
        }

        // Delete
        else if (value === "DEL") {
            expression = expression.slice(0, -1);

            if (expression === "") {
                display.textContent = "0";
            } else {
                display.textContent = expression;
            }
        }

        // Equal
        else if (value === "=") {

            try {
                expression = expression.replace(/%/g, "/100");

                let result = eval(expression);

                display.textContent = result;
                expression = result.toString();

            } catch (error) {
                display.textContent = "Error";
                expression = "";
            }
        }

        // Percentage
        else if (value === "%") {
            expression += "%";
            display.textContent = expression;
        }

        // Other buttons
        else {
            expression += value;
            display.textContent = expression;
        }

    });

});