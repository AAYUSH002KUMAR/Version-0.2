//Q1 Write a program that determines whether a given number is positive or negative.

let num = Number(prompt("Enter a Number"));

function checkNumber(num) {
    if (num > 0) {
        return "The Number is Positive";
    } else if (num < 0) {
        return "The Number is Negative";
    } else {
        return "The Number is Zero";
    }
}

// Q2 Write a program that checks if a number is even or odd.

function OddEven(num) {
    if (num % 2 === 0) {
        return "The Number is Even";
    } else {
        return "The Number is Odd";
    }
}

// Q3 Write a program to determine the greater of two numbers.

let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))

function Greater(num1, num2) {
    if(num1>num2){
        return num1
    } else if (num2>num1){
        return num2
    }
}

// Q4  Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display “A”).

let score = Number(prompt("Enter the score in the scale of 1-10"))

function LetterGrade(score){
    if (score >= 9) {
        return "a";
    } else if (score >= 8) {
        return "b";
    } else if (score >= 7) {
        return "c";
    } else if (score >= 6) {
        return "d";
    } else {
        return "f";
    }
}

// Q5 - Write a program that calculates the ticket price based on age with the following conditions:
    //- Age below 12 → ticket price = 5
    //- Age below 18 → ticket price = 10
    //- Age below 60 → ticket price = 20
    //- Age over 60 → ticket price = 15

let age = Number