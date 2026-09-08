console.log("hii this is js");
// alert("hii don't open it!");

// let age_a = 20;
// let age_b = 30;
// const name = "PPM Infotech";
// console.log(`our company name is:  ${name} `);

// let sum = age_a + age_b;
// console.log("tha age of a & b is:", sum);



console.log("Variable");
// 1. let 
// let - is used when the value can change.

// let age = 20;
// console.log(age); // 20
// age = 30;
// console.log(age);  //30

// 2. const
//const - is used when the value can not be changed.
// const name ="PPM";
// console.log(name);   //ppm
// name = "ppm infotech";  //error -  Assignment to constant variable

//3. var
// var are function-scoped, meaning they are only limited by the function they are created in. They completely ignore block structures like if statements or for loops. 

// function example() {
//     if (true) {
//         var x = 10; // Declared inside an 'if' block
//     }
//     console.log(x); // Outputs 10 (accessible outside the block!)
// }
// example();

console.log(" Data Types");
// 1. Primitive Data Types
// Primitive data types represent single values. When you assign or copy a primitive value, JavaScript creates a new copy of that actual data.
// 1. Number: represent the numbers that can be posetive or negetive. 
// let age = 20; // variable declaration
// console.log(age);  // print output

//2. String: represnt the text values. it can be writen in single or double quotes.
// let name = "ppm infotech"; 
// console.log("This is my company name:", name);
// console.log(typeof name); // string

//3. Boolean: it returns the value in true or false.
// let isActive = false;
// console.log(isActive);  //false
// console.log(typeof isActive); //boolean

// 4. undefined: variable declared but no value assigned yet
// let myAge;
// console.log(myAge);
// console.log(typeof myAge);

// 5. null: it is used to represent the intentional absence of any object value.
// let myAge = null;
// console.log(`my Age is : ${myAge}`);
// console.log(typeof myAge); //object
