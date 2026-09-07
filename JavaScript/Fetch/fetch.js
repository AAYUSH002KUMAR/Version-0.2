// let fetch_api = new Promise()
// fetch_api.all()
// fetch_api.any()
// fetch_api.race()
// fetch_api.settled()
// fetch_api.finally()


// const mypromise = new Promise ((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise resolved")
//     }else{
//         reject("Promise rejected")
//     }
// })

// mypromise.then(()=>{

// }).catch(()=>{

// })

// function abcd(){

// }

// async await
// async function abc(){
//     let name1 = await "mahesh"
// }
// abc()
// abcd()

const data = fetch('https://dummyjson.com/products')
data.then((data1)=>console.log(data1.json()))
data.then((data1)=>console.log(data1))
data.catch((e)=>{
    console.log(e)
})