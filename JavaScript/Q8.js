//1. Normal Function
aay()
function aay(){
    console.log("hello class b.tech 4th year")
}

//2. Function Expression
//abc()
let abc = function(){
    console.log("hello i am function expression")
}

console.log(add(4,5))
function add(a, b){
    return a+b;
}

function mah(...numbers){
    return numbers.reduce((a, b)=> a+b, 0)
}
console.log(mah(4,9,84,38,56,23))

//Write a function parameter string
function FindVowels(str){
    let vowels = "aeiouAEIOU";
    let result = "";

    for(chr of str){
        if(vowels.includes(chr)){
            result += chr;
        }
    }
    return result;
}
console.log(FindVowels("This is my MERN Stack Class"));