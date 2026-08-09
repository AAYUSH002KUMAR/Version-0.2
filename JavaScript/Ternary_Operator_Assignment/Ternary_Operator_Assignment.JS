//Q1 Pass ya Fail?
let marks = 65;
let result;

if (marks >= 40) {
    result = "Pass";
} else {
    result = "Fail";
}

//Q2 Even ya Odd Number?
let number = 7;
let type;

if (number % 2 === 0) {
    type = "Even";
} else {
    type = "Odd";
}

//Q3 Driving License Eligibility
let age = 19;
let message;

if (age >= 18) {
    message = "Eligible to drive";
} else {
    message = "Not eligible to drive";
}

//Q4 Discount Checker
let totalAmount = 1200;
let discount;

if (totalAmount > 1000) {
    discount = 200;
} else {
    discount = 0;
}

//Q5 Day Time Greeting
let hour = 11;
let greeting;

if (hour < 12) {
    greeting = "Good Morning";
} else {
    greeting = "Good Day";
}

//Q6 Game Score High Alert
let score = 95;
let isHighScore;

if (score > 90) {
    isHighScore = true;
} else {
    isHighScore = false;
}

//Q7 Weather Advice
let isRaining = true;
let action;

if (isRaining) {
    action = "Take an umbrella";
} else {
    action = "Enjoy the sun";
}

//Q8 Speed Limit Warning
let speed = 85;
let status;

if (speed > 80) {
    status = "Over-speeding!";
} else {
    status = "Normal speed";
}

//Q9 Login Check
let isLoggedIn = false;
let buttonText;

if (isLoggedIn) {
    buttonText = "Logout";
} else {
    buttonText = "Login";
}

//Q10 Bigger Number Finder (2 Numbers)
let a = 15;
let b = 25;
let max;

if (a > b) {
    max = a;
} else {
    max = b;
}
