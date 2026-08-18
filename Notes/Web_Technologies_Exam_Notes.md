# WEB TECHNOLOGIES — COMPLETE EXAM NOTES

> 72 topics · JS + CSS + HTML · Exam & viva focused

---

# JAVASCRIPT

## 1. JavaScript Introduction & Features [HIGH PRIORITY]

**Definition:** JavaScript (JS) is a lightweight, interpreted, high-level programming language that makes web pages interactive. It runs in the browser (client-side) and also on servers via Node.js.

**Why used:** HTML gives structure, CSS gives style, JS gives *behavior* — it responds to clicks, validates forms, updates content without reloading the page, talks to servers, etc.

**Core Concepts:**
- Interpreted/JIT-compiled, not compiled ahead of time like C/Java.
- Dynamically typed — variable types decided at runtime.
- Single-threaded with an event loop (handles async operations like timers, network calls).
- Multi-paradigm: supports procedural, object-oriented (prototype-based), and functional styles.
- Can run in browser (client-side) or Node.js (server-side).

**Real-World Use:** Form validation, dynamic dropdowns, shopping cart updates, live search suggestions, SPA frameworks (React/Angular/Vue) are all built on JS.

**Viva Questions:**
- Q: Is JavaScript the same as Java? A: No. Only the name is similar; syntax/purpose are different. JS is for web scripting, Java is a general-purpose OOP language.
- Q: Is JS compiled or interpreted? A: Traditionally interpreted; modern engines (V8) use JIT compilation for speed.
- Q: Where can JS run? A: Browser (client-side) and Node.js (server-side).

**Explain to Teacher:** "JavaScript is the scripting language that adds interactivity to web pages. While HTML structures content and CSS styles it, JavaScript lets us respond to user actions, manipulate the DOM, validate forms, and communicate with servers asynchronously. It's dynamically typed, runs mainly in the browser's JS engine, and uses a single-threaded event loop to handle asynchronous tasks like timers and API calls without blocking the page."

**Quick Revision:**
- JS = behavior layer of the web
- Dynamically typed, single-threaded, event loop based
- Runs client-side (browser) & server-side (Node.js)

---

## 2. Variables (var, let, const) [HIGH PRIORITY]

**Definition:** Variables store data values. JS has three ways to declare them: `var`, `let`, `const`.

**Why used:** To store and reuse data (numbers, strings, objects) throughout a program.

**Syntax:**
```js
var a = 10;
let b = 20;
const c = 30;
```

**Core Concepts:**
- `var`: function-scoped, hoisted (initialized as `undefined`), can be redeclared/updated.
- `let`: block-scoped, hoisted but not initialized (Temporal Dead Zone), can be updated not redeclared in same scope.
- `const`: block-scoped, must be initialized at declaration, cannot be reassigned (but object/array *contents* can still be mutated).

**Important Differences:**

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Hoisting | Hoisted + initialized (`undefined`) | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |
| Global object property | Yes | No | No |

**Common Mistakes:** Using `var` inside loops expecting block scoping (leads to closure bugs); trying to reassign `const`; assuming `const` makes objects immutable (it doesn't — only the binding is fixed).

**Viva Questions:**
- Q: Can we change value of a const object's property? A: Yes, `const` only prevents reassigning the variable, not mutating object/array contents.
- Q: Why avoid var? A: Function-scoping causes bugs; let/const give predictable block scoping.
- Q: What is TDZ? A: Temporal Dead Zone — time between entering scope and the `let`/`const` declaration line, where accessing the variable throws a ReferenceError.

**Explain to Teacher:** "var, let and const are ways to declare variables. var is function-scoped and can be redeclared, which often causes bugs, so modern JS prefers let and const. let is block-scoped and can be reassigned, while const is also block-scoped but cannot be reassigned after initialization — though if it holds an object or array, we can still modify its internal properties."

**Quick Revision:**
- var: function scope, hoisted+undefined, avoid using it
- let: block scope, reassignable
- const: block scope, not reassignable, mutable contents

---

## 3. Data Types [HIGH PRIORITY]

**Definition:** Categories of values JS can work with.

**Core Concepts — Primitive types (7):** `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`, `BigInt`.
**Non-primitive (reference) type:** `Object` (includes arrays, functions, dates).

**Examples:**
```js
let n = 25;            // Number
let s = "hello";        // String
let b = true;           // Boolean
let u;                  // undefined
let x = null;           // null
let obj = {a:1};        // Object
let arr = [1,2,3];      // Object (Array)
```

**Important Differences:**

| | Primitive | Reference (Object) |
|---|---|---|
| Storage | Stored by value | Stored by reference |
| Copy behavior | Copy creates new independent value | Copy shares same memory reference |
| Example | Number, String, Boolean | Object, Array, Function |

**Common Mistakes:** Confusing `null` (intentional empty value) with `undefined` (variable declared but not assigned); `typeof null` returns `"object"` (a known JS quirk/bug).

**Viva Questions:**
- Q: Difference between null and undefined? A: `undefined` = variable declared but no value assigned; `null` = explicitly assigned "no value" by programmer.
- Q: typeof null? A: `"object"` (historical JS bug, widely known).
- Q: Is Array a primitive type? A: No, arrays are objects.

**Explain to Teacher:** "JavaScript has primitive data types — Number, String, Boolean, undefined, null, Symbol, and BigInt — which are stored by value. Everything else, like objects and arrays, is a reference type stored by reference. The key practical difference is that copying a primitive creates an independent value, while copying an object copies the reference, so both variables point to the same data."

**Quick Revision:**
- 7 primitives + Object
- Primitives = by value; Objects = by reference
- typeof null === "object" (quirk)

---

## 4. Operators

**Definition:** Symbols that perform operations on values/variables.

**Core Concepts:**
- Arithmetic: `+ - * / % **`
- Assignment: `= += -= *= /=`
- Comparison: `== != === !== > < >= <=`
- Logical: `&& || !`
- Ternary: `condition ? a : b`
- Nullish coalescing: `??` (returns right side only if left is null/undefined)
- Optional chaining: `?.` (safely access nested properties)

**Examples:**
```js
5 + "5"       // "55" (string concatenation)
5 == "5"      // true (loose, type coercion)
5 === "5"     // false (strict, checks type too)
let x = null ?? "default";  // "default"
user?.address?.city;        // no error even if address is undefined
```

**Important Differences:**

| Operator | Checks | Example |
|---|---|---|
| `==` | Value only (coerces types) | `5 == "5"` → true |
| `===` | Value + type | `5 === "5"` → false |

**Common Mistakes:** Using `==` instead of `===` leading to unexpected coercion bugs; confusing `??` with `||` (`||` treats `0`, `""`, `false` as falsy too, `??` only checks null/undefined).

**Viva Questions:**
- Q: Why prefer === over ==? A: Avoids unintended type coercion bugs; predictable comparisons.
- Q: Difference between ?? and ||? A: `??` only falls back on `null`/`undefined`; `||` falls back on any falsy value (0, "", false, NaN too).

**Explain to Teacher:** "Operators let us perform arithmetic, comparisons, and logic on values. The important one for exams is the difference between == and ===: == performs type coercion before comparing, while === checks both value and type, which is why it's the recommended practice."

**Quick Revision:**
- Always prefer === and !==
- ?? checks null/undefined only, || checks all falsy values
- Optional chaining `?.` avoids "cannot read property of undefined" errors

---

## 5. Type Conversion & Type Coercion

**Definition:** Type conversion = explicitly changing a value's type (`Number("5")`). Type coercion = JS automatically converting types during operations (`"5" + 1` → `"51"`).

**Core Concepts:**
- Explicit conversion functions: `String()`, `Number()`, `Boolean()`.
- Implicit coercion happens with `+`, `==`, in conditionals, etc.
- `+` with a string operand → string concatenation. Other arithmetic operators (`- * /`) try to convert to numbers.
- Falsy values in JS: `false, 0, "", null, undefined, NaN`. Everything else is truthy.

**Examples:**
```js
Number("42")     // 42 (explicit)
String(42)        // "42" (explicit)
"5" + 1            // "51" (coercion, string wins)
"5" - 1            // 4 (coercion, number wins)
Boolean("")        // false
Boolean("0")       // true (non-empty string is truthy!)
```

**Common Mistakes:** Assuming `"0"` or `" "` are falsy — they are truthy since they're non-empty strings; forgetting `+` behaves differently from `-`/`*`/`/` with mixed types.

**Viva Questions:**
- Q: Is "0" truthy or falsy? A: Truthy — only the empty string `""` is falsy, not `"0"`.
- Q: What are the 6 falsy values? A: `false, 0, "", null, undefined, NaN`.

**Explain to Teacher:** "Type conversion is when we manually convert a value's type using functions like Number() or String(). Type coercion is JavaScript doing this automatically, most commonly seen with the + operator, where if either operand is a string, JS converts the other to a string too and concatenates."

**Quick Revision:**
- Explicit = you do it; Coercion = JS does it automatically
- `+` prefers string concat; `- * /` prefer numeric conversion
- Memorize the 6 falsy values

---

## 6. Conditional Statements

**Definition:** Statements that execute code based on a condition.

**Syntax:**
```js
if (condition) { }
else if (condition2) { }
else { }

switch(x) {
  case 1: /*...*/ break;
  default: /*...*/
}
```

**Core Concepts:** `if/else if/else` for range/complex logic; `switch` for comparing one value against many fixed cases (uses `===` internally); always use `break` in switch to avoid fall-through (unless intentional).

**Common Mistakes:** Forgetting `break` in switch causes fall-through to next case; using `=` instead of `==`/`===` inside `if` condition.

**Viva Questions:**
- Q: When to use switch over if-else? A: When comparing one variable against many discrete values — more readable.
- Q: What happens without break in switch? A: Execution "falls through" to the next case regardless of match.

**Quick Revision:** if-else = general condition logic; switch = multi-way fixed-value comparison; don't forget `break`.

---

## 7. Loops [HIGH PRIORITY]

**Definition:** Loops repeat a block of code multiple times.

**Core Concepts / Syntax:**
```js
for (let i = 0; i < 5; i++) { }          // counter-based
while (condition) { }                     // pre-tested
do { } while (condition);                 // post-tested, runs at least once
for (let item of array) { }               // iterates VALUES (arrays, strings)
for (let key in object) { }               // iterates KEYS (objects)
```

**Important Differences:**

| Loop | Best For |
|---|---|
| for | Known number of iterations |
| while | Unknown iterations, condition-based |
| do-while | Must run at least once |
| for...of | Iterating values of iterable (array, string) |
| for...in | Iterating keys of an object |

**Common Mistakes:** Using `for...in` on arrays (iterates indices as strings, unreliable order, not recommended); infinite loops from wrong update conditions.

**Viva Questions:**
- Q: for...of vs for...in? A: for...of gives values (used with arrays/iterables), for...in gives keys (used with objects).
- Q: Difference between while and do-while? A: do-while always executes the body at least once before checking the condition.

**Explain to Teacher:** "Loops let us repeat code. for is used when we know the number of iterations, while is condition-based and may run zero times, and do-while guarantees at least one execution. For iterables like arrays we use for...of to get values directly, and for objects we use for...in to get keys."

**Quick Revision:** for = known count; while = condition-based; do-while = runs once minimum; for-of = values; for-in = keys (objects).

---

## 8. Scope [HIGH PRIORITY]

**Definition:** Scope determines where a variable is accessible in code.

**Core Concepts:**
- **Global scope:** declared outside any function/block, accessible everywhere.
- **Function scope:** `var` variables are visible anywhere inside the function.
- **Block scope:** `let`/`const` variables are visible only inside `{ }` where declared.
- **Lexical scoping:** inner functions have access to variables of their outer (enclosing) function — basis of closures.

**Examples:**
```js
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // 10 — lexical scope access
  }
  inner();
}
```

**Common Mistakes:** Assuming `var` respects block scope like `if`/`for` blocks — it doesn't, it leaks to function scope.

**Viva Questions:**
- Q: What is lexical scope? A: A function's access to variables is determined by where it's physically written in code, i.e., its outer/enclosing scope.
- Q: Does var respect block scope? A: No, only function scope.

**Explain to Teacher:** "Scope defines where a variable can be accessed. Global scope is accessible everywhere, function scope is limited to inside a function, and block scope (from let/const) is limited to the nearest curly braces. JavaScript also uses lexical scoping, meaning nested functions can access variables from their outer functions based on where they're written."

**Quick Revision:** Global > Function > Block; var ignores block scope; let/const respect block scope; lexical scope = basis of closures.

---

## 9. Hoisting [HIGH PRIORITY]

**Definition:** Hoisting is JS's behavior of moving variable and function *declarations* to the top of their scope during the compile phase, before code execution.

**Core Concepts:**
- `var` declarations are hoisted and initialized with `undefined`.
- `let`/`const` are hoisted but NOT initialized — accessing before declaration throws ReferenceError (Temporal Dead Zone).
- Function declarations are fully hoisted (can be called before their definition in code).
- Function expressions/arrow functions assigned to variables are NOT hoisted with their function body — only the variable hoisting rule applies.

**Examples:**
```js
console.log(a); // undefined (var hoisted)
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 5;

greet(); // works — function declarations fully hoisted
function greet(){ console.log("hi"); }
```

**Common Mistakes:** Assuming let/const are not hoisted at all (they are hoisted, just not initialized); calling a function expression before its assignment line.

**Viva Questions:**
- Q: Is let hoisted? A: Yes, but it stays in the Temporal Dead Zone until the declaration line executes.
- Q: Why does var give undefined but let gives an error when accessed early? A: var is hoisted AND initialized to undefined; let is hoisted but not initialized.

**Explain to Teacher:** "Hoisting means JavaScript moves declarations to the top of their scope before running the code. With var, the variable is hoisted and set to undefined, so accessing it early doesn't crash — it just gives undefined. With let and const, they're hoisted but stay in the Temporal Dead Zone, so accessing them before their declaration throws an error. Function declarations are hoisted completely, so we can call them before they appear in the code."

**Quick Revision:** var → hoisted + undefined; let/const → hoisted but TDZ error; function declarations → fully hoisted; function expressions → not hoisted with body.

---

## 10. Functions [HIGH PRIORITY]

**Definition:** A function is a reusable block of code that performs a task, optionally taking inputs (parameters) and returning an output.

**Syntax:**
```js
function add(a, b) {       // function declaration
  return a + b;
}

const sub = function(a, b) {  // function expression
  return a - b;
};
```

**Core Concepts:**
- Parameters vs arguments: parameters are placeholders in definition, arguments are actual values passed.
- Default parameters: `function f(a=10){}`
- Return statement sends a value back; without it, function returns `undefined`.
- Function declarations are hoisted; function expressions are not.
- Functions are first-class citizens in JS — can be stored in variables, passed as arguments, returned from other functions.

**Common Mistakes:** Forgetting `return` and expecting a value; confusing parameters with arguments.

**Viva Questions:**
- Q: What does "functions are first-class citizens" mean? A: Functions can be treated like any other value — assigned to variables, passed as arguments, returned from functions.
- Q: Function declaration vs expression? A: Declaration is hoisted and named; expression is assigned to a variable and not hoisted with its body.

**Explain to Teacher:** "A function is a reusable block of code. In JavaScript, functions are first-class citizens, meaning we can store them in variables, pass them as arguments to other functions, and return them from functions. This is what enables patterns like callbacks and higher-order functions."

**Quick Revision:** function declaration = hoisted; function expression = not hoisted; functions = first-class citizens; no return → undefined.

---

## 11. Arrow Functions [HIGH PRIORITY]

**Definition:** A concise syntax for writing function expressions, introduced in ES6.

**Syntax:**
```js
const add = (a, b) => a + b;         // implicit return
const square = x => x * x;            // single param, no parens needed
const greet = () => { console.log("hi"); };  // block body needs explicit return
```

**Core Concepts:**
- Shorter syntax, especially useful for callbacks.
- Does **NOT** have its own `this` — it inherits `this` from the surrounding (lexical) scope. Regular functions have their own dynamic `this` based on how they're called.
- Cannot be used as constructors (no `new`).
- No `arguments` object (must use rest parameters instead).

**Important Differences:**

| | Regular Function | Arrow Function |
|---|---|---|
| `this` binding | Dynamic (depends on caller) | Lexical (inherited from outer scope) |
| Can be constructor | Yes | No |
| `arguments` object | Yes | No |
| Hoisting (as expression) | No | No |

**Common Mistakes:** Using arrow functions as object methods when you need `this` to refer to the object (it won't — it refers to outer scope instead).

**Viva Questions:**
- Q: Main difference between arrow and normal function? A: Arrow functions don't have their own `this`; they inherit it lexically from where they're defined.
- Q: Can arrow functions be used as constructors? A: No.

**Explain to Teacher:** "Arrow functions are a shorter syntax for writing functions, introduced in ES6. The most important difference from regular functions is how they handle 'this' — arrow functions don't have their own this; they inherit it from the enclosing scope. This makes them very useful in callbacks where we want to preserve the outer this, but unsuitable as object methods or constructors."

**Quick Revision:** Concise syntax; lexical `this`; no `arguments` object; can't be constructors; great for callbacks.

---

## 12. Arrays [HIGH PRIORITY]

**Definition:** An array is an ordered, index-based collection used to store multiple values in a single variable.

**Syntax:**
```js
let arr = [1, 2, 3, "four", true];
arr[0];        // 1 (zero-indexed)
arr.length;    // 5
```

**Core Concepts:**
- Zero-indexed, dynamic size (can grow/shrink), can hold mixed data types.
- Arrays are objects in JS (`typeof arr === "object"`), but `Array.isArray(arr)` confirms it's an array.
- Multi-dimensional arrays: arrays containing arrays.

**Common Mistakes:** Using `typeof` to check for array (gives `"object"`) instead of `Array.isArray()`.

**Viva Questions:**
- Q: How to check if a variable is an array? A: `Array.isArray(variable)`.
- Q: Are arrays primitive? A: No, they are reference-type objects.

**Explain to Teacher:** "An array is an ordered collection that stores multiple values under one variable name, accessed by numeric index starting from zero. Arrays in JavaScript are dynamically sized and can hold mixed data types since, technically, arrays are a special type of object."

**Quick Revision:** Zero-indexed; dynamic; mixed types allowed; technically an object; use Array.isArray() to check type.

---

## 13. Array Methods [HIGH PRIORITY]

**Definition:** Built-in functions to manipulate/transform arrays.

**Core Concepts (grouped):**

*Mutating (change original array):* `push()` add to end, `pop()` remove from end, `shift()` remove from start, `unshift()` add to start, `splice()` add/remove at any index, `sort()`, `reverse()`.

*Non-mutating (return new array/value):* `map()` transforms each element into a new array, `filter()` returns elements matching a condition, `reduce()` accumulates array into a single value, `forEach()` loops without returning anything, `find()` returns first matching element, `includes()` checks presence, `slice()` extracts a portion without modifying original, `concat()`, `join()`.

**Examples:**
```js
let nums = [1,2,3,4];
nums.map(n => n*2);          // [2,4,6,8] - new array
nums.filter(n => n%2===0);   // [2,4] - new array
nums.reduce((acc,n)=>acc+n,0); // 10 - single value
nums.forEach(n => console.log(n)); // no return, just side effect
```

**Important Differences:**

| Method | Returns | Mutates Original? |
|---|---|---|
| map | new array | No |
| filter | new array | No |
| reduce | single value | No |
| forEach | undefined | No |
| push/pop | new length/removed item | Yes |
| splice | removed items | Yes |
| slice | new array (portion) | No |

**Common Mistakes:** Confusing `slice` (non-mutating, extracts a copy) with `splice` (mutating, changes original); expecting `forEach` to return a new array (it returns `undefined`).

**Viva Questions:**
- Q: map vs forEach? A: map returns a new transformed array; forEach just executes a function for each element and returns undefined.
- Q: slice vs splice? A: slice() doesn't modify original array and returns a portion; splice() modifies the original by adding/removing elements.
- Q: What does reduce do? A: Reduces an array to a single accumulated value (sum, max, object, etc.) using a callback and an accumulator.

**Explain to Teacher:** "JavaScript arrays have many built-in methods. map transforms every element and returns a new array, filter returns only elements matching a condition, and reduce combines all elements into a single value like a sum or total. These are non-mutating — they don't change the original array — unlike methods like push, pop, or splice, which do modify it directly."

**Quick Revision:** map = transform; filter = select; reduce = accumulate; forEach = iterate (no return); slice = copy portion; splice = mutate in place; push/pop/shift/unshift = mutate ends.

---

## 14. Strings & String Methods

**Definition:** A string is a sequence of characters used to represent text; it's a primitive, immutable data type.

**Core Concepts:**
- Immutable: string methods return NEW strings, they never change the original.
- Common methods: `length`, `toUpperCase()`, `toLowerCase()`, `trim()`, `slice(start,end)`, `substring()`, `split(delimiter)`, `replace()`, `includes()`, `indexOf()`, `charAt()`, `concat()`.
- Template literals (ES6): `` `Hello ${name}` `` — allow embedded expressions and multi-line strings.

**Examples:**
```js
let s = "Hello World";
s.toUpperCase();        // "HELLO WORLD"
s.split(" ");            // ["Hello","World"]
s.includes("World");     // true
let name = "Aayush";
`Hi, ${name}!`;           // "Hi, Aayush!"
```

**Common Mistakes:** Trying to mutate a string directly (`s[0]='H'` does nothing, strings are immutable); confusing `slice` with `substring` (substring doesn't accept negative indices).

**Viva Questions:**
- Q: Are strings mutable in JS? A: No, strings are immutable primitives; methods return new strings.
- Q: What are template literals? A: Backtick strings allowing variable interpolation (`${}`) and multi-line text.

**Quick Revision:** Strings are immutable; template literals use backticks + `${}`; split() ↔ join() are opposite array/string conversions.

---

## 15. Objects [HIGH PRIORITY]

**Definition:** An object is a collection of key-value pairs used to store structured, related data.

**Why used:** To model real-world entities (a "user" has name, age, email) as a single structure instead of many separate variables.

**Syntax:**
```js
let person = {
  name: "Aayush",
  age: 22,
  greet: function() { console.log("Hi " + this.name); }
};
person.name;        // dot notation → "Aayush"
person["age"];       // bracket notation → 22
person.greet();      // "Hi Aayush"
```

**Core Concepts:**
- Keys (properties) are strings (or Symbols); values can be any data type, including functions (called "methods").
- Dot notation vs bracket notation: bracket notation needed for dynamic/variable keys or keys with spaces.
- `this` inside a method refers to the object calling it.
- Objects are reference types — assigning `obj2 = obj1` copies the reference, not the data.

**Common Mistakes:** Assuming objects are copied by value like primitives (they're copied by reference); confusing when to use bracket vs dot notation.

**Viva Questions:**
- Q: When must you use bracket notation instead of dot? A: When the key is dynamic (stored in a variable) or contains spaces/special characters.
- Q: Are objects passed by value or reference? A: By reference.

**Explain to Teacher:** "An object is a key-value data structure used to represent a real-world entity with multiple related properties, like a user having a name, age, and email. We access properties using dot notation or bracket notation, and objects are reference types, meaning if we copy an object to another variable, both point to the same underlying data."

**Quick Revision:** key-value pairs; reference type; dot vs bracket notation; `this` refers to the calling object.

---

## 16. Object Methods & Destructuring [HIGH PRIORITY]

**Core Concepts:**
- `Object.keys(obj)` → array of keys.
- `Object.values(obj)` → array of values.
- `Object.entries(obj)` → array of [key,value] pairs.
- **Destructuring:** shorthand to unpack values from objects/arrays into variables.

**Examples:**
```js
const { name, age } = person;      // object destructuring
const [a, b] = [1, 2];              // array destructuring
const { name: n = "Guest" } = {};   // rename + default value

Object.keys(person);     // ["name","age","greet"]
Object.entries(person);  // [["name","Aayush"],["age",22],...]
```

**Common Mistakes:** Mismatched variable names in object destructuring (must match key name unless renamed with `:`).

**Viva Questions:**
- Q: What is destructuring used for? A: Extracting values from objects/arrays into individual variables concisely, commonly used with function parameters and React props.
- Q: Object.keys vs Object.entries? A: keys() gives only property names; entries() gives [key,value] pairs.

**Quick Revision:** Destructuring = shortcut extraction; Object.keys/values/entries = iterate object data.

---

## 17. Spread & Rest Operators [HIGH PRIORITY]

**Definition:** Both use `...` syntax but for opposite purposes: **Spread** expands an iterable into individual elements; **Rest** collects multiple elements into an array.

**Examples:**
```js
// Spread — expanding
let arr1 = [1,2,3];
let arr2 = [...arr1, 4, 5];     // [1,2,3,4,5]
let obj2 = {...obj1, age: 23};   // copy + override

// Rest — collecting
function sum(...nums) {          // nums = [1,2,3,...]
  return nums.reduce((a,b)=>a+b);
}
```

**Important Differences:**

| | Spread | Rest |
|---|---|---|
| Purpose | Expands elements out | Collects elements into array |
| Position | Used in array/object literals, function calls | Used in function parameters, destructuring |
| Example | `[...arr]` | `function f(...args)` |

**Common Mistakes:** Confusing the two just because syntax looks identical — context (where it's used) decides which one it is.

**Viva Questions:**
- Q: How do you tell spread from rest? A: Spread expands values (used when creating arrays/objects/passing args); rest gathers values (used in function parameter lists).
- Q: How to shallow-copy an object? A: `{...obj}`.

**Explain to Teacher:** "Spread and rest both use the three-dot syntax but do opposite things. Spread expands an array or object into individual elements — useful for copying or merging arrays/objects. Rest does the reverse: it collects multiple function arguments into a single array, which is handy when a function needs to accept a variable number of arguments."

**Quick Revision:** Spread = expand (`...arr` → individual items); Rest = collect (individual items → `...args` array); same syntax, opposite direction, context decides.

---

## 18. DOM (Document Object Model) [HIGH PRIORITY]

**Definition:** The DOM is a programming interface/tree representation of an HTML document, where each element, attribute, and piece of text is a node/object that JavaScript can access and manipulate.

**Why used:** HTML by itself is static. The DOM lets JavaScript read and change page content, structure, and style dynamically after the page loads.

**Core Concepts:**
- Browser parses HTML into a tree structure: `document` → `html` → `head`/`body` → child elements.
- JS interacts with this tree via the `document` object.
- DOM is NOT HTML or JS — it's the browser's in-memory object representation connecting the two.
- Changes to the DOM update immediately what's visible on screen (re-render).

**Real-World Use:** Every dynamic webpage feature — toggling a menu, updating a cart count, live form validation — works by manipulating the DOM.

**Viva Questions:**
- Q: Is DOM part of JavaScript? A: No — DOM is a browser-provided API/interface; JS is just the language used to interact with it.
- Q: What does DOM stand for and represent? A: Document Object Model — a tree-structured representation of the HTML page that can be manipulated programmatically.
- Q: Why is DOM manipulation sometimes slow? A: Because it can trigger reflow/repaint of the page; excessive direct DOM changes are expensive.

**Explain to Teacher:** "The DOM, or Document Object Model, is the browser's tree-like representation of an HTML page, where every tag becomes a node object. JavaScript doesn't directly control the webpage — it interacts with this DOM tree using the document object, and any changes we make to DOM nodes are immediately reflected visually on the page. This is what makes JavaScript able to dynamically update content without reloading."

**Quick Revision:** DOM = tree representation of HTML; browser API, not JS itself; `document` is the entry point; changes reflect live on page.

---

## 19. DOM Manipulation [HIGH PRIORITY]

**Core Concepts:**

*Selecting elements:*
```js
document.getElementById("id");
document.getElementsByClassName("cls");   // HTMLCollection
document.getElementsByTagName("p");
document.querySelector(".cls");            // first match, CSS-selector syntax
document.querySelectorAll(".cls");         // all matches, NodeList
```

*Modifying content/style:*
```js
el.innerText = "Hello";          // sets visible text
el.innerHTML = "<b>Hi</b>";      // sets HTML (careful: XSS risk)
el.style.color = "red";
el.setAttribute("src", "img.png");
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
```

*Creating/removing elements:*
```js
let div = document.createElement("div");
parent.appendChild(div);
parent.removeChild(div);
el.remove();
```

**Important Differences:**

| Method | Returns | Live? |
|---|---|---|
| getElementById | Single element | — |
| getElementsByClassName | HTMLCollection | Live (auto-updates) |
| querySelectorAll | NodeList | Static (snapshot) |

**Common Mistakes:** Using `innerHTML` with untrusted user input (XSS security risk) instead of `innerText`/`textContent`; forgetting `querySelectorAll` returns a NodeList, not an array (though it does support `forEach`).

**Viva Questions:**
- Q: innerText vs innerHTML? A: innerText sets/gets only visible text (safe); innerHTML sets/gets raw HTML markup (can execute injected scripts if not sanitized).
- Q: getElementsByClassName vs querySelectorAll? A: getElementsByClassName returns a live HTMLCollection (auto-updates with DOM changes); querySelectorAll returns a static NodeList (snapshot at call time), and accepts full CSS selectors.

**Explain to Teacher:** "DOM manipulation means selecting elements using methods like getElementById or querySelector, and then changing their content, attributes, or styles using properties like innerText, style, or classList. We can also dynamically create new elements with createElement and attach them using appendChild, which is how JavaScript builds interactive interfaces."

**Quick Revision:** querySelector/All = modern, CSS-selector based; innerText = safe text; innerHTML = raw HTML (XSS risk); classList.add/remove/toggle for classes; createElement + appendChild to add new nodes.

---

## 20. Events & Event Handling [HIGH PRIORITY]

**Definition:** Events are actions/occurrences (click, keypress, page load, form submit) that JS can "listen" for and respond to.

**Syntax:**
```js
button.addEventListener("click", function(event) {
  console.log("Clicked!", event.target);
});

// Removing
function handler(){ }
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);
```

**Core Concepts:**
- `addEventListener(type, callback)` is the modern, preferred way (allows multiple listeners on same element, unlike `onclick="..."` inline attribute).
- The `event` object passed to the handler has useful properties: `event.target` (element that triggered event), `event.preventDefault()` (stops default browser behavior, e.g., form submission/link navigation), `event.stopPropagation()` (stops bubbling).
- Common event types: `click`, `submit`, `keydown/keyup`, `mouseover/mouseout`, `change`, `input`, `load`, `DOMContentLoaded`.

**Common Mistakes:** Using inline `onclick=""` HTML attributes (mixes structure with behavior — bad practice); forgetting `event.preventDefault()` when handling form submission (page reloads unexpectedly).

**Viva Questions:**
- Q: Why prefer addEventListener over onclick attribute? A: Allows multiple handlers on one element, keeps JS separate from HTML (separation of concerns), more control (capturing/bubbling phase).
- Q: What does preventDefault() do? A: Stops the browser's default action for that event, e.g., prevents a form from actually submitting/reloading the page.

**Explain to Teacher:** "Events are actions like clicks or key presses that the browser notifies us about. We handle them using addEventListener, which attaches a callback function that runs when the event occurs. The callback receives an event object giving details like which element triggered it, and methods like preventDefault to stop default browser behavior, such as a form actually submitting and reloading the page."

**Quick Revision:** addEventListener = preferred method; event.target = triggering element; preventDefault() = stop default action; stopPropagation() = stop bubbling.

---

## 21. Event Bubbling & Capturing [HIGH PRIORITY]

**Definition:** Describes the ORDER in which nested elements' event handlers fire when an event occurs on a nested element.

**Core Concepts:**
- **Capturing phase:** event travels from the outermost ancestor DOWN to the target element (top → down).
- **Target phase:** event reaches the actual clicked element.
- **Bubbling phase:** event travels back UP from target to outermost ancestor (down → top). This is the DEFAULT behavior in JS.
- `addEventListener(type, fn, true)` — third argument `true` enables capturing phase listening (default is `false` = bubbling).
- `event.stopPropagation()` stops the event from continuing to bubble/capture further.
- Event delegation: attaching one listener to a parent to handle events from many children (leverages bubbling), efficient for dynamic lists.

**Examples:**
```html
<div id="parent"><button id="child">Click</button></div>
```
```js
parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));
// Clicking button logs: "child" then "parent" (bubbling, default)
```

**Common Mistakes:** Confusing bubbling direction (it goes UP, from child to parent, not down); not knowing event delegation is a practical use-case of bubbling.

**Viva Questions:**
- Q: What is event bubbling? A: When an event fires on an element, it first runs handlers on that element, then bubbles up and runs handlers on its ancestors.
- Q: What is event delegation and why is it useful? A: Attaching a single event listener to a parent element to handle events for multiple/dynamic children via bubbling — more efficient than attaching listeners to each child individually.

**Explain to Teacher:** "When an event happens on a nested element, it doesn't just fire on that element — by default it bubbles upward through all its ancestor elements, triggering their handlers too. This is called event bubbling. The opposite, capturing, means the event travels from the outer ancestors down to the target first. Bubbling is very useful practically because of event delegation — we can put a single listener on a parent element and still handle clicks on any child, even ones added dynamically later."

**Quick Revision:** Capturing = top→down; Bubbling = bottom→up (default); stopPropagation() stops it; event delegation exploits bubbling for efficiency.

---

## 22. Forms & Form Validation

**Definition:** HTML forms collect user input; JS form validation ensures the data is correct/complete before submission.

**Core Concepts:**
- Access form values: `document.querySelector("#email").value`.
- `event.preventDefault()` on `submit` event to stop actual submission and validate first.
- HTML5 built-in validation attributes: `required`, `pattern`, `minlength`, `maxlength`, `type="email"`.
- Custom JS validation: checking values with conditionals/regex before allowing submit.

**Examples:**
```js
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (email.value === "") {
    alert("Email required");
    return;
  }
  // else proceed / submit via fetch
});
```

**Common Mistakes:** Relying only on client-side validation (must always validate on server too, since client-side can be bypassed); forgetting `preventDefault()`.

**Viva Questions:**
- Q: Why is client-side validation not enough? A: It can be bypassed (disabled JS, direct API calls), so server-side validation is mandatory for security.
- Q: How to stop a form from submitting normally? A: `event.preventDefault()` inside the submit handler.

**Quick Revision:** preventDefault() to intercept; HTML5 attributes for basic checks; JS for custom logic; always re-validate server-side.

---

## 23. Local Storage & Session Storage

**Definition:** Web Storage APIs that let you store key-value data in the browser.

**Important Differences:**

| | localStorage | sessionStorage | Cookies |
|---|---|---|---|
| Persistence | Until manually cleared | Until tab/browser closed | Configurable expiry |
| Storage limit | ~5-10MB | ~5-10MB | ~4KB |
| Sent to server? | No | No | Yes, with every request |
| Scope | All tabs, same origin | Single tab | All tabs, same origin |

**Syntax:**
```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
// Objects must be stringified:
localStorage.setItem("user", JSON.stringify(userObj));
JSON.parse(localStorage.getItem("user"));
```

**Common Mistakes:** Storing objects/arrays directly without `JSON.stringify()` (stores `"[object Object]"`); forgetting web storage only stores strings.

**Viva Questions:**
- Q: localStorage vs sessionStorage? A: localStorage persists indefinitely across sessions/tabs until cleared; sessionStorage is cleared when the tab closes and is scoped to one tab.
- Q: Can you store an object directly? A: No, must convert with JSON.stringify() and parse it back with JSON.parse().

**Quick Revision:** Both store string key-value pairs client-side; localStorage = persistent; sessionStorage = tab-only; always JSON.stringify/parse objects.

---

## 24. JSON

**Definition:** JavaScript Object Notation — a lightweight, text-based, language-independent data interchange format based on JS object syntax.

**Core Concepts:**
- `JSON.stringify(obj)` → converts JS object/array to a JSON string.
- `JSON.parse(jsonString)` → converts JSON string back into a JS object/array.
- Used heavily for APIs — sending/receiving structured data between client and server.
- JSON keys must be double-quoted strings; values can be string, number, boolean, null, array, object (no functions, no `undefined`).

**Examples:**
```js
let obj = { name: "Aayush", age: 22 };
let jsonStr = JSON.stringify(obj);   // '{"name":"Aayush","age":22}'
let back = JSON.parse(jsonStr);       // {name:"Aayush", age:22}
```

**Common Mistakes:** Forgetting JSON keys need double quotes (unlike JS object literals, which allow unquoted keys); trying to stringify functions (they get dropped/ignored).

**Viva Questions:**
- Q: Why is JSON popular for APIs? A: It's lightweight, human-readable, language-independent, and maps directly to JS objects.
- Q: stringify vs parse? A: stringify: object → string; parse: string → object.

**Quick Revision:** JSON = text format for data exchange; stringify (object→string); parse (string→object); no functions/undefined allowed in JSON.

---

## 25. Callbacks [HIGH PRIORITY]

**Definition:** A callback is a function passed as an argument to another function, to be executed later (after some operation completes).

**Why used:** JS is single-threaded; callbacks let us handle operations that take time (timers, file reads, network requests) without blocking execution.

**Examples:**
```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
greet("Aayush", function(){ console.log("Callback ran!"); });

setTimeout(() => console.log("Runs after 2s"), 2000);
```

**Core Concepts:** Synchronous callbacks (array methods like `map`/`forEach`) vs asynchronous callbacks (`setTimeout`, event listeners, API calls). **Callback Hell:** deeply nested callbacks (pyramid of doom) when chaining multiple async operations — solved by Promises/async-await.

**Common Mistakes:** Confusing "callback" with "asynchronous" — callbacks can be synchronous too (e.g., in `array.map()`).

**Viva Questions:**
- Q: What is callback hell? A: Deeply nested callbacks making code hard to read/maintain, typically from chaining multiple async operations; solved using Promises or async/await.
- Q: Is every callback asynchronous? A: No — e.g., the callback in `.map()` runs synchronously.

**Explain to Teacher:** "A callback is simply a function passed into another function to be called later. It's the foundational pattern JavaScript uses to handle asynchronous operations like timers or API responses, since JS is single-threaded and can't block execution waiting for these to finish. The downside is that chaining many async callbacks leads to deeply nested, hard-to-read code known as callback hell, which is why Promises and async/await were introduced."

**Quick Revision:** Function passed as argument; used for async operations; callback hell = nested mess; solved by Promises.

---

## 26. Promises [HIGH PRIORITY]

**Definition:** A Promise is an object representing the eventual completion (or failure) of an asynchronous operation, providing a cleaner alternative to nested callbacks.

**Core Concepts — 3 states:**
- **Pending:** initial state, operation not complete yet.
- **Fulfilled:** operation completed successfully.
- **Rejected:** operation failed.

**Syntax:**
```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Data received");
  else reject("Error occurred");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done"));
```

**Core Concepts:** `.then()` handles success, `.catch()` handles failure, `.finally()` always runs. Chaining `.then()` avoids callback hell by flattening nested logic. `Promise.all([p1,p2])` runs multiple promises in parallel, resolves when ALL succeed (rejects if any fails). `Promise.race()` resolves/rejects as soon as the first settles.

**Common Mistakes:** Forgetting to return values inside `.then()` chains (breaks the chain); not handling `.catch()` (unhandled promise rejection).

**Viva Questions:**
- Q: What are the 3 states of a Promise? A: Pending, Fulfilled, Rejected.
- Q: Promise.all vs Promise.race? A: `all` waits for every promise to resolve (fails if any rejects); `race` settles as soon as the first promise settles, whichever happens first.
- Q: How do Promises solve callback hell? A: By allowing chained `.then()` calls instead of nested callbacks, making async code flatter and more readable.

**Explain to Teacher:** "A Promise represents a value that will be available in the future — either successfully (fulfilled) or with an error (rejected), starting in a pending state. Instead of nesting callbacks, we chain .then() for success and .catch() for errors, which makes asynchronous code much more readable and helps avoid callback hell."

**Quick Revision:** 3 states: pending/fulfilled/rejected; .then/.catch/.finally; Promise.all = wait for all; Promise.race = first to settle wins.

---

## 27. async/await [HIGH PRIORITY]

**Definition:** Syntactic sugar built on top of Promises that lets asynchronous code be written in a synchronous-looking style.

**Syntax:**
```js
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

**Core Concepts:**
- `async` keyword before a function makes it always return a Promise.
- `await` pauses execution of the async function (not the whole program) until the Promise resolves/rejects.
- `await` can only be used inside an `async` function.
- Error handling done via `try...catch` (replaces `.catch()` chains).

**Important Differences:**

| | Promises (.then) | async/await |
|---|---|---|
| Syntax style | Chained | Looks synchronous |
| Error handling | .catch() | try...catch |
| Readability | Can get long with many chains | Cleaner for sequential async steps |

**Common Mistakes:** Forgetting `await` (getting a Promise object instead of the resolved value); using `await` outside an `async` function (syntax error, unless top-level await is supported).

**Viva Questions:**
- Q: Does async/await replace Promises? A: No, it's built on top of Promises — just a cleaner syntax for working with them.
- Q: What happens if you forget await? A: You get the Promise object itself, not the resolved value.
- Q: How is error handling done? A: With try...catch blocks around the await calls.

**Explain to Teacher:** "async/await is a cleaner way of writing Promise-based code so it reads like synchronous code. Marking a function async means it always returns a Promise, and inside it, await pauses just that function's execution until the awaited Promise settles, without blocking the rest of the program. We handle errors using standard try-catch blocks instead of chaining catch()."

**Quick Revision:** async fn → returns Promise; await → pauses until settled; try/catch for errors; built on top of Promises, not a replacement.

---

## 28. Fetch API [HIGH PRIORITY]

**Definition:** A modern browser API for making HTTP requests (replacing older `XMLHttpRequest`), returns a Promise.

**Syntax:**
```js
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// with async/await
async function getUsers() {
  const res = await fetch("https://api.example.com/users");
  const data = await res.json();
  return data;
}

// POST request
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Aayush" })
});
```

**Core Concepts:** `fetch()` returns a Promise that resolves to a `Response` object; must call `.json()` (also returns a Promise) to parse the body. By default GET; other methods (POST/PUT/DELETE) specified in an options object. Important gotcha: `fetch()` only rejects on network failure, NOT on HTTP error status like 404/500 — you must check `response.ok` manually.

**Common Mistakes:** Assuming fetch's `.catch()` catches HTTP errors like 404 — it doesn't, you need to check `response.ok` or `response.status`.

**Viva Questions:**
- Q: Does fetch throw an error on a 404 response? A: No — it only rejects on network failure; you must manually check `response.ok`/`response.status`.
- Q: What does response.json() do? A: Parses the response body as JSON and returns a Promise resolving to the parsed object.

**Explain to Teacher:** "The Fetch API is used to make HTTP requests from JavaScript to a server, and it returns a Promise. We typically call .json() on the response to parse the returned data. A common exam trick question is that fetch does not reject on HTTP error codes like 404 — only on actual network failures — so we need to manually check response.ok to handle server errors properly."

**Quick Revision:** fetch() returns Promise<Response>; .json() parses body; only rejects on network failure, not HTTP errors; use options object for POST/PUT/DELETE.

---

## 29. Error Handling

**Definition:** Mechanisms to gracefully handle runtime errors instead of crashing the program.

**Syntax:**
```js
try {
  let x = y + 1; // y not defined → error
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("Always runs");
}

throw new Error("Custom error message");
```

**Core Concepts:** `try` block: code that might throw; `catch` block: handles the error; `finally` block: always executes regardless of error. Custom errors thrown with `throw`. Common built-in error types: `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`.

**Common Mistakes:** Wrapping too much/unrelated code in one try block making debugging hard; forgetting error handling in async code (must use try/catch with await, or .catch() with Promises).

**Viva Questions:**
- Q: Difference between TypeError and ReferenceError? A: TypeError = operation on wrong data type (e.g., calling a non-function); ReferenceError = referencing an undeclared variable.
- Q: Does finally always run? A: Yes, whether or not an error occurred, and even if there's a return statement in try/catch.

**Quick Revision:** try/catch/finally; throw for custom errors; finally always executes; use try/catch with async/await for async error handling.

---

## 30. ES6+ Features [HIGH PRIORITY]

**Definition:** Modern JavaScript syntax/features introduced from ES6 (2015) onward that make code cleaner and more powerful.

**Core Concepts (summary table):**

| Feature | Purpose |
|---|---|
| let/const | Block-scoped variables |
| Arrow functions | Concise syntax, lexical `this` |
| Template literals | String interpolation with backticks |
| Destructuring | Unpack array/object values |
| Spread/Rest (`...`) | Expand/collect elements |
| Default parameters | `function f(x=10)` |
| Modules (import/export) | Split code into reusable files |
| Classes | Syntactic sugar over prototype-based OOP |
| Promises / async-await | Cleaner async code |
| Optional chaining `?.` | Safe nested property access |
| Nullish coalescing `??` | Fallback only for null/undefined |
| Map / Set | New collection data structures |

**Examples:**
```js
// Classes
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hi, I'm ${this.name}`); }
}

// Modules
export function add(a,b){ return a+b; }
import { add } from "./math.js";

// Map & Set
let map = new Map(); map.set("a",1);
let set = new Set([1,2,2,3]); // {1,2,3} - unique values only
```

**Viva Questions:**
- Q: What's new about ES6 classes vs older prototype functions? A: Classes are syntactic sugar — cleaner syntax, but JS is still prototype-based underneath.
- Q: Map vs plain Object? A: Map allows any data type as key (not just strings), maintains insertion order, and has a direct `.size` property; better for frequent additions/removals.
- Q: What is a Set used for? A: Storing only unique values — great for removing duplicates from an array.

**Explain to Teacher:** "ES6 and later versions introduced major improvements to JavaScript — block-scoped variables with let/const, arrow functions, template literals, destructuring, classes for cleaner object-oriented syntax, and native support for modules and Promises. These features make code shorter, more readable, and easier to maintain compared to older ES5 JavaScript."

**Quick Revision:** Know the table above; classes = sugar over prototypes; Set = unique values; Map = key-value with any key type.

---

## 31. JavaScript Execution & Event Loop [HIGH PRIORITY]

**Definition:** Describes how JS, despite being single-threaded, handles asynchronous operations without blocking, using the Call Stack, Web APIs, Callback Queue, and Event Loop.

**Core Concepts:**
- **Call Stack:** where synchronous code executes, one frame at a time (LIFO).
- **Web APIs (browser-provided):** handle async tasks like `setTimeout`, DOM events, `fetch` — outside the JS engine.
- **Callback Queue (Task Queue):** holds callbacks from completed async Web API tasks, waiting to run.
- **Microtask Queue:** holds Promise callbacks (`.then`) — has HIGHER priority than the Callback Queue.
- **Event Loop:** continuously checks — if Call Stack is empty, push next task from Microtask Queue first, then Callback (macrotask) Queue.

**Examples:**
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
// (sync code first, then microtasks/Promises, then macrotasks/setTimeout)
```

**Common Mistakes:** Assuming `setTimeout(fn, 0)` runs immediately — it still goes through the queue AFTER current sync code and microtasks.

**Viva Questions:**
- Q: Why does the Promise (`3`) log before setTimeout (`2`) even with 0ms delay? A: Microtasks (Promises) have higher priority than the macrotask/callback queue where setTimeout callbacks go.
- Q: Is JavaScript single-threaded? A: Yes — one call stack, but async operations are offloaded to Web APIs and re-queued, giving the illusion of concurrency.

**Explain to Teacher:** "JavaScript runs on a single thread with one call stack. When we call something async like setTimeout or fetch, the actual waiting is handled by browser Web APIs, not the JS engine itself. Once that task completes, its callback is placed in a queue — Promises go into a high-priority microtask queue, while things like setTimeout go into a lower-priority macrotask queue. The event loop constantly checks if the call stack is empty, and if so, pushes the next queued task onto it, first draining microtasks and then macrotasks. This is how JS achieves non-blocking asynchronous behavior despite being single-threaded."

**Quick Revision:** Call Stack (sync) → Web APIs (async work) → Microtask Queue (Promises, high priority) → Macrotask/Callback Queue (setTimeout, etc.) → Event Loop coordinates it all.

---

## 32. Synchronous vs Asynchronous JavaScript [HIGH PRIORITY]

**Important Differences:**

| | Synchronous | Asynchronous |
|---|---|---|
| Execution | Line by line, blocking | Non-blocking, can run later |
| Example | Normal function calls, loops | setTimeout, fetch, Promises |
| Waits for completion? | Yes, blocks next line | No, continues, handles result later via callback/then/await |

**Core Concepts:** Sync = each operation must finish before the next starts (blocking). Async = long-running operations (network, timers) are handled in the background, letting the rest of the program continue; results handled via callbacks, Promises, or async/await.

**Viva Questions:**
- Q: Why does JS need asynchronous handling if it's single-threaded? A: To avoid blocking the UI/execution while waiting on slow operations like network requests — without async, the page would freeze during every API call.

**Quick Revision:** Sync = blocking, sequential; Async = non-blocking, handled via callbacks/Promises/async-await, essential for network/timer operations.

---

# CSS

## 33. CSS Introduction & Types

**Definition:** CSS (Cascading Style Sheets) styles the visual presentation of HTML — colors, layout, fonts, spacing.

**Core Concepts — 3 ways to include CSS:**

| Type | How | Use Case |
|---|---|---|
| Inline | `style="color:red"` on element | Quick one-off (avoid in general, hard to maintain) |
| Internal | `<style>` in `<head>` | Single-page styling |
| External | `<link rel="stylesheet" href="style.css">` | Best practice — reusable, cacheable, separates concerns |

**"Cascading"** means rules cascade/combine based on specificity, source order, and importance (`!important`) to determine final applied style.

**Viva Questions:**
- Q: Why is external CSS preferred? A: Separation of concerns, reusability across pages, browser caching improves performance.
- Q: What does "cascading" mean? A: Multiple rules can apply to the same element; the cascade algorithm (specificity + order + importance) decides which wins.

**Quick Revision:** Inline > Internal > External (priority-wise for a single element, but external is best practice); cascading = conflict resolution mechanism.

---

## 34. Selectors [HIGH PRIORITY]

**Definition:** Patterns used to target which HTML elements a CSS rule applies to.

**Core Concepts:**

| Selector | Syntax | Targets |
|---|---|---|
| Universal | `*` | All elements |
| Element/Type | `p` | All `<p>` tags |
| Class | `.classname` | Elements with that class |
| ID | `#idname` | Element with that id (unique) |
| Descendant | `div p` | `<p>` inside `<div>` (any depth) |
| Child | `div > p` | Direct `<p>` children of `<div>` |
| Adjacent sibling | `h1 + p` | `<p>` immediately after `<h1>` |
| General sibling | `h1 ~ p` | All `<p>` siblings after `<h1>` |
| Attribute | `input[type="text"]` | Elements with matching attribute |
| Group | `h1, h2, p` | Applies same rule to multiple selectors |

**Common Mistakes:** Overusing ID selectors (not reusable, high specificity causes override issues); confusing `>` (direct child) with space (any descendant).

**Viva Questions:**
- Q: Class vs ID selector? A: Class is reusable across multiple elements (`.`); ID must be unique per page (`#`) and has higher specificity.
- Q: `div p` vs `div > p`? A: `div p` selects any `<p>` descendant at any depth; `div > p` selects only direct children.

**Quick Revision:** `.class` reusable, `#id` unique+high specificity; `>` = direct child, space = any descendant; attribute selectors target `[attr=value]`.

---

## 35. Colors, Backgrounds & Borders

**Core Concepts:**
- Color formats: named (`red`), HEX (`#ff0000`), RGB (`rgb(255,0,0)`), RGBA (with alpha/opacity), HSL.
- `background-color`, `background-image`, `background-size`, `background-position`, `background-repeat`.
- `border: 2px solid black;` (shorthand for width, style, color); `border-radius` for rounded corners.

**Examples:**
```css
.box {
  background-color: rgba(0,0,0,0.5); /* 50% transparent black */
  border: 1px solid #333;
  border-radius: 8px;
}
```

**Viva Questions:**
- Q: RGB vs RGBA? A: RGBA adds an alpha channel controlling opacity (0 = transparent, 1 = opaque).

**Quick Revision:** RGBA/HSLA add transparency; border shorthand = width style color; border-radius rounds corners.

---

## 36. Units

**Core Concepts:**

| Unit | Type | Relative To |
|---|---|---|
| px | Absolute | Fixed pixels |
| % | Relative | Parent element |
| em | Relative | Font-size of parent element |
| rem | Relative | Font-size of root (`html`) element |
| vw/vh | Relative | 1% of viewport width/height |

**Common Mistakes:** Using `em` everywhere causing compounding size issues in nested elements (`rem` avoids this since it's always relative to root).

**Viva Questions:**
- Q: em vs rem? A: em is relative to the parent's font-size (compounds in nested elements); rem is always relative to the root html font-size (more predictable).
- Q: When to use vw/vh? A: For sizing elements relative to the viewport, e.g., full-screen sections.

**Quick Revision:** px = fixed; % = relative to parent; em = relative to parent font-size (compounds); rem = relative to root font-size (predictable); vw/vh = viewport-based.

---

## 37. Box Model [HIGH PRIORITY]

**Definition:** Every HTML element is treated as a rectangular box made of four layers, from inside out: **Content → Padding → Border → Margin.**

**Core Concepts:**
- **Content:** actual text/image/element content.
- **Padding:** space between content and border (inside the box, background-colored).
- **Border:** the edge line around padding.
- **Margin:** space outside the border, between this element and others (transparent).
- `box-sizing: content-box` (default) — width/height apply to content only; padding/border ADD to total size.
- `box-sizing: border-box` — width/height include padding+border, making sizing predictable (commonly used, set via `* { box-sizing: border-box; }`).

**Examples:**
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* total width stays 200px */
}
```

**Common Mistakes:** Not setting `box-sizing: border-box`, leading to unexpectedly large elements when padding/border are added to content-box sizing.

**Viva Questions:**
- Q: Order of box model layers? A: Content → Padding → Border → Margin (inside to outside).
- Q: content-box vs border-box? A: content-box: width/height apply only to content, padding/border add extra size. border-box: width/height include padding & border, so total size stays fixed.

**Explain to Teacher:** "The CSS box model describes how every element is rendered as a rectangular box with four layers — content in the center, then padding, then border, then margin on the outside. By default, width and height only apply to the content area, so adding padding or border increases the element's actual rendered size. This is why developers commonly set box-sizing to border-box, which makes width and height include padding and border, giving much more predictable sizing."

**Quick Revision:** Content→Padding→Border→Margin; box-sizing: border-box = predictable sizing (most common practice); margin = outside/transparent, padding = inside/colored.

---

## 38. Margin, Padding & Dimensions

**Core Concepts:**
- Shorthand order (clockwise from top): `margin: 10px 20px 30px 40px;` = top right bottom left.
- 2-value shorthand: `margin: 10px 20px;` = vertical(top/bottom) horizontal(left/right).
- `margin: auto` (with a defined width) horizontally centers a block element.
- **Margin collapsing:** vertical margins between adjacent block elements collapse into the larger single margin (doesn't apply to padding, or to horizontal margins).

**Common Mistakes:** Expecting margins between two stacked elements to add up (they collapse to the larger one, not sum).

**Viva Questions:**
- Q: What is margin collapsing? A: When two vertical margins of adjacent block elements meet, they combine into a single margin equal to the larger of the two, rather than summing.
- Q: How to horizontally center a block element? A: Give it a fixed width and set `margin: 0 auto;`.

**Quick Revision:** Shorthand = top right bottom left (clockwise); margin:auto centers block elements; margin collapsing applies only to vertical margins.

---

## 39. Display Property [HIGH PRIORITY]

**Core Concepts:**

| Value | Behavior |
|---|---|
| `block` | Takes full width, starts on new line, respects width/height/margin/padding |
| `inline` | Takes only needed width, no line break, width/height/vertical margin ignored |
| `inline-block` | Like inline (no line break) but respects width/height/margin/padding |
| `none` | Element removed from layout entirely (not even space reserved) |
| `flex` | Enables flexbox layout for children |
| `grid` | Enables grid layout for children |

**Common Mistakes:** Trying to set width/height on an `inline` element (ignored); confusing `display:none` with `visibility:hidden` (hidden still takes up layout space, none doesn't).

**Viva Questions:**
- Q: display:none vs visibility:hidden? A: `display:none` removes the element from the layout entirely (no space reserved); `visibility:hidden` hides it visually but still reserves its layout space.
- Q: Can you set width on an inline element? A: No, width/height are ignored on `display:inline` elements — use `inline-block` instead.

**Quick Revision:** block=full width+new line; inline=content-width+no width/height control; inline-block=best of both; none=removed entirely; hidden=invisible but space kept.

---

## 40. Positioning [HIGH PRIORITY]

**Core Concepts:**

| Value | Behavior |
|---|---|
| `static` | Default; normal document flow; top/left/etc. have no effect |
| `relative` | Positioned relative to its own normal position; still occupies original space |
| `absolute` | Removed from normal flow; positioned relative to nearest positioned (non-static) ancestor, or `<html>` if none |
| `fixed` | Positioned relative to the viewport; stays fixed even when scrolling |
| `sticky` | Behaves like relative until a scroll threshold, then sticks like fixed |

**Examples:**
```css
.parent { position: relative; }
.child  { position: absolute; top: 0; right: 0; } /* positions relative to .parent */
```

**Common Mistakes:** Forgetting `absolute` needs a positioned ancestor (`relative`/`absolute`/`fixed`) to anchor to — otherwise it positions relative to the whole page (`<html>`).

**Viva Questions:**
- Q: absolute vs fixed? A: absolute is relative to nearest positioned ancestor and scrolls with the page; fixed is relative to the viewport and stays in place during scroll.
- Q: What happens to an absolutely positioned element's original space? A: It's removed from normal document flow — no space reserved where it originally was.
- Q: sticky position use case? A: Sticky headers/navbars that scroll normally until reaching a point, then "stick" to the top.

**Explain to Teacher:** "CSS positioning controls how an element is placed. Static is the default normal flow. Relative moves an element relative to its own original position while still keeping its space in the layout. Absolute removes the element from normal flow entirely and positions it relative to its nearest ancestor that has a non-static position. Fixed positions relative to the viewport so it stays visible while scrolling, and sticky is a hybrid that acts relative until a scroll point, then behaves like fixed."

**Quick Revision:** static=default; relative=offsets from own position, space kept; absolute=positioned to nearest positioned ancestor, removed from flow; fixed=relative to viewport; sticky=relative+fixed hybrid.

---

## 41. Flexbox [HIGH PRIORITY]

**Definition:** A one-dimensional CSS layout model for arranging items in a row or column, distributing space and aligning content flexibly.

**Why used:** Makes complex alignment (centering, equal spacing, responsive ordering) far easier than older float/table-based layouts.

**Syntax:**
```css
.container {
  display: flex;
  flex-direction: row;       /* row | column | row-reverse | column-reverse */
  justify-content: center;    /* main-axis alignment */
  align-items: center;        /* cross-axis alignment */
  flex-wrap: wrap;             /* allow items to wrap to next line */
  gap: 10px;                   /* spacing between items */
}
.item {
  flex-grow: 1;    /* how much to grow relative to siblings */
  flex-shrink: 1;   /* how much to shrink if needed */
  flex-basis: 100px; /* starting size before grow/shrink */
}
```

**Core Concepts:**
- **Main axis** = direction items are laid out (row=horizontal by default); **cross axis** = perpendicular to main axis.
- `justify-content`: aligns along MAIN axis (`flex-start`, `center`, `space-between`, `space-around`, `space-evenly`).
- `align-items`: aligns along CROSS axis (`flex-start`, `center`, `stretch`, `baseline`).
- `flex: 1` shorthand = `flex-grow:1 flex-shrink:1 flex-basis:0%` — makes items grow equally to fill space.

**Real-World Use:** Navbars, centering elements (`display:flex; justify-content:center; align-items:center;`), equal-height columns, responsive card layouts.

**Common Mistakes:** Confusing justify-content (main axis) with align-items (cross axis) — they swap meaning when `flex-direction: column` is used.

**Viva Questions:**
- Q: justify-content vs align-items? A: justify-content aligns items along the main axis; align-items aligns items along the cross axis (perpendicular).
- Q: How to perfectly center a div using flexbox? A: On the parent: `display:flex; justify-content:center; align-items:center;`.
- Q: What does flex:1 do? A: Makes the item grow and shrink to fill available space equally among flex siblings.

**Explain to Teacher:** "Flexbox is a one-dimensional layout system that makes it easy to align and distribute items along a row or column. We enable it with display: flex on a parent container, and then use justify-content to align items along the main axis and align-items to align them along the cross axis. It's the go-to tool for things like centering elements and building responsive navbars, replacing older, more complicated float-based techniques."

**Quick Revision:** display:flex on parent; main axis→justify-content; cross axis→align-items; flex-direction changes which is which; flex:1 for equal growth; flex-wrap for wrapping.

---

## 42. CSS Grid [HIGH PRIORITY]

**Definition:** A two-dimensional CSS layout system for arranging items in rows AND columns simultaneously.

**Syntax:**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;   /* 3 equal columns */
  grid-template-rows: 100px auto;
  gap: 10px;
}
.item {
  grid-column: 1 / 3;   /* span from column line 1 to 3 */
  grid-row: 1 / 2;
}
```

**Core Concepts:**
- `fr` unit = fraction of available space (flexible, unlike px).
- `grid-template-columns`/`rows` define the grid structure.
- `grid-column`/`grid-row` place/span items across specific grid lines.
- `repeat(3, 1fr)` shorthand for repeating column/row definitions.
- `grid-template-areas` allows naming layout regions visually in code.

**Important Differences:**

| | Flexbox | Grid |
|---|---|---|
| Dimensions | 1D (row OR column) | 2D (rows AND columns together) |
| Best for | Aligning items in a single line/direction | Full page/complex layouts |
| Content-driven vs Layout-driven | Content-driven (sizes based on content) | Layout-driven (define structure first) |

**Common Mistakes:** Using grid when only 1D alignment is needed (flexbox is simpler for that); forgetting `fr` unit exists and using fixed px causing non-responsive grids.

**Viva Questions:**
- Q: Flexbox vs Grid — when to use which? A: Flexbox for one-dimensional layouts (a single row or column, e.g., navbar); Grid for two-dimensional layouts (full page structure with rows and columns together, e.g., dashboard).
- Q: What is the fr unit? A: A flexible fraction unit representing a share of available space in the grid container.

**Explain to Teacher:** "CSS Grid is a two-dimensional layout system, meaning it controls rows and columns at the same time, unlike Flexbox which only handles one direction. We define the grid structure on the container using grid-template-columns and grid-template-rows, often using the fr unit for flexible sizing, and then place items using grid-column and grid-row to span specific lines. Grid is ideal for full page layouts, while Flexbox is better suited for aligning items along a single row or column."

**Quick Revision:** display:grid; 2D layout (rows+columns); grid-template-columns/rows define structure; fr = flexible fraction unit; Grid=page layout, Flexbox=single-direction alignment.

---

## 43. Float & Clear

**Definition:** Older layout technique — `float` pulls an element to the left/right, allowing text/inline content to wrap around it; largely replaced by Flexbox/Grid for layout but still used for text-wrap-around-image effects.

**Syntax:**
```css
img { float: left; margin-right: 10px; }
.clearfix::after { content: ""; display: block; clear: both; }
```

**Core Concepts:** `float: left/right` removes element from normal flow but keeps inline content flowing around it. Floated elements can cause parent containers to "collapse" (lose height) since floats aren't counted in parent height — fixed using `clear` or the "clearfix" hack, or simply using `display:flow-root` on parent.

**Viva Questions:**
- Q: Why is Flexbox preferred over float for layouts today? A: Float was designed for text wrapping, not full layouts; it causes container collapse issues and is harder to control, whereas Flexbox/Grid are purpose-built for layout.
- Q: What does clear:both do? A: Prevents an element from sitting next to floated elements, pushing it below them.

**Quick Revision:** float = legacy layout tool, still used for text-wrap around images; causes parent collapse; clearfix/clear:both fixes it; modern layouts use Flexbox/Grid instead.

---

## 44. Typography & Fonts

**Core Concepts:**
- `font-family` (with fallback stack: `"Arial", sans-serif`), `font-size`, `font-weight`, `font-style`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, `text-decoration`.
- Web fonts via `@font-face` or services like Google Fonts (`<link>` import).
- `line-height` improves readability; unitless values (e.g., `1.5`) are recommended (scales with font-size).

**Common Mistakes:** Not providing font fallback stacks (if custom font fails to load, browser default may look inconsistent).

**Viva Questions:**
- Q: Why use a font fallback stack? A: Ensures text still displays reasonably if the primary font fails to load.

**Quick Revision:** Always set a fallback in font-family; unitless line-height is best practice.

---

## 45. Pseudo-classes [HIGH PRIORITY]

**Definition:** Keywords added to a selector (with `:`) that style an element based on a special STATE or position, not something you can target with regular selectors/attributes.

**Core Concepts / Examples:**
```css
a:hover { color: blue; }        /* mouse over */
input:focus { border-color: green; }  /* currently focused */
li:first-child { }               /* first child of parent */
li:last-child { }
li:nth-child(2) { }              /* specific position */
input:checked { }                 /* checkbox/radio checked */
button:disabled { }
a:visited { }
```

**Viva Questions:**
- Q: What is a pseudo-class? A: A selector suffix (`:hover`, `:focus`, `:nth-child()`) that targets an element based on state or position rather than a class/id/attribute in the HTML.
- Q: nth-child(2) vs nth-of-type(2)? A: nth-child counts ALL sibling elements regardless of tag; nth-of-type counts only siblings of the SAME tag type.

**Quick Revision:** `:hover`, `:focus`, `:nth-child()`, `:first-child`, `:checked` are most common; represent state/position, not structure.

---

## 46. Pseudo-elements [HIGH PRIORITY]

**Definition:** Keywords added to a selector (with `::`) that style a specific PART of an element or insert generated content, rather than the whole element.

**Core Concepts / Examples:**
```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
.box::before { content: "★ "; }
.box::after { content: ""; display: block; clear: both; }
::selection { background: yellow; }
```

**Important Differences:**

| | Pseudo-class | Pseudo-element |
|---|---|---|
| Syntax | Single colon `:hover` | Double colon `::before` |
| Targets | State/position of an element | A specific part / generated content |
| Example | `:hover`, `:nth-child()` | `::before`, `::after`, `::first-line` |

**Common Mistakes:** Forgetting `content: ""` property is REQUIRED for `::before`/`::after` to render at all, even if empty.

**Viva Questions:**
- Q: Pseudo-class vs pseudo-element? A: Pseudo-class (single colon) targets a state or position of an existing element (`:hover`); pseudo-element (double colon) targets a specific sub-part or inserts generated content (`::before`).
- Q: What's required for ::before/::after to show? A: The `content` property must be set, even to an empty string.

**Explain to Teacher:** "Pseudo-classes use a single colon and target elements based on state, like :hover for mouse-over or :nth-child for position among siblings. Pseudo-elements use a double colon and target a specific part of an element, or insert generated content, like ::before and ::after, which are very commonly used for decorative icons or clearfix hacks — and they require a content property to actually render."

**Quick Revision:** `:` = pseudo-class (state); `::` = pseudo-element (part/generated content); ::before/::after need `content` property.

---

## 47. Specificity [HIGH PRIORITY]

**Definition:** The algorithm the browser uses to decide which CSS rule "wins" when multiple rules target the same element.

**Core Concepts — Specificity hierarchy (highest to lowest):**
1. `!important` (overrides everything — use sparingly)
2. Inline styles (`style="..."`)
3. IDs (`#id`)
4. Classes, attribute selectors, pseudo-classes (`.class`, `[attr]`, `:hover`)
5. Elements/type selectors, pseudo-elements (`div`, `::before`)

**Core Concepts:** Calculated as a 4-part score (inline, IDs, classes, elements). Higher specificity wins regardless of order in stylesheet. If specificity is EQUAL, the rule that appears LAST in the source order wins.

**Examples:**
```css
p { color: blue; }              /* specificity: 0,0,0,1 */
.text { color: green; }         /* specificity: 0,0,1,0 — wins over p */
#main { color: red; }           /* specificity: 0,1,0,0 — wins over .text */
```

**Common Mistakes:** Overusing `!important` as a quick fix (creates maintenance nightmares); assuming later rules always win (only true when specificity is equal).

**Viva Questions:**
- Q: What wins: an ID selector or three chained class selectors? A: Depends on calculation, but generally ID (0,1,0,0) beats even multiple classes unless classes combine to exceed it — in most simple cases, ID wins.
- Q: When does source order matter? A: Only when specificity is exactly equal between competing rules.

**Explain to Teacher:** "Specificity is how the browser decides which CSS rule applies when multiple rules target the same element. It follows a hierarchy: inline styles and !important are strongest, then ID selectors, then classes and attribute selectors, and finally element selectors are weakest. If two rules have equal specificity, whichever comes later in the stylesheet wins."

**Quick Revision:** !important > inline > ID > class/attribute/pseudo-class > element/pseudo-element; equal specificity → last rule wins.

---

## 48. z-index

**Definition:** Controls the stacking order (which element appears on top) of overlapping positioned elements along the z-axis.

**Core Concepts:** Only works on elements with a `position` value other than `static` (relative, absolute, fixed, sticky). Higher `z-index` value = appears on top (closer to viewer). Creates a "stacking context" — z-index values only compete within the same stacking context.

**Common Mistakes:** Setting z-index on a `static` positioned element (has no effect — position must be set first).

**Viva Questions:**
- Q: Does z-index work on any element? A: No — only on positioned elements (position not static).
- Q: What is a stacking context? A: A local scope in which z-index values are compared; a nested positioned element with its own z-index only competes within its parent's stacking context.

**Quick Revision:** Needs `position` (not static) to work; higher value = on top; stacking contexts scope comparisons.

---

## 49. Overflow

**Core Concepts:**

| Value | Behavior |
|---|---|
| `visible` (default) | Content overflows outside the box, still visible |
| `hidden` | Overflowing content is clipped/hidden |
| `scroll` | Always shows scrollbars, even if not needed |
| `auto` | Shows scrollbars only when content overflows |

**Viva Questions:**
- Q: scroll vs auto? A: scroll always shows scrollbars regardless of need; auto shows them only when content actually overflows.

**Quick Revision:** visible=default, overflows freely; hidden=clipped; scroll=always scrollable; auto=scrollbar only if needed.

---

## 50. Responsive Design [HIGH PRIORITY]

**Definition:** Designing web pages that adapt their layout/appearance to different screen sizes and devices.

**Core Concepts:**
- Fluid/relative units (`%`, `vw`, `rem`) instead of fixed `px`.
- Flexible layouts (Flexbox/Grid) that reflow content.
- Media queries to apply different styles at different breakpoints.
- Mobile-first approach: write base styles for mobile, then use `min-width` media queries to enhance for larger screens (generally recommended best practice).
- Responsive images: `max-width: 100%; height: auto;` so images scale down within their container.

**Common Mistakes:** Designing desktop-first then cramming mobile styles in (harder to maintain) rather than mobile-first; forgetting the viewport meta tag in HTML (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`), without which mobile responsiveness breaks.

**Viva Questions:**
- Q: What is mobile-first design? A: Writing base CSS for small screens first, then progressively enhancing with `min-width` media queries for larger screens.
- Q: Why is the viewport meta tag necessary? A: Without it, mobile browsers render the page at a default desktop width and then scale it down, making responsive CSS ineffective.

**Quick Revision:** Use relative units + Flexbox/Grid + media queries; mobile-first is best practice; viewport meta tag is mandatory in HTML head.

---

## 51. Media Queries [HIGH PRIORITY]

**Definition:** CSS rules that apply styles conditionally based on device characteristics like screen width.

**Syntax:**
```css
/* Mobile-first: base styles apply to all, then override for larger screens */
.container { flex-direction: column; }

@media (min-width: 768px) {
  .container { flex-direction: row; }
}

@media (max-width: 480px) {
  .nav { display: none; }
}
```

**Core Concepts:** `min-width` = applies from that width UPWARD (mobile-first approach); `max-width` = applies from that width DOWNWARD (desktop-first approach). Common breakpoints: ~480px (mobile), ~768px (tablet), ~1024px+ (desktop) — not fixed rules, just common conventions.

**Common Mistakes:** Mixing min-width and max-width inconsistently leading to overlapping/conflicting rules; not testing actual devices, only browser resize.

**Viva Questions:**
- Q: min-width vs max-width in media queries? A: min-width applies styles when viewport is AT LEAST that width (mobile-first, scaling up); max-width applies when viewport is AT MOST that width (desktop-first, scaling down).

**Quick Revision:** `@media (condition) { rules }`; min-width = mobile-first (scale up); max-width = desktop-first (scale down); pick one consistent approach.

---

## 52. Transitions [HIGH PRIORITY]

**Definition:** Enables smooth animated changes of CSS property values over a specified duration, when they change (e.g., on hover).

**Syntax:**
```css
.box {
  transition: background-color 0.3s ease-in-out;
  /* transition: property duration timing-function delay; */
}
.box:hover { background-color: blue; }
```

**Core Concepts:** Needs a trigger (`:hover`, `:focus`, or a class change via JS) to actually see the change. `transition-property` (which property to animate, or `all`), `transition-duration`, `transition-timing-function` (`ease`, `linear`, `ease-in`, `ease-out`), `transition-delay`.

**Viva Questions:**
- Q: What triggers a CSS transition? A: A change in a property's value, usually from a state change like :hover, :focus, or a class toggle via JavaScript.
- Q: Can you transition `display`? A: No, `display` is not animatable (it's not a value between two states) — use `opacity`/`visibility` instead for fade effects.

**Quick Revision:** transition: property duration timing-function delay; requires a state-change trigger; not all properties are animatable.

---

## 53. Transforms

**Definition:** Allows visually moving, rotating, scaling, or skewing an element without affecting document flow/layout.

**Syntax:**
```css
.box {
  transform: translateX(20px) rotate(45deg) scale(1.2);
}
```

**Core Concepts:** `translate()` moves, `rotate()` rotates, `scale()` resizes, `skew()` slants. Multiple transforms can be combined in one declaration. Transforms don't affect layout of surrounding elements (unlike changing `margin`/`width`), making them efficient for animations.

**Viva Questions:**
- Q: Why use transform instead of changing top/left for animation? A: transform is handled by the GPU (compositor) and doesn't trigger layout reflow, making animations much smoother/performant.

**Quick Revision:** translate/rotate/scale/skew; doesn't affect layout flow; more performant than animating position/margin directly.

---

## 54. Animations

**Definition:** Defines multi-step keyframe-based animations that can run automatically (unlike transitions, which need a trigger).

**Syntax:**
```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.box {
  animation: slideIn 1s ease-in-out infinite;
  /* animation: name duration timing-function iteration-count; */
}
```

**Important Differences:**

| | Transition | Animation |
|---|---|---|
| Trigger needed? | Yes (hover/class change) | No, can run automatically on load |
| Steps | Only 2 states (start→end) | Multiple keyframe steps possible |
| Looping | No native looping | `animation-iteration-count: infinite` |

**Viva Questions:**
- Q: Transition vs animation? A: Transitions need a trigger and only interpolate between two states; animations use @keyframes for multiple steps and can run automatically/loop without a trigger.

**Quick Revision:** @keyframes defines steps; animation property applies it; can auto-run & loop, unlike transitions.

---

## 55. CSS Variables

**Definition:** Custom properties that store reusable values, referenced throughout a stylesheet, improving maintainability.

**Syntax:**
```css
:root {
  --primary-color: #3498db;
  --spacing: 16px;
}
.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
```

**Core Concepts:** Declared with `--name`, accessed with `var(--name)`. Typically declared on `:root` for global scope (accessible everywhere), but can be scoped to any selector. Can be overridden within specific components/media queries. Unlike Sass variables, CSS variables are live and can be changed dynamically via JavaScript (`element.style.setProperty()`).

**Viva Questions:**
- Q: Where are CSS variables usually declared and why? A: On `:root`, so they're globally accessible throughout the stylesheet.
- Q: Advantage over Sass/preprocessor variables? A: CSS variables are native, live (can update dynamically at runtime via JS), and respect the cascade/inheritance, unlike Sass variables which are compiled away statically.

**Quick Revision:** `--name: value` declared on :root; accessed with `var(--name)`; live/dynamic, unlike compile-time preprocessor variables.

---

# HTML

## 56. HTML Introduction & Structure [HIGH PRIORITY]

**Definition:** HTML (HyperText Markup Language) is the standard markup language used to structure content on the web using elements/tags.

**Core Concepts — Basic document structure:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
- `<!DOCTYPE html>` tells the browser to render in standards mode (HTML5).
- `<head>` holds metadata (title, links, meta tags) — not visible content.
- `<body>` holds the visible page content.

**Viva Questions:**
- Q: What does DOCTYPE do? A: Declares the document type/HTML version, ensuring the browser renders using standards mode instead of quirks mode.
- Q: head vs body? A: head contains metadata not shown on page (title, meta, links to CSS); body contains all visible content.

**Quick Revision:** DOCTYPE declares HTML5 standards mode; head=metadata, body=visible content.

---

## 57. HTML Elements & Attributes

**Definition:** Elements are the building blocks of HTML (defined by tags); attributes provide additional information/configuration about an element, written inside the opening tag.

**Examples:**
```html
<img src="cat.jpg" alt="A cat" width="200">
<a href="https://example.com" target="_blank">Link</a>
```

**Core Concepts:** Attributes are `name="value"` pairs; some elements are self-closing/void (`<img>`, `<br>`, `<input>` — no closing tag needed); global attributes (`id`, `class`, `style`, `title`, `data-*`) can be used on almost any element.

**Viva Questions:**
- Q: What is a void/self-closing element? A: An element with no content or closing tag, like `<img>`, `<br>`, `<input>`.
- Q: What are data-* attributes for? A: Custom attributes to store extra data on an element, accessible in JS via `element.dataset`.

**Quick Revision:** Element = tag; Attribute = name-value pair inside opening tag; void elements have no closing tag; data-* for custom data.

---

## 58. Headings, Paragraphs & Text Formatting

**Core Concepts:**
- Headings `<h1>` to `<h6>` — `<h1>` most important (should appear once per page ideally, for SEO/accessibility), decreasing importance to `<h6>`.
- `<p>` for paragraphs.
- Formatting tags: `<b>`/`<strong>` (bold; `<strong>` also conveys semantic importance), `<i>`/`<em>` (italic; `<em>` conveys semantic emphasis), `<br>` (line break), `<hr>` (horizontal rule).

**Important Differences:**

| | Visual only | Visual + Semantic meaning |
|---|---|---|
| Bold | `<b>` | `<strong>` |
| Italic | `<i>` | `<em>` |

**Viva Questions:**
- Q: Difference between `<b>` and `<strong>`? A: Both render bold visually, but `<strong>` also conveys semantic importance to screen readers/SEO, while `<b>` is purely stylistic.

**Quick Revision:** h1→h6 hierarchy; strong/em = semantic + visual; b/i = visual only.

---

## 59. Links & Images

**Syntax:**
```html
<a href="page.html">Link text</a>
<a href="https://ext.com" target="_blank" rel="noopener noreferrer">External</a>
<img src="pic.jpg" alt="Description" width="300" height="200">
```

**Core Concepts:** `href` = destination URL; `target="_blank"` opens in a new tab (should pair with `rel="noopener noreferrer"` for security); `alt` attribute on `<img>` is essential — describes image for screen readers AND displays if image fails to load (also important for SEO).

**Common Mistakes:** Omitting `alt` attribute (accessibility/SEO issue); using `target="_blank"` without `rel="noopener"` (minor security risk — new page can access `window.opener`).

**Viva Questions:**
- Q: Why is the alt attribute important? A: Accessibility (screen readers describe the image to visually impaired users), SEO, and fallback text if the image fails to load.
- Q: Why add rel="noopener" with target="_blank"? A: Prevents the newly opened page from accessing/manipulating the original page via window.opener (security).

**Quick Revision:** alt is mandatory for accessibility/SEO; target="_blank" + rel="noopener noreferrer" for external links.

---

## 60. Lists

**Core Concepts:**
```html
<ul>  <!-- unordered: bullets -->
  <li>Item</li>
</ul>
<ol>  <!-- ordered: numbers -->
  <li>Item</li>
</ol>
<dl>  <!-- description list -->
  <dt>Term</dt><dd>Definition</dd>
</dl>
```
Lists can be nested (a `<ul>`/`<ol>` inside an `<li>`).

**Viva Questions:**
- Q: ul vs ol? A: ul = unordered (bullet points, no inherent sequence); ol = ordered (numbered, sequence matters).

**Quick Revision:** ul=bullets, ol=numbers, dl=term/definition pairs; can nest lists inside `<li>`.

---

## 61. Tables

**Syntax:**
```html
<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Aayush</td><td>22</td></tr>
  </tbody>
</table>
```

**Core Concepts:** `<table>` → `<tr>` (row) → `<th>` (header cell, bold+centered by default) / `<td>` (data cell). `<thead>`, `<tbody>`, `<tfoot>` group rows semantically. `colspan`/`rowspan` attributes merge cells across columns/rows.

**Viva Questions:**
- Q: th vs td? A: th = header cell (semantically marks it as a heading, bold+centered by default, better for accessibility); td = regular data cell.
- Q: What do colspan/rowspan do? A: Merge a cell across multiple columns or rows respectively.

**Quick Revision:** table>tr>th/td; thead/tbody/tfoot for semantic grouping; colspan/rowspan merge cells.

---

## 62. Forms & Input Types [HIGH PRIORITY]

**Syntax:**
```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <input type="password" name="pwd">
  <input type="checkbox" name="agree">
  <input type="radio" name="gender" value="m">
  <select name="city"><option>Delhi</option></select>
  <textarea name="msg"></textarea>
  <button type="submit">Submit</button>
</form>
```

**Core Concepts:**
- `action` = URL to submit data to; `method` = `GET` (data in URL, visible, for retrieving) or `POST` (data in body, used for sensitive/large data, creating/updating).
- Input types: `text`, `email`, `password`, `number`, `checkbox`, `radio`, `date`, `file`, `submit`.
- `<label for="id">` linked to input's `id` — improves accessibility and lets clicking the label focus/toggle the input.
- Validation attributes: `required`, `minlength`, `maxlength`, `pattern`, `min`, `max`.
- `name` attribute is what's actually sent as the key in form submission (not `id`).

**Common Mistakes:** Forgetting `name` attribute on inputs (data won't be submitted, since `name` is the key, not `id`); not linking `<label for>` to input `id`.

**Viva Questions:**
- Q: GET vs POST method in forms? A: GET appends data to the URL (visible, cacheable, used for retrieving/searching, size-limited); POST sends data in the request body (not visible in URL, used for sensitive data or creating/updating records).
- Q: Why is the name attribute important on inputs? A: It's the key used when the form data is submitted/sent to the server — without it, the field's value isn't included.

**Explain to Teacher:** "HTML forms collect user input using various input elements like text fields, checkboxes, and radio buttons, all wrapped in a form tag with an action URL and a method — GET or POST. GET sends data visibly through the URL and is meant for retrieving data, while POST sends it in the request body, suited for sensitive or larger data like creating a new record. Each input needs a name attribute, since that's the actual key sent to the server, and labels should be linked to inputs via the for attribute for accessibility."

**Quick Revision:** GET=URL/visible/retrieve; POST=body/hidden/create-update; name attribute = submission key; label-for linked to input id; required/pattern for basic validation.

---

## 63. Semantic HTML [HIGH PRIORITY]

**Definition:** Using HTML tags that convey MEANING about their content's role/purpose, not just visual appearance — as opposed to generic `<div>`/`<span>` for everything.

**Core Concepts / Examples:**
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
```
- `<header>`: intro/navigation content of a page or section.
- `<nav>`: navigation links.
- `<main>`: primary unique content of the page (only one per page).
- `<article>`: independent, self-contained content (blog post, news article).
- `<section>`: thematic grouping of content, usually with a heading.
- `<aside>`: tangential content (sidebar, related links).
- `<footer>`: footer content (copyright, links).

**Why used:** Improves accessibility (screen readers understand page structure), SEO (search engines better understand content importance/structure), and code readability/maintainability.

**Common Mistakes:** Using `<div>` for everything ("divitis") instead of meaningful semantic tags.

**Viva Questions:**
- Q: Why use semantic tags instead of just divs? A: Better accessibility (screen readers can navigate by landmarks), better SEO, and more readable/self-documenting code.
- Q: article vs section? A: article is independent/self-contained content that could stand alone (e.g., blog post); section is a thematic grouping within a page, often needing a heading, not necessarily standalone.

**Explain to Teacher:** "Semantic HTML means using tags that describe the meaning and role of content, like header, nav, main, article, and footer, instead of relying only on generic divs. This matters because screen readers and search engines use these tags to understand a page's structure — for instance, a screen reader user can jump directly to the nav or main content — and it also makes the code more self-documenting for other developers."

**Quick Revision:** header/nav/main/article/section/aside/footer; improves accessibility+SEO+readability; avoid "divitis".

---

## 64. div vs span

**Important Differences:**

| | `<div>` | `<span>` |
|---|---|---|
| Display type | Block-level | Inline |
| Use case | Group larger sections/blocks of content | Style/target a small piece of text inline |
| Takes new line? | Yes | No |

**Viva Questions:**
- Q: When would you use span instead of div? A: When you need to style or target a small inline piece of content (like a single word) without breaking the line, e.g., `<span class="highlight">word</span>`.

**Quick Revision:** div = block container for larger structure; span = inline container for small text/inline elements.

---

## 65. Block vs Inline Elements [HIGH PRIORITY]

**Important Differences:**

| | Block | Inline |
|---|---|---|
| New line? | Starts on new line, takes full width | Stays in flow, only as wide as content |
| width/height | Respected | Ignored |
| Margin/padding | All sides respected | Vertical margin ignored, horizontal respected |
| Examples | `div, p, h1-h6, ul, li, section, form` | `span, a, img, strong, em, input` |

**Common Mistakes:** Trying to set `width`/`height` on inline elements like `<span>` (has no effect unless changed to `inline-block` or `block`).

**Viva Questions:**
- Q: Give 3 block and 3 inline elements. A: Block: div, p, h1; Inline: span, a, strong (or similar valid examples).
- Q: Can inline elements have width/height set? A: No, not by default — needs `display:inline-block` first.

**Quick Revision:** Block = own line + full width + respects sizing; inline = flows with text + ignores width/height + only horizontal margin works.

---

## 66. HTML5 Features [HIGH PRIORITY]

**Definition:** New elements/APIs introduced in HTML5 improving semantics, multimedia, and functionality without needing plugins (like Flash).

**Core Concepts (summary):**
- New semantic tags: `header, nav, main, section, article, aside, footer, figure, figcaption`.
- Native multimedia: `<audio>`, `<video>` (no Flash plugin needed).
- New form input types: `email, date, number, range, color, url, tel`.
- `<canvas>` for 2D drawing/graphics via JS.
- APIs: Geolocation, Local/Session Storage, Drag & Drop, Web Workers (background threads), WebSockets (real-time bi-directional communication).

**Viva Questions:**
- Q: Name 3 new HTML5 semantic tags. A: header, nav, article (or section, footer, aside).
- Q: What replaced Flash for multimedia in HTML5? A: Native `<audio>` and `<video>` tags.

**Quick Revision:** Semantic tags + audio/video + canvas + new form input types + storage/geolocation APIs = core HTML5 additions.

---

## 67. Audio & Video

**Syntax:**
```html
<video controls width="400" autoplay muted loop>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support video.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

**Core Concepts:** `controls` shows play/pause/volume UI; multiple `<source>` tags provide fallback formats for browser compatibility; `autoplay` (often requires `muted` to work due to browser policies), `loop`, `muted` attributes.

**Viva Questions:**
- Q: Why use multiple `<source>` tags? A: Different browsers support different video/audio formats/codecs, so providing multiple sources ensures broader compatibility.

**Quick Revision:** controls/autoplay/loop/muted attributes; multiple `<source>` for format fallback.

---

## 68. iframe

**Definition:** Embeds another HTML document (webpage) within the current page.

**Syntax:**
```html
<iframe src="https://example.com" width="600" height="400" title="Embedded page"></iframe>
```

**Core Concepts:** Common uses: embedding YouTube videos, Google Maps, ads. Security consideration: `sandbox` attribute restricts iframe capabilities (scripts, forms, popups) to prevent malicious embedded content.

**Viva Questions:**
- Q: What is an iframe used for? A: Embedding another web page/document inside the current page, e.g., YouTube video embeds, maps.
- Q: Security concern with iframes? A: Can be used for clickjacking attacks; mitigated using the `sandbox` attribute or `X-Frame-Options` HTTP header.

**Quick Revision:** Embeds external content; needs `title` for accessibility; `sandbox` attribute for security restriction.

---

## 69. Meta Tags

**Definition:** `<meta>` tags provide metadata about the HTML document (not visible on page) — used by browsers, search engines, social media.

**Core Concepts / Examples:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description for SEO">
<meta name="keywords" content="html, css, js">
```
- `charset`: character encoding (UTF-8 standard, supports all languages/symbols).
- `viewport`: essential for responsive design on mobile devices.
- `description`: shown in search engine results (SEO).

**Viva Questions:**
- Q: Why is the viewport meta tag important? A: Without it, mobile browsers render pages at a default desktop width, breaking responsive design.
- Q: What does charset="UTF-8" do? A: Sets the character encoding so all text/symbols/languages render correctly.

**Quick Revision:** charset (encoding), viewport (mobile responsiveness — essential), description (SEO) are the most important meta tags to know.

---

## 70. HTML Entities

**Definition:** Special codes used to display reserved/special characters that would otherwise be interpreted as HTML syntax.

**Examples:**

| Entity | Renders |
|---|---|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&quot;` | " |
| `&nbsp;` | (non-breaking space) |
| `&copy;` | © |

**Viva Questions:**
- Q: Why can't you just type `<` directly in HTML content? A: The browser would interpret it as the start of a tag; entities like `&lt;` let you display it as literal text.

**Quick Revision:** Entities display reserved characters (`<`, `>`, `&`) or special symbols safely as text.

---

## 71. Accessibility Basics [HIGH PRIORITY]

**Definition:** Designing web content so it's usable by people with disabilities (visual, auditory, motor, cognitive), often using assistive technology like screen readers.

**Core Concepts:**
- Use semantic HTML (nav, main, button vs div) — screen readers rely on this for navigation landmarks.
- `alt` text on all meaningful images.
- `<label>` linked to form inputs.
- Sufficient color contrast between text and background.
- Keyboard navigability (all interactive elements usable via Tab/Enter, not just mouse).
- ARIA attributes (`aria-label`, `aria-hidden`, `role`) supplement semantics when native HTML isn't enough (should be used only when semantic HTML can't achieve the same result — "no ARIA is better than bad ARIA").

**Viva Questions:**
- Q: Why prefer semantic HTML over ARIA when possible? A: Semantic elements have built-in accessibility behavior/support across browsers and assistive tech; ARIA is a supplement for cases native HTML can't cover, and misused ARIA can make things worse.
- Q: Give 3 accessibility best practices. A: Alt text on images, labeled form inputs, sufficient color contrast (or keyboard navigability).

**Quick Revision:** Semantic HTML first; alt text; labeled inputs; keyboard accessibility; ARIA as a supplement, not a replacement.

---

## 72. id vs class [HIGH PRIORITY]

**Important Differences:**

| | id | class |
|---|---|---|
| Uniqueness | Must be unique per page (one element only) | Can be reused across multiple elements |
| CSS selector | `#idname` | `.classname` |
| Specificity | Higher | Lower |
| JS access | `getElementById()` | `getElementsByClassName()` / `querySelectorAll()` |
| Typical use | Unique element (a specific header, a JS hook, anchor links `#section`) | Reusable styling across many elements |

**Common Mistakes:** Using the same `id` on multiple elements (invalid HTML — ids must be unique); using `id` for general styling that should be reusable via `class`.

**Viva Questions:**
- Q: Can two elements share the same id? A: No, id must be unique within the page — this is a validation error if violated.
- Q: Which has higher CSS specificity, id or class? A: id.

**Explain to Teacher:** "The id attribute uniquely identifies a single element on the page and should only be used once, while class can be applied to multiple elements for reusable styling. IDs also have higher CSS specificity than classes and are commonly used as JavaScript hooks or anchor targets, whereas classes are the standard way to apply shared styles across many elements."

**Quick Revision:** id = unique, higher specificity, `#`; class = reusable, lower specificity, `.`; prefer class for styling, id for unique hooks/anchors.

---

---

# FINAL RAPID REVISION

## A. Top 50 Concepts You Absolutely Must Know

1. let/const vs var (scope, hoisting, reassignment)
2. Hoisting (var=undefined, let/const=TDZ, functions fully hoisted)
3. Scope (global/function/block) & lexical scoping
4. Closures via lexical scope (inner fn accessing outer fn variables)
5. `this` — dynamic (regular fn) vs lexical (arrow fn)
6. Primitive vs Reference types (value vs reference storage)
7. == vs === (coercion vs strict)
8. Truthy/Falsy values (6 falsy: false,0,"",null,undefined,NaN)
9. Arrow functions — no own `this`, no `arguments`, can't be constructors
10. Array methods: map/filter/reduce (non-mutating) vs push/pop/splice (mutating)
11. Object access: dot vs bracket notation
12. Destructuring (object & array)
13. Spread (expand) vs Rest (collect) — same `...` syntax
14. DOM = tree representation of HTML, browser API not JS itself
15. querySelector/querySelectorAll vs getElementById/getElementsByClassName
16. innerText (safe) vs innerHTML (XSS risk)
17. addEventListener + event object (target, preventDefault, stopPropagation)
18. Event Bubbling (default, bottom→up) vs Capturing (top→down)
19. Event delegation (parent listener handles child events via bubbling)
20. Callbacks → Promises → async/await (evolution of async handling)
21. Promise states: pending/fulfilled/rejected
22. async/await built on Promises; try/catch for errors
23. fetch() doesn't reject on HTTP errors (404/500) — only network failure
24. Event Loop: Call Stack → Web APIs → Microtask Queue (Promises, priority) → Macrotask Queue (setTimeout)
25. JSON.stringify (obj→string) vs JSON.parse (string→obj)
26. localStorage (persistent) vs sessionStorage (tab-only)
27. Box Model: Content→Padding→Border→Margin
28. box-sizing: content-box (default) vs border-box (predictable, common practice)
29. Flexbox: main axis (justify-content) vs cross axis (align-items)
30. CSS Grid: 2D layout, fr unit, grid-template-columns/rows
31. Flexbox (1D) vs Grid (2D) — when to use which
32. Position: static/relative/absolute/fixed/sticky
33. absolute needs a positioned ancestor to anchor to
34. display: block vs inline vs inline-block vs none
35. display:none (removes from layout) vs visibility:hidden (keeps space)
36. CSS Specificity: !important > inline > id > class > element
37. Pseudo-class (`:hover`, state) vs Pseudo-element (`::before`, part/content)
38. Selectors: `.class`(reusable) vs `#id`(unique) vs `div p`(descendant) vs `div > p`(child)
39. Units: px(fixed) vs %/em(relative to parent) vs rem(relative to root) vs vw/vh(viewport)
40. Media queries: min-width (mobile-first) vs max-width (desktop-first)
41. Transition (needs trigger, 2 states) vs Animation (@keyframes, auto-run, loops)
42. z-index only works on positioned (non-static) elements
43. Semantic HTML tags (header/nav/main/article/section/footer) & why they matter
44. div (block) vs span (inline)
45. Block vs Inline elements — width/height respected or not
46. Forms: GET (URL, visible) vs POST (body, hidden); name attribute = submission key
47. id (unique, high specificity) vs class (reusable, lower specificity)
48. alt attribute — accessibility + SEO + fallback
49. Viewport meta tag — mandatory for responsive design
50. ES6+ features: classes, modules, template literals, Map/Set, optional chaining `?.`, nullish coalescing `??`

---

## B. Top 50 Likely Viva Questions (Rapid Fire)

1. **What is JS?** Interpreted scripting language adding interactivity to web pages.
2. **var vs let vs const?** var=function-scoped/redeclarable; let=block-scoped/reassignable; const=block-scoped/not reassignable.
3. **What is hoisting?** Declarations moved to top of scope before execution; var→undefined, let/const→TDZ.
4. **What is TDZ?** Time between scope start and let/const declaration where access throws ReferenceError.
5. **null vs undefined?** undefined=declared, no value; null=explicitly assigned "no value".
6. **typeof null?** "object" (known JS bug/quirk).
7. **== vs ===?** == allows type coercion; === checks type+value strictly.
8. **What are closures?** A function retaining access to its outer scope's variables even after the outer function has returned.
9. **What is `this` in arrow functions?** Lexically inherited from enclosing scope, not dynamic.
10. **map vs forEach?** map returns new array; forEach returns undefined (just iterates).
11. **slice vs splice?** slice=non-mutating copy; splice=mutates original array.
12. **What is a Promise?** Object representing eventual completion/failure of an async operation.
13. **3 Promise states?** Pending, Fulfilled, Rejected.
14. **What does await do?** Pauses async function execution until Promise resolves.
15. **Callback hell?** Deeply nested callbacks, hard to read; solved by Promises/async-await.
16. **What is DOM?** Tree-structured object representation of HTML that JS can manipulate.
17. **innerText vs innerHTML?** innerText=safe text; innerHTML=raw markup (XSS risk).
18. **What is event bubbling?** Event propagates from target element up through its ancestors.
19. **preventDefault() use?** Stops default browser action (e.g., form submission/reload).
20. **What is event delegation?** One listener on a parent handles events from (dynamic) children via bubbling.
21. **fetch() and 404 errors?** Doesn't reject; only rejects on network failure — must check response.ok.
22. **Why is JS single-threaded but non-blocking?** Async ops offloaded to Web APIs, results queued & handled by event loop.
23. **Microtask vs Macrotask priority?** Microtasks (Promises) run before macrotasks (setTimeout).
24. **JSON.stringify vs parse?** stringify=object→string; parse=string→object.
25. **localStorage vs sessionStorage?** localStorage persists until cleared; sessionStorage clears on tab close.
26. **What is the box model?** Content→Padding→Border→Margin layering of every element.
27. **content-box vs border-box?** content-box: width excludes padding/border; border-box: width includes them.
28. **Flexbox main axis vs cross axis?** justify-content=main axis; align-items=cross axis.
29. **Flexbox vs Grid?** Flexbox=1D (row or column); Grid=2D (rows and columns together).
30. **position: absolute behavior?** Removed from flow, positioned relative to nearest positioned ancestor.
31. **absolute vs fixed?** absolute=relative to positioned ancestor, scrolls with page; fixed=relative to viewport, stays put.
32. **display:none vs visibility:hidden?** none=removed from layout; hidden=invisible but space kept.
33. **CSS specificity order?** !important > inline > ID > class/attribute/pseudo-class > element.
34. **Pseudo-class vs pseudo-element?** `:` = state (hover); `::` = part/generated content (before/after).
35. **em vs rem?** em=relative to parent font-size (compounds); rem=relative to root font-size.
36. **What triggers a CSS transition?** A property value change from a state change (hover, class toggle).
37. **Transition vs Animation?** Transition needs trigger, 2 states; animation uses @keyframes, can auto-run/loop.
38. **Why avoid float for layout today?** Causes parent collapse, harder to control than Flexbox/Grid.
39. **What is responsive design?** Layouts adapting to different screen sizes via relative units, flexible layouts, media queries.
40. **min-width vs max-width media query?** min-width=mobile-first (scale up); max-width=desktop-first (scale down).
41. **Why is the viewport meta tag necessary?** Prevents mobile browsers from rendering at default desktop width.
42. **What is semantic HTML?** Tags conveying meaning (nav, article, footer) vs generic divs — better accessibility/SEO.
43. **div vs span?** div=block, groups sections; span=inline, styles small text portions.
44. **id vs class?** id=unique/one element/high specificity; class=reusable/multiple elements/lower specificity.
45. **GET vs POST (forms)?** GET=data in URL, for retrieving; POST=data in body, for sensitive/create-update actions.
46. **Why is alt attribute important?** Accessibility (screen readers), SEO, fallback if image fails to load.
47. **What's the purpose of the name attribute on inputs?** It's the key used when form data is submitted (not id).
48. **What are ARIA attributes for?** Supplementing accessibility when native semantic HTML isn't sufficient.
49. **Spread vs Rest operator?** Spread expands elements out; Rest collects elements into an array — same `...` syntax, opposite direction.
50. **Array.isArray() use?** Correctly checks if a variable is an array (typeof returns "object" for arrays, which is misleading).

---

## C. Top 25 Important Differences / Comparisons

1. var vs let vs const
2. == vs ===
3. null vs undefined
4. map vs forEach
5. slice vs splice
6. Regular function vs Arrow function (`this` binding)
7. Synchronous vs Asynchronous JS
8. Callbacks vs Promises vs async/await
9. Microtask Queue vs Macrotask Queue
10. localStorage vs sessionStorage
11. innerText vs innerHTML
12. getElementById vs querySelector
13. Event Bubbling vs Event Capturing
14. content-box vs border-box
15. Flexbox vs Grid
16. position: relative vs absolute vs fixed vs sticky
17. display: block vs inline vs inline-block
18. display: none vs visibility: hidden
19. Pseudo-class vs Pseudo-element
20. em vs rem vs px vs %
21. min-width vs max-width media queries
22. Transition vs Animation
23. div vs span
24. id vs class
25. GET vs POST (forms)

---

## D. Top 25 Code Snippets to Remember

```js
// 1. let/const/var
let x = 1; const y = 2; var z = 3;

// 2. Arrow function
const add = (a, b) => a + b;

// 3. Template literal
`Hello ${name}`;

// 4. Destructuring
const { a, b } = obj;
const [x, y] = arr;

// 5. Spread (copy/merge)
const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, key: "val" };

// 6. Rest params
function sum(...nums) { return nums.reduce((a,b)=>a+b); }

// 7. map/filter/reduce
arr.map(x => x*2);
arr.filter(x => x > 5);
arr.reduce((acc,x) => acc+x, 0);

// 8. Ternary
let result = age >= 18 ? "Adult" : "Minor";

// 9. Optional chaining & nullish coalescing
user?.address?.city;
let val = input ?? "default";

// 10. Select DOM element
document.querySelector(".class");

// 11. Add event listener
btn.addEventListener("click", (e) => { e.preventDefault(); });

// 12. Toggle class
el.classList.toggle("active");

// 13. Create + append element
let div = document.createElement("div");
parent.appendChild(div);

// 14. Promise
new Promise((resolve, reject) => { resolve("done"); })
  .then(res => console.log(res));

// 15. async/await with try-catch
async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
  } catch (e) { console.log(e); }
}

// 16. JSON
JSON.stringify(obj);
JSON.parse(str);

// 17. localStorage
localStorage.setItem("k", JSON.stringify(obj));
JSON.parse(localStorage.getItem("k"));

// 18. Class (ES6)
class Person {
  constructor(name){ this.name = name; }
  greet(){ console.log(this.name); }
}

// 19. Flexbox centering
/* CSS */
.parent { display:flex; justify-content:center; align-items:center; }

// 20. Grid basic
.container { display:grid; grid-template-columns: repeat(3, 1fr); }

// 21. Box-sizing reset
* { box-sizing: border-box; }

// 22. Media query (mobile-first)
@media (min-width: 768px) { .box { flex-direction: row; } }

// 23. CSS transition
.box { transition: all 0.3s ease; }
.box:hover { transform: scale(1.1); }

// 24. Keyframe animation
@keyframes fade { from{opacity:0;} to{opacity:1;} }
.box { animation: fade 1s ease-in; }

// 25. HTML form
<form action="/submit" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>
```

---

## E. Most Commonly Confused Concepts

- **`==` vs `===`** — coercion vs strict comparison.
- **`null` vs `undefined`** — assigned-empty vs never-assigned.
- **Arrow function `this` vs regular function `this`** — lexical vs dynamic.
- **`slice` vs `splice`** — copy vs mutate.
- **`map` vs `forEach`** — returns array vs returns nothing.
- **Event bubbling vs capturing** — direction of propagation (up vs down).
- **Microtasks vs Macrotasks** — Promises run before setTimeout even at 0ms delay.
- **`content-box` vs `border-box`** — whether padding/border add to declared width.
- **`position: absolute` vs `fixed`** — nearest positioned ancestor vs viewport.
- **`display:none` vs `visibility:hidden`** — removes layout space vs keeps it.
- **Pseudo-class (`:`) vs pseudo-element (`::`)** — state vs generated content/part.
- **`em` vs `rem`** — relative to parent vs relative to root.
- **Flexbox vs Grid** — 1D vs 2D.
- **`id` vs `class`** — unique/high-specificity vs reusable/lower-specificity.
- **Spread vs Rest** — same syntax, expand vs collect.
- **`var` function-scope leak** vs `let`/`const` proper block scoping.

---

## F. Last-Minute Revision Checklist

- [ ] Can explain var/let/const differences with hoisting behavior
- [ ] Can explain `this` in arrow vs regular functions
- [ ] Can explain event loop (call stack → microtask → macrotask) with a code trace example
- [ ] Know all non-mutating vs mutating array methods
- [ ] Can explain Promise states and async/await error handling
- [ ] Can explain DOM selection methods and manipulation methods
- [ ] Can explain event bubbling + one real use case (event delegation)
- [ ] Can draw/explain the CSS box model and box-sizing
- [ ] Can explain Flexbox main/cross axis with a centering example
- [ ] Know when to use Grid vs Flexbox
- [ ] Can explain all 5 position values with a quick example
- [ ] Know CSS specificity order by heart
- [ ] Can explain pseudo-class vs pseudo-element with examples
- [ ] Can explain semantic HTML and why it matters
- [ ] Can explain GET vs POST and the `name` attribute's role in forms
- [ ] Know id vs class differences (uniqueness + specificity)
- [ ] Have 2-3 "Explain to Teacher" scripts memorized for HIGH PRIORITY topics

---

## G. If You Only Have 2–3 Hours Left — Priority Order

**Hour 1 (JS core, highest viva-frequency):**
1. var/let/const + hoisting + scope
2. `this` (arrow vs regular)
3. Array methods (map/filter/reduce vs push/splice)
4. Objects + destructuring + spread/rest
5. DOM + DOM manipulation + events + event bubbling

**Hour 2 (JS async — very commonly asked):**
6. Callbacks → Promises → async/await
7. Fetch API + its 404 gotcha
8. Event loop (call stack/microtask/macrotask) — very popular "explain the output" question
9. JSON + localStorage

**Hour 3 (CSS + HTML — high-yield, quick to revise):**
10. Box model + box-sizing
11. Flexbox (justify-content/align-items) + Grid basics
12. Position values (especially absolute vs fixed)
13. Specificity + pseudo-class vs pseudo-element
14. Semantic HTML + id vs class + GET vs POST forms
15. Skim the Top 50 Viva Questions list (Section B) once, out loud

**If truly down to the last 30 minutes:** Just read Section A (Top 50 Concepts) and Section B (Top 50 Viva Questions) — these cover ~80% of what's likely to be asked.

---

*End of notes — 72/72 topics covered. Good luck for tomorrow.*
