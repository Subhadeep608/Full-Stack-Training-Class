// JavaScript Errors
// In Js error can stop the flow of exicution of the program.
// To handel this expected error we using try...catch block. 


// Error handling 
// Syntax: 
// try {
//   Block of code to try
// } catch(err) {
//   Block of code to handle errors
// }

// let x = 5;


// try {
//     // x = y + 1;
//     x() 
// } catch (error) {
//     // console.dir(error);
//     let text = error.name + "<br>" + error.message;
//     document.getElementById("demo").innerHTML = text;
// }

// console.log('ppm');
// console.log('fullstack');


// 2.example
// try{
//     let x=10;
//     // let sum = 0
//     sum = sum + x;
//     console.log(sum);
//     document.getElementById("demo").innerText = sum;
// }catch(err){
//     console.dir(err);
//     console.log('an error is occurred !');
//     console.log(err.name + " " + err.message);
//     // console.log(err.stack);
//     document.getElementById("demo").innerText = err.name + " " + err.message;
// }



// #. finally
// The finally block always runs, whether an error happened or not.

// try {
//   console.log("Trying code...");
// //   console.log(userName); //error
// } catch (error) {
//   console.log("Error caught");
// } finally {
//   console.log("This always runs");
// }


// #. throw statement
// Use throw to create your own custom error.
// throw new Error();


// let age = 10;
// try {
//     if (age < 18) {
//         throw new Error("You are not eligible !");
//     } else {
//         console.log(" you are eligible.");
//     }

// }catch(err){
//     console.log(err.message);
// }



// Example - 
// let userName = 'hdccbj';
// let UserPassword = '';

// function ValidateLogin(userName, userPassword){
//     try{
//         if(!userName){
//             throw new Error("User name is required!");
//         }
//         if(!userPassword){
//             throw new Error("Password is required !");
//         }
//         console.log("Login Successful");
//     }catch(err){
//         console.log(err.message);
//     }finally{
//         console.log("Everything is good.");
//     }
// }

// ValidateLogin(userName, UserPassword);

// Question 1
// Write a function that check whether an array contains at least 5 elements. if not, through an error?

// function checkArray(arr){
//     try{
//         if(arr.length < 5){
//             throw new Error("Array have less then 5 element");
//         }if(arr.length > 5){
//             throw new Error("Array have more then 5 element");
//         }else{
//             console.log("array has 5 element");
//         }
//     }catch(err){
//         console.log(err.message);
//     }
// }
// let arrNum = [1, 2, 3, 4, 5, 7]
// checkArray(arrNum);