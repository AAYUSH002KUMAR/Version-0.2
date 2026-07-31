const arr10 =["A", "b", "c", "D"]
arr10.push('r')
arr10.pop()
console.log(arr10)

const arr =["A", "b", "c", "D"]

arr.unshift("fsdf", true, 34)
console.log(arr)
arr.shift()
console.log(arr)

const arr1 =["A", "b", "c", "D"]

for (let a of arr1){
    console.log(a)
}
arr1.splice(2,0, "na", true, 34)
arr1.splice(1, 3)
console.log(arr1)

const arr2 =["A", "b", "c", "D"]
arr2[1] = "mah"
console.log(arr2)

const arr4 = Array.from("hello class")
console.log(arr4)

const arr3 = Array.from([2,3,4,5], x => x * x);
console.log(arr3)


const sorting = ["mahesh", "aayush", "Vinod", "Pankaj", "Chandu"]
const numbervalue = [34,5,3,5,24]
sorting.sort()
console.log(sorting)
numbervalue.sort((a,b)=>a-b)
console.log(numbervalue)
