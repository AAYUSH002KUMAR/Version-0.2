//Q1 Square Calculator
function square(number){
    return number*number;
}
console.log(square(4))

//Q2 Temperature Calculator
const celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

console.log(celsiusToFahrenheit(8))
console.log(fahrenheitToCelsius(172))

//Q3 Tax Calculator
function calculateTotal(price, quantity, taxRate) {
    let subtotal = price * quantity;
    let tax = (subtotal * taxRate) / 100;
    let total = subtotal + tax;

    return total;
}
console.log(calculateTotal(100,200,10))

//Q4 Grade Calculator
function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid Score";
    }
    
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(88))

//Q5 Years to Days Calculator
function calculateAgeInDays(ageInYears) {
    return ageInYears * 365;
}
console.log(calculateAgeInDays(78))

//Q6 Paasword Checker 
function isPasswordValid(password) {
    if (password.length >= 8 && !password.includes(" ")) {
        return true;
    }

    return false;
}
console.log(isPasswordValid("Maharana"))