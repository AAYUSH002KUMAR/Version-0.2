//Q1 Positive or Negative
let num = -5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Q2 Even or Odd
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Q3 Greater of Two Numbers
let a = 10;
let b = 20;

if (a > b) {
    console.log(a + " is greater");
} else {
    console.log(b + " is greater");
}

//Q 4 Numerical Grade → Letter Grade
let grade = 10;

if (grade === 10) {
    console.log("A");
} else if (grade === 9) {
    console.log("B");
} else if (grade === 8) {
    console.log("C");
} else if (grade === 7) {
    console.log("D");
} else {
    console.log("F");
}

//Q5 Ticket Price Based on Age
let age = 25;

if (age < 12) {
    console.log("Ticket price = 5");
} else if (age < 18) {
    console.log("Ticket price = 10");
} else if (age < 60) {
    console.log("Ticket price = 20");
} else {
    console.log("Ticket price = 15");
}


//Q6 Leap Year
let year = 2024;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

//Q7 Discount Based on Purchase Amount
let price = 120;

if (price >= 100) {
    console.log("Discount = 20%");
} else if (price >= 50) {
    console.log("Discount = 10%");
} else {
    console.log("Discount = 0%");
}
//Q8 Greeting Based on Time
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}


//Q9 BMI Calculator
let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);

console.log("BMI =", bmi);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}

//Q10 Number Guessing Game
let secretNumber = 50;
let guess = 40;

if (guess > secretNumber) {
    console.log("Your guess is too high");
} else if (guess < secretNumber) {
    console.log("Your guess is too low");
} else {
    console.log("Correct!");
}

//Q11 Adult or Minor Using If-Else
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}



// And the most important operators are:

// >     // greater than
// <     // less than
// >=    // greater than or equal
// <=    // less than or equal
// ===   // equal
// !==   // not equal
// &&    // AND
// ||    // OR
// %     // remainder