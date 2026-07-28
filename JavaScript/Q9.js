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