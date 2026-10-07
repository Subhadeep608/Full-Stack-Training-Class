// Function
// A function is reusable Block of stement that exicute to a specific task. 
// function greet(name) {
//   console.log("Hello, " + name);
// }

// greet("Ravi");
// greet("Anita");
// greet("John");


// Higher order function  - A function that take one or more function as argument and also it can be return a function.
// Ex-1
    // // 1. The Callback Functions (the workers)
    // const add = (a, b) => a + b;
    // const multiply = (a, b) => a * b;

    // // 2. The Higher-Order Function (the manager/abstractor)
    // // It accepts an 'operation' function as its third argument
    // function calculate(num1, num2, operation) {
    // return operation(num1, num2); 
    // }

    // // 3. Execution
    // console.log(calculate(5, 3, add));       // Output: 8
    // console.log(calculate(5, 3, multiply));  // Output: 15

// Ex-2 
// The Higher-Order Function
// function createMultiplier(factor) {
//   // It returns a brand new anonymous function
//   return function(number) {
//     return number * factor; // 'factor' is remembered via closure
//   };
// }

// // Generating specific functions
// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// // Execution
// console.log(double(10)); // Output: 20
// console.log(triple(10)); // Output: 30

// => return is a keyword, that use for stop the function execution.
// 6. What happens without return?
// function multiply(a, b) {
//   console.log(a * b);
// }

// let result = multiply(4, 5);
// // 20
// console.log(result);  // undefined



// #. Default parameters - A default parameter is used when no argument is provided.
// function greet(name= "friend" ) {
//   console.log("Hello, " + name);
// }

// greet("Ravi");
// greet();


// 2. Function expression - A function can be stored in a variable
// let variableFName = function(arg1, arg2){
//     return  ;
// }

// const greet = function (name) {
//   return "Hello, " + name;
// };
// console.log(greet("Ravi"));


// 3. Arrow functions - Arrow functions are a shorter way to write functions.
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2,3)); //5

// const square = number => number * number;
// console.log(square(4)); // 16


//               <--------------  A practical shopping-cart example  --------------->

// function calculateItemTotal(price, quantity) {
//   return price * quantity;
// }

// function calculateDiscount(total) {
//   if (total >= 1000) {
//     return total * 0.10;
//   }

//   return 0;
// }

// function calculateFinalAmount(total, discount) {
//   return total - discount;
// }

// let itemTotal = calculateItemTotal(600, 2);  // 1200
// let discount = calculateDiscount(itemTotal); //  120
// let finalAmount = calculateFinalAmount(itemTotal, discount); // 1200 - 120 = 1080

// console.log("Item total:", itemTotal);
// console.log("Discount:", discount);
// console.log("Final amount:", finalAmount);

// 3. Immediately Invoked Function Expression
// An IIFE is a function that is created and executed immediately.
// (function () {
//   // code
// })();

// (() => {
//   console.log("This also runs immediately");
// })();
// (function () {
//   console.log("This runs immediately");
// })();


// 4.  Recursive function - A recursive function calls itself.
// function countdown(number) {
//   if (number === 0) {
//     console.log("Finished");
//     return;
//   }

//   console.log(number);
//   countdown(number - 1);
// }
// countdown(5);

// Ex, Factorial example
function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5)); // 120
