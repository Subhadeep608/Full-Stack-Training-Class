const { jsx } = require("react/jsx-runtime");

console.log("This is Day-03 Class"); 


// comparison for NaN 
// let x = 'a';
// let y = 'A';
// let z = x<y;
// let w = x>y;
// console.log(z);   // returns - false
// console.log(w);   // returns - true



// #. Contitional Statement 
// 1. if(condition)
// Syntax - 

// if (condition) {
//   // code to run if condition is true
// }

/*
let age = 20;

if(age>18){
    console.log("you can vote");
}else{
    console.log("you can not vote!");
}
*/

// => if + else if + else (many options)
/*
let age = 20;

if(age<10){
    console.log("Toddler");
}else if (age<15){
    console.log("Preschooler");
}else if(age<20){
    console.log("School-age child")
}else{
    console.log("Adult");
}
*/

// =>  Nested if (an if inside another if)
/*
let isLoggedin = true;
let age = 10;

if (isLoggedin) {
  if (age >= 18) {
    console.log("You can access the dashboard.");
  } else {
    console.log("You must be 18+ to access the dashboard.");
  }
} else {
  console.log("Please log in first.");
}
*/

// 2. switch statement
// switch is useful when you have one variable and many possible values.
// Syntax - 
/*
switch(choice){
    case 1:
        //Statement
        break;
    case 2:
        //statement
        break;
    

    default:
        //statement
    
}   
*/
/*
let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
    console.log("This is halfday");
    console.log("in my office");
    break;
  case "Sunday":
    console.log("It's the weekend.");
    break;
  default:
    console.log("Regular day.");
}
*/

// Q-1
// let age = 30;
// let isMember = true;

// if(isMember && (age<12 || age>65)){
//     console.log("They Got Free Entry");
// }else if(isMember && !(age<12 || age>65) ){
//     console.log("They Got 20% Discount");
// }else{
//     console.log("Please give full pament");
// } 


// Truthy and fulsy
// falsy vakues:-  false, 0, -0, " "(empty string), null,  undefind, NaN these are the false value of js. 
// truthy values: - Everythings else falsy value are truthy.