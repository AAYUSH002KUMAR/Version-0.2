//arrow function
let learning = (a, b)=> a + b
console.log(4, 4)

//syntax
let arrow = ()=> {};

//IIFI (Immediately invoked function expression)
(function (){
    console.log("this is iifi")
})();

function first(){
    console.log("first")
    second()
    console.log("first function again")
}

function second(){
    console.log("second")
    third()
    console.log("second again")
}

function third(){
    console.log("third")
}
first()

