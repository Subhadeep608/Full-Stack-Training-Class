console.log(`Day 20: "this" Listeners`);

// localStorage and sessionStorage
// Both localStorage and sessionStorage are used to store data in the browser. They allow us to save data as key-value pairs.
// The main difference is how long the data remains stored.

// 1. localStorage
// localStorage stores data in the browser permanently until we manually delete it.

// Store data
// localStorage.setItem("name", "Subhadeep");
// localStorage.setItem("age", "25");

// Get data
// let username = localStorage.getItem("name");
// console.log(username); // Subhadeep
// console.log(localStorage.getItem("age")); // 25

// Remove a specific item
// localStorage.removeItem("name");

// Remove all stored data
// localStorage.clear();


// 2. sessionStorage
// sessionStorage stores data only for the current browser tab session.
// If you close that tab, the stored data is deleted.

// Store data
// sessionStorage.setItem("name", "Rahul");

// Get data
// let username = sessionStorage.getItem("name");
// console.log(username); // Rahul

// Remove a specific item
// sessionStorage.removeItem("name");

// Remove all stored data
// sessionStorage.clear();


// here is the practical example of localStorage and sessionStorage:
// function saveData() {
//     let name = document.getElementById("username").value;

//     localStorage.setItem("student", name);
//     sessionStorage.setItem("student", name);

//     alert("Data saved!");
// }


// function showData() {
//     console.log("Local:", localStorage.getItem("student"));
//     console.log("Session:", sessionStorage.getItem("student"));
// }



// JavaScript Scope
// Scope determines the accessibility (visibility) of variables.
// 1. Global scope
// 2. Function scope
// 3. Block scope

//(1). Global Scope
// Variables declared Globally (outside any block or function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.

// Example - 
// let carName = "Volvo"; //global variable
// myFunction();
// function myFunction() {
//     document.getElementById("demo").innerHTML = "I can display " + carName;
// }


// (2). Function Scope
// Variables defined inside a function are not accessible (visible) from outside the function.

// function myFunction(){
//     let carName = "volvo"; //local variable
//     document.getElementById("demo").innerHTML = "I can display " + carName;
// }
// myFunction();


// (3). Block Scope
// Variables declared with let and const are block scoped.
// A block is a chunk of code bounded by { }.
// A block can be used with control structures (if, for, etc.) and functions.

// myFunction();
// // code here can use carName as a global variable
// document.getElementById("demo").innerHTML = "I can display " + carName;

// function myFunction() {
//   carName = "Volvo";
// }











// JavaScript Hoisting
// Hoisting in JavaScript means that variable and function declarations are processed before the code executes.

// console.log(x); // Output: undefined
// var x = 5; // Output: undefind
// console.log(x); // Output: 5
/*
JS-Read on this way
-----------------------
var a;        // Declaration is hoisted
console.log(a); // undefined
a = 10;       // Assignment stays here
*/

// Function hoisting
// greet();
// function greet() {
//   console.log("Hello Students!");
// }

// Function expressions are not hoisted
// sayHello();
// var sayHello = function() {
//   console.log("Hello!");
// };







// JavaScript Closures
// A closure allows an inner function to access the variables of its outer function even after the outer function has completed execution.

// example - 
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// let result = outer();

// result();
// result();
// result();
// result();

// Regular Expressions: 
// A Regular Expression is a sequence of characters that forms a search pattern.
// RegExp can be used for: Text searching, Text replacing, and Text validation.
// Syntax - /pattern/modifier flags
// Example- 


let text = "Visit PPM!"; 

// let n = text.search(/PPM/i); // / /i
// document.getElementById("demo").innerHTML = n;  // 6

// const myArr = text.match(/PPM/);
// document.getElementById("demo").innerHTML = myArr;

let result = text.replace(/PPM/i, "Infotech");
document.getElementById("demo").innerHTML = result;


