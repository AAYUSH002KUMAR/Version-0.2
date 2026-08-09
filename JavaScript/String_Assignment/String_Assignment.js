//Q1 Check if a String is a Palindrome
let str = "madam";
let reverse = str.split("").reverse().join("");
if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

//Q2 Reverse a String
let str = "hello";
let reverse = str.split("").reverse().join("");
console.log(reverse);

//Q3 Check if Two Strings are Anagrams
let str1 = "listen";
let str2 = "silent";

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

if (a === b) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}

//Q4 Find the Longest Word
let str = "I am learning JavaScript";
let words = str.split(" ");
let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
console.log(longest);

//Q5 Count Number of Words
let str = "I am learning JavaScript";
let words = str.split(" ");
console.log(words.length);

//Q6 Capitalize First Letter of Each Word
let str = "hello world";
let words = str.split(" ");
let result = "";

for (let word of words) {
    result = result + word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(result);

//Q7 Count Vowels
let str = "hello world";
let count = 0;

for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
        count++;
    }
}
console.log(count);

//Q8 Count How Many Times a Substring Occurs
let str = "hello hello hello";
let word = "hello";
let count = str.split(word).length - 1;
console.log(count);

//Q9 Compress a String
function compressString(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result = result + str[i] + count;
            count = 1;
        }
    }
    return result;
}
console.log(compressString("aaabbbccc"));

//Q10 Count Occurrences of Each Letter
let str = "hello";
let count = {};

for (let char of str) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}
console.log(count);

//Q11 Check Character Position
let str = "hello";
let char = "l";

console.log(str.indexOf(char));


//Q12 Check String Ending
function checkEnding(str, target) {
    return str.toLowerCase().endsWith(target.toLowerCase());
}
console.log(checkEnding("JavaScript", "script"));

//Without using endsWith()
function checkEnding(str, target) {
    let lastPart = str.slice(str.length - target.length);
    return lastPart.toLowerCase() === target.toLowerCase();
}
console.log(checkEnding("JavaScript", "script"));

//Q13 Replace Specific Word
function replaceWord(originalString, targetWord, newWord) {
    return originalString.replaceAll(targetWord, newWord);
}
console.log(
    replaceWord("I like JavaScript. JavaScript is easy.", "JavaScript", "Java")
);

//Q14 Remove Whitespace from Both Ends
function removeWhitespace(str) {
    return str.trim();
}
console.log(removeWhitespace("  hello world  "));

//Q15 Extract First N Characters
function extractFirstN(str, n) {
    return str.slice(0, n);
}
console.log(extractFirstN("Developer", 4));

//Q16 Mask Last 4 Digits
function maskString(str) {
    let stars = "#".repeat(str.length - 4);
    return stars + str.slice(-4);
}
console.log(maskString("1234567890"));

//Q17 Check if String Contains a Word
function containsWord(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}
console.log(containsWord("I love JavaScript", "javascript"));

// Q18 Remove All Specific Characters
function removeChar(str, char) {
    return str.split(char).join("");
}
console.log(removeChar("banana", "a"));

// Q19 Repeat a String
function repeatString(str, count) {
    return str.repeat(count);
}
console.log(repeatString("Hi", 3));

// Q20 Toggle Case
let str = "Hello World";
let result = "";

for (let char of str) {
    if (char === char.toUpperCase()) {
        result = result + char.toLowerCase();
    } else {
        result = result + char.toUpperCase();
    }
}
console.log(result);


// Most Important String Methods 

// | Method           | What it does             | Example                     |
// | ---------------- | ------------------------ | --------------------------- |
// | `.length`        | Gives length             | `"hello".length → 5`        |
// | `.toUpperCase()` | Uppercase                | `"hello" → "HELLO"`         |
// | `.toLowerCase()` | Lowercase                | `"HELLO" → "hello"`         |
// | `.split()`       | Converts string to array | `"abc".split("")`           |
// | `.join()`        | Converts array to string | `["a","b"].join("")`        |
// | `.reverse()`     | Reverses array           | `[1,2,3].reverse()`         |
// | `.sort()`        | Sorts array              | `["b","a"].sort()`          |
// | `.includes()`    | Checks presence          | `"hello".includes("ell")`   |
// | `.indexOf()`     | Finds position           | `"hello".indexOf("e")`      |
// | `.slice()`       | Extracts part            | `"hello".slice(1,4)`        |
// | `.trim()`        | Removes outer spaces     | `" hi ".trim()`             |
// | `.replace()`     | Replaces                 | `"hi".replace("h","b")`     |
// | `.replaceAll()`  | Replaces all             | `"aaa".replaceAll("a","b")` |
// | `.repeat()`      | Repeats string           | `"Hi".repeat(3)`            |
// | `.endsWith()`    | Checks ending            | `"hello".endsWith("lo")`    |

