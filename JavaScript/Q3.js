var a = 32;
a = 43;
console.log(a);

function abc(){
    var c = 10;
    console.log(c);
}

//this is global scope

let b = 20;
console.log(b);

//declaration of a variable using let and initialization of a variable using let

//const is used to declare a variable that cannot be reassigned
const d = 50;
console.log(d);

//this is block scope
//let and const are block scoped, meaning they are only accessible within the block they are defined in
//var is function scoped, meaning it is accessible within the function it is defined in


//hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase
//variables declared with var are hoisted to the top of their scope and initialized with undefined
//functions declared with the function keyword are also hoisted to the top of their scope
//variables declared with let and const are hoisted to the top of their scope but are not initialized, meaning they cannot be accessed until they are declared

//example of hoisting with var  
var e = 60;
console.log(e);

//example of hoisting with let
let f = 70;
console.log(f);

//example of hoisting with const
const g = 80;
console.log(g);


//Stages of Code Execution in JavaScript
//1. Creation Phase: In this phase, the JavaScript engine scans the code and allocates memory for variables and functions. Variables declared with var are initialized with undefined, while variables declared with let and const are not initialized. Functions are also hoisted to the top of their scope.
//2. Execution Phase: In this phase, the JavaScript engine executes the code line by line. Variables and functions are assigned their values, and the code is executed as intended.
//3. Cleanup Phase: In this phase, the JavaScript engine cleans up the memory used by variables and functions that are no longer needed. This is done to free up memory and improve performance.
//4. Garbage Collection: In this phase, the JavaScript engine automatically identifies and removes objects that are no longer reachable or needed by the program. This helps to prevent memory leaks and optimize memory usage.
//5. Event Loop: In this phase, the JavaScript engine continuously checks for events and executes the corresponding callback functions. This allows for asynchronous programming and enables the handling of multiple tasks concurrently.
//6. Call Stack: In this phase, the JavaScript engine maintains a stack of function calls. When a function is called, it is added to the top of the stack, and when it returns, it is removed from the stack. This allows for proper execution order and handling of nested function calls.
//7. Execution Context: In this phase, the JavaScript engine creates an execution context for each function call. This context contains information about the function's scope, variables, and the value of this. Each execution context is pushed onto the call stack when a function is called and popped off when the function returns.
//8. Scope Chain: In this phase, the JavaScript engine maintains a chain of scopes that determines the accessibility of variables and functions. When a variable or function is referenced, the engine looks for it in the current scope and then moves up the chain to parent scopes until it finds the reference or reaches the global scope.
//9. Closures: In this phase, the JavaScript engine allows functions to access variables from their outer scope even after the outer function has returned. This is known as a closure and enables the creation of private variables and functions.


//hoisting
//hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, it's important to note that only the declarations are hoisted, not the initializations. Variables declared with var are hoisted and initialized with undefined, while variables declared with let and const are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
//temporal dead zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared. This means that if you try to access a variable declared with let or const before its declaration, you will get a ReferenceError. The TDZ exists to prevent the use of uninitialized variables and to enforce the block scoping rules of let and const.

//type conversion
//type coercion is the process of converting a value from one data type to another. In JavaScript, this can happen implicitly or explicitly. Implicit type conversion occurs when the JavaScript engine automatically converts a value to a different type based on the context in which it is used. For example, when adding a number and a string, the number is implicitly converted to a string. Explicit type conversion, on the other hand, is when you manually convert a value to a different type using functions like Number(), String(), or Boolean(). It's important to be aware of type conversion in JavaScript to avoid unexpected results and bugs in your code.

//example of type coercion
var x = 5;
var y = "10";
var z = x + y;
console.log(z);

//ternary operator
//example
