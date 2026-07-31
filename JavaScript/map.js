//Map Function
const arr = [2,2,4,5,6,45,3,56];
arr.map((a)=> a*a)
console.log(arr)

const arr2 = arr.map((a)=> a*a)
console.log(arr2)

const arr3 = arr.filter((num)=>num%2 === 0)
console.log(arr3)

const arr4 = arr.reduce((a,b) => a+b, 0)
console.log(arr4)

//Restructuring of Array
const arr10 = ["2312", "fsdf", "afd"]
const[num1, ,num2, num3] = arr10;
console.log(num2)

const arr15 = [12,4,5, ["dfsd", "fgs",[433242, 543, 4, [53, 534]], 43, true, [34,5,34,6,776], [843, "sdfas"]]]
console.log(arr15.flat(6))