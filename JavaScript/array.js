//Array
const arr = [1,4,5,6,7];
console.log(typeof arr);
console.log(Array.isArray(arr));

//Insertion in Array
const arr1 = new Array();
arr1[0]= 3
console.log(arr1)

//Array Operations
const arrmethod = ['a', 'b', 'c', 'd', 'e'];
arrmethod.push('q')
console.log(arrmethod)
arrmethod.pop()
arrmethod.pop()
console.log(arrmethod)
arrmethod.unshift('43')
console.log(arrmethod)

let concatinationarray= [1,2,3,4,5]
let concat2 = [3,4,5]
concat2 = [...concatinationarray , ...concat2]
console.log(concat2)


function infy (...args){
    console.log(args)
}

infy(10,10);
infy(8);
infy(45, "Rohit SHarma");
infy (18, "Virat");

function sum(...numbers){
    let total=0;
    for( let num of numbers){
        total += num;
    }
    return total;
}

console.log(sum(2,3));
console.log(sum(1,1,2));
console.log(sum(1));
console.log(sum(1,6,7,7,8,9,0));


