// #. Array methods
// 1. forEach() - do some things for every elements of an array
// array.forEach(some function defination or name);
// array.forEach( (element, index, array) => {
//   // Your code here
// });

/*
    let arr = [1, 2, 3, 4, 5];
    arr.forEach((element)=>{
        console.log(element + 2);  
    });

    // forEach() with index
    const fruits = ["Apple", "Banana", "Mango"];
    let newFruits = [];
    newFruits = fruits.forEach((element, index)=>{
        console.log(`${index + 1}: ${element}`);
        return element;
    });
    console.log(newFruits); // [] undefind, because forEach() does not return anything, it just executes the function for each element of the array.
*/

// 2. What is map()?
// map() calls a function on every item and creates a new array containing the returned values.
// It have the return statement.
// Syntax -  let newArray = array.map((element, index, array) => {
//   //  Your code here
//   //  return element;
// });

// Example - 

// let numbers = [2, 4, 6,8, 10];
// console.log(numbers);
// let newnumbers = numbers.map((element)=>{
//     return element * 2;
// });
// console.log(newnumbers); // [4, 8, 12, 16, 20]

// Short version:
// let numbers = [2, 4, 6,8, 10];
// let newnumbers = numbers.map(element=> element * 2);
// console.log(newnumbers); // [4, 8, 12, 16, 20]


// 3. filter()
// filter() creates a new array containing only the items that pass a condition.
// Syntax - let newArray = array.filter((element, index, array) => {
//   // Your code here
//   // return true or false;
// });

    // let number = [1, 2, 3, 4, 5];
    // let even = number.filter((e)=>{
    //     return e % 2 === 0;
    // })
    // console.log(even);

    const fruits = ["Apple", "Banana", "Mango", "Avocado"];
    let fruitsStartWithA = fruits.filter((element)=>{
        return element.startsWith("A");
    });
    console.log(fruitsStartWithA);