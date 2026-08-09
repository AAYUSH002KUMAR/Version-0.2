//Q1 Creating Arrays & Accessing Items
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);

//Q2 Array Length
const colors = ["red", "blue", "green", "yellow"];
console.log(colors.length);

//Q3 Push & Pop
const numbers = [1, 2, 3];
numbers.push(4);
numbers.pop();
console.log(numbers);

//Q4 Shift & Unshift
const animals = ["cat", "dog"];
animals.unshift("elephant");
animals.shift();
console.log(animals);

//Q5 Finding Index
const scores = [85, 92, 78, 90];
console.log(scores.indexOf(78));

//Q6 Check Inclusion
const items = ["phone", "tablet", "laptop", "watch"];
console.log(items.includes("laptop"));

//Q7 Array to String
const words = ["JavaScript", "is", "awesome"];
let result = words.join(" ");
console.log(result);

//Q8 Iterating with `forEach`
const prices = [10, 20, 30];
prices.forEach(function(price) {
    console.log(price + 5);
});

//Q9 Transforming with `map`
const nums = [1, 2, 3, 4, 5];
const squared = nums.map(function(num) {
    return num * num;
});
console.log(squared);

//Q10 Filtering with `filter`
const ages = [12, 18, 25, 8, 30, 15];
const adults = ages.filter(function(age) {
    return age >= 18;
});
console.log(adults);

//Q11 Finding an Element with `find`
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"}
];
const user = users.find(function(user) {
    return user.id === 2;
});
console.log(user);

//Q12 Slice vs Splice
//slice()
let arr = ["a", "b", "c", "d"];
let middle = arr.slice(1, 3);
console.log(middle);

//splice()
let arr = ["a", "b", "c", "d"];
arr.splice(2, 1);
console.log(arr);

//Q13 Sorting Numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return a - b;
});
console.log(points);

//Q14 Merging Arrays
//Method 1 — concat()
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);
console.log(result);

//Method 2 — Spread Operator
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);

//Q15 reduce() — Calculate Sum
const expenses = [50, 100, 25, 75];
const total = expenses.reduce(function(sum, expense) {
    return sum + expense;
}, 0);
console.log(total);

//Q16 Flattening Arrays with `flat()`
const nested = [1, [2, [3, 4]], 5];
const result = nested.flat(2);
console.log(result);

//Q17 every() and some()
// Part A — Are ALL numbers even?
const numbers = [2, 4, 6, 8, 9];
const allEven = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log(allEven);

//Part B — Is AT LEAST ONE number odd?
const numbers = [2, 4, 6, 8, 9];
const hasOdd = numbers.some(function(num) {
    return num % 2 !== 0;
});
console.log(hasOdd);

// Q18 Remove Duplicates
const duplicateArr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(duplicateArr)];
console.log(uniqueArr);

//Q19 Grouping Data with `reduce()`
const inventory = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" }
];
const result = inventory.reduce(function(count, item) {
    if (count[item.type]) {
        count[item.type]++;
    } else {
        count[item.type] = 1;
    }
    return count;
}, {});
console.log(result);

//Q20 Two Sum
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));


//Array Methods

// | Method        | Purpose               | Example           |
// | ------------- | --------------------- | ----------------- |
// | `.length`     | Count elements        | `arr.length`      |
// | `.push()`     | Add to end            | `arr.push(5)`     |
// | `.pop()`      | Remove from end       | `arr.pop()`       |
// | `.unshift()`  | Add to beginning      | `arr.unshift(5)`  |
// | `.shift()`    | Remove from beginning | `arr.shift()`     |
// | `.indexOf()`  | Find index            | `arr.indexOf(5)`  |
// | `.includes()` | Check existence       | `arr.includes(5)` |
// | `.join()`     | Array → String        | `arr.join(" ")`   |
// | `.forEach()`  | Loop through array    | `arr.forEach()`   |
// | `.map()`      | Transform elements    | `arr.map()`       |
// | `.filter()`   | Select elements       | `arr.filter()`    |
// | `.find()`     | Find one element      | `arr.find()`      |
// | `.slice()`    | Extract elements      | `arr.slice(1,3)`  |
// | `.splice()`   | Add/remove elements   | `arr.splice(2,1)` |
// | `.sort()`     | Sort array            | `arr.sort()`      |
// | `.concat()`   | Merge arrays          | `a.concat(b)`     |



// | Method     | Meaning                         | Example            |
// | ---------- | ------------------------------- | ------------------ |
// | `reduce()` | Convert array into one result   | Sum                |
// | `flat()`   | Remove nested arrays            | `[1,[2,3]].flat()` |
// | `every()`  | Check if ALL satisfy condition  | All even?          |
// | `some()`   | Check if AT LEAST ONE satisfies | Any odd?           |
// | `Set`      | Store unique values             | Remove duplicates  |
// | `...`      | Spread elements                 | Copy/merge arrays  |

// Easy way to remember:

// map      → CHANGE every element
// filter   → SELECT elements
// find     → FIND one element
// forEach  → DO something for each
// reduce   → COMBINE into one result
// every    → ARE ALL?
// some     → IS AT LEAST ONE?
// flat     → REMOVE nesting
// Set      → REMOVE duplicates
