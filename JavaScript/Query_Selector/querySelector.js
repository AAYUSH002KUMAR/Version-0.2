// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// let selecting = document.querySelector('#title');
// let button = document.querySelector('#btn');
// let textchange = document.querySelector('.text');
// let anotherway = document.querySelector('.text');
// // console.log("queryselector selector", anotherway[0]);

// anotherway.forEach((num) => console.log(num))
// anotherway.compareDocumentPosition((num) =>)

// button.addEventListener('click', function() {
//     selecting.textContent = "You clicked the button!";
//     // selecting.innerHTML = "<h1>You clicked the button!</h1>";
//     // selecting.innerText = "<h1>You clicked the button!</h1>";
//     selecting.style.color = "red";
// })

// const list = document.querySelectorAll('.list');
// list.forEach((item, idx) => {
//     item.addEventListener('click', function() {
//     if (idx % 2 === 0) {
//         item.style.color = "red";
//         else{
//             item.style.color = "blue";} 
//     })
// }


// let listselection = document.querySelectorAll('li')
// console.loh(listselection)

// listselection.forEach((index, item) => {
//     console.log(index)
//     console.log(item)
// })


const heading = document.createElement('h1')
heading.innerText = "hello content"
document.body.append("heading")
const paragraph = document.createElement('p')
paragraph.innerText = "this is paragraph"
document.body.append("paragraph")

const image = document.createElement('img')
image.setAttribute('scr', "")
image.getAttribute()

// append vs appendchild
appendchild(heading, "ksdbadsf")

const box = document.getElementById('box');
const addbtn = document.getElementById('addbutton');
const removebutton = document.getElementById('removebtn');
const togglebutton = document.getElementById('togglebtn');