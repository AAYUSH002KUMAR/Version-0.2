//Call Back Function
function greeting(hello, india){
    let processed = hello.toUpperCase()
    console.log(processed)
    console.log(callback())
}

function callback(){
    return "hello i am callback"
}

greeting("hello", callback)

function newfun(){
    return function nayafun(){
        console.log("i am new function")
    }
}

function newfun(number){
    return function nayafun(factor){
        return number*factor;
    }
}
console.log(newfun(3)(5))