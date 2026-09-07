// Shallow copy example : first layer Orignal main change nhi karega but 
// 2nd or inner layer main reference copy karta hai jis wajah se original main change ho jata hai 
const planeobj = {
    address: "MSIT",
    light: "OFF"
};

const copyplaneobj = { ...planeobj };
copyplaneobj.address = "Janakpuri";
copyplaneobj.light = "ON";

console.log("original object", planeobj);
console.log("copyplaneobj ", copyplaneobj);
console.log("original object", planeobj);
console.log('\n');

// Deep nested object example
const obj = {
    name: "mahes",
    age: 23,
    obj1: {
        name: "mai hoon gain",
        age: 403,
        obj2: {
            firstname: "firstname"
        },
        arr: ["sef", "3rrad", "sdfas"]
    }
};

const newObj = {...obj}
newObj.obj1.name = "Name is change";
newObj.obj1.obj2.firstname = "First  Name Is Change";

console.log("original : ",obj);
console.log("Copyied : ",newObj);

// here is deep copy -- we can change in deep we cant change in original object.
let deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.obj1.name = "Change Name By Deep";
console.log(obj)
console.log(deepCopy);

const var2 = "rujsejah";

function add(){
    let var1 = "ksibjdb";
    const var2 = "Ram";
    return function(){
        console.log(var1);
        console.log(var2);
        return;
    }
}

function incr(){
    let counter = 0;
    return function(){
        counter++;
        return function(){
            console.log(counter);
        }
    }
}