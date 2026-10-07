// Loops
// A loop repeats code so you do not have to write the same instruction many times. 
// JavaScript provides for, while, do...while, for...of, and for...in loops.

// #. For loop
// The for loop is used to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.
// Syntax;- 
/* for(initialization; condition; increment/decrement) {
    //code block to be executed 
} */

// Ex- print number from 1 to 10
// for(let i= 1; i<=10; i++){
//     console.log(i);
// }

// Ex-2, print even number from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// Ex-3, Calculate The Sum from 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// Ex-4,  Multiplication table
// let number = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }


// 2. While loop - 
// The while loop is used to repeat a block of code while a condition is true. The condition is checked before each iteration.

// Syntax:-
/* while(condition) {
    //code block to be executed 
    // increment/decrement
} */

// Ex- print number from 1 to 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Ex-2, print even number from 1 to 10
//     let i = 1;
//     while (i <= 10) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//       i++;
//     }


// Note: 
// break; keyword
// --------------------
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }
// continue- continue skips the current iteration and moves to the next iteration. It does not stop the entire loop.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// } 




// #3. do...while loop - do ...while loop is similar to the while loop, but the condition is checked after each iteration. This means that the code block will always be executed at least once, even if the condition is false.
// Syntax:-
/* do {
    //code block to be executed 
    // increment/decrement
} while(condition); */

// Ex-1, print number from 1 to 10
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Ex-2, print even number from 1 to 10


// #Loops with arrays
// let fruits = ["Apple", "Banana", "Mango"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// #4.  for...of loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to access each element of the iterable object directly without using an index.
// Syntax:-
/* for (variable of iterable) {
    //code block to be executed 
} */

// Ex-1, 
// let fruits = ["Apple", "Banana", "Mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }  

// Ex-2, 
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 25000 },
//   { name: "Mouse", price: 800 }
// ];
// for (let product of products) {
//   console.log(`${product.name}: ₹${product.price}`);
// }

// #5. for...in loop
// The for...in loop is used to iterate over the properties of an object. It allows you to access each property name (key) of the object.
// Syntax:-
/* for (variable in object) {
    //code block to be executed 
} */

// Ex-1
let student = {
    name: "Ravi",
    age: 20,
    city: "Delhi"
};
for (let key in student) {
    console.log(key, student[key]);
}
