//console.log(this)
const obj = {
    "name" : "Aayush",
    age : 27,
    married : false,
    newfun : function (){
        //console.log(`this is calling a value ${this}`)
        console.log(`this is second console ${this.name} $ {this.age}`)
    }
}

const obj2 = new Object({

})

const obj3 = {}
obj3.name = "aaayushkumar";
obj3["age"] = 44
delete obj3.name
console.log(obj3)

console.log(obj.newfun())

const car={
    name : "niraj",
    age : 34,
    duniya : "gola hai",
    duniya1 : "chapti hai"
}
for(let obj in car){
    console.log(obj, car[obj]);
}

console.log(this)

function book(title, aurthor, price, access){
    console.log(this)
}

//When you execute JavaScript inside VS Code (which runs via the Node.js runtime) at the root level of a file, console.log(this) prints {} because this points directly to the module's empty exports object, not the global runtime environment.The Underlying MechanicsUnlike web browsers where the top-level this refers to the global window object, Node.js handles file executions using the CommonJS module system.Behind the scenes, Node.js wraps the code of your entire file inside an invisible, immediately-invoked function wrapper before running it.

const department = {
    code :"frontend",
    backcode : "backend",
    server : "host",
    deploy(){
        console.log(`this is calling a value ${this.code} ${this.backcode}`)
    }
}
department.deploy()

function newfun(){
    "use strict"
    console.log(`this is calling a value ${this.code} ${this.backcode}`)
    console.log(this.code)
}

// const newobj = {
//     code :"frontend",
//     backcode : "backend",
//     key1 : function(){
//         const newfun = () => {
//             console.log(`this is calling a value ${this.code} ${this.backcode}`)
//         }
//     }
// }
// newobj.key1()
// newobj.newfun()

function book1(title, author, price, access){
    this.title = title;
    this.author = author;
    this.price = price;
    this.access = access;
}

const book2 = new book1("JavaScript", "Aayush", 200, "free");
console.log(book2)
console.log(book2.title)

