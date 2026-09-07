//setTimeout()
//executes a function once after a specified delay
setTimeout(()=>{
    clearTimeout()
},2000)

setInterval(()=>{
    clearInterval()
},1000)

//executes a function repeatedly after some interval

console.log("pizza order is placed")
setTimeout(function(){
    console.log("Your order is placed")
},2000)

setTimeout(()=>{
    console.log("your order is out of delivery")
},4000)

setTimeout(()=>{
    console.log("your order is delivered")
},7000)


let count = 10;

let timer = setInterval(()=>{
    if(count>0){
        console.log(`timer is : ${count}....`)
        --count
    }else{
        console.log("Wowwwwwwww!!! your rocket is launched")
        clearInterval(Timer)
    }
},1000)