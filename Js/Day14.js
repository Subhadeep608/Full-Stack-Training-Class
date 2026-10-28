// Spread Operator in JavaScript(...)
// It spreads or expands the values of an array, object, or string into another place.
// Spread syntax can expand an array into individual elements, an object into key-value pairs, or a string into characters.


// 1. Spread operator with arrays
// const numbers = [1, 2, 3];
// const copiedNumbers = [...numbers];
// console.log(copiedNumbers); // [1, 2, 3]

// 2. Add items while copying
// const numbers1 = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers); // [1, 2, 3, 4, 5]

// const numberAtBegin = [-1, -2, -3, 0, ...numbers]
// console.log(numberAtBegin);

// 3. Merge two arrays
// const fruits = ["Apple", "Banana"];
// const vegetables = ["Carrot", "Potato"];
// const food = [...fruits, ...vegetables];
// console.log(food);  //["Apple", "Banana", "Carrot", "Potato"]





// 4. Spread operator with objects

// const user = {
//   name: "Ravi",
//   age: 20
// };

// const updatedUser = {
//   ...user,
//   city: "Delhi" // new property
// };
// console.log(updatedUser);

// const copiedUser = { ...user };
// console.log(copiedUser);


// 5.Merge two objects
// const basicDetails = {
//   name: "Ravi",
//   age: 20
// };

// const extraDetails = {
//   city: "Delhi",
//   country: "India"
// };

// const fullDetails = {
//   ...basicDetails,
//   ...extraDetails
// };

// console.log(fullDetails);


//6. Spread operator with functions
// function add(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 4];
// const result = add(...numbers);
// console.log(result); // 6


// Example-1
// let num = [3, 3, 6, 7, 8, 5, 9];

// let minValue = Math.min(...num);
// let maxValue = Math.max(...num);
// console.log(minValue);
// console.log(maxValue);


// let str = "subhadeep";
// let spredStr = [...str]; // ['s', 'u', 'b', 'h', 'a', 'd', 'e', 'e', 'p'];
// console.log(spredStr);

// // => It helps converting a string into an Array. 

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// Spread witrh object literas
// let data = {
//     name: "subham",
//     email: "subham#gmal.com",
//     password: "abcd"
// }

// let dataCopy = {...data, id: 123};
// console.log(dataCopy);