// Array Mathods
/* */

/* 
4. reduce(): - 
reduce() executes a reducer function on each element of the array, resulting in a single output value.
Syntax - let newValue = array.reduce((accumulator, currentValue) => {
  return newAccumulatorValue;
}, initialValue);

*/
/*
const numbers = [1, 2, 3, 4, 5, 10];
const total = numbers.reduce((accumulator, element) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${element}`);
    return accumulator + element;
}, 0);

console.log(total); // 15
*/

// 5. find()
/* */
// let students = [
//     {name: "Jaga", id: 1},
//     {name: "Rama", id: 2},
//     {name: "Sita", id: 3},
//     {name: "avi", id: 4},
// ];

// let findStudent = students.find((element)=>{
//     return element.id === 2;
// });

// console.log(findStudent);

// 6. every() - it returns true if every element of array gives true for the condition, otherwise it returns false.

// let students = [
//     {name: "Jaga", id: 1},
//     {name: "Rama", id: 2},
//     {name: "Sita", id: 3},
//     {name: "avi", id: 4},
// ];
// let isAllStudents = students.every((element)=>{
//     return element.id > 0;
// });
// console.log(isAllStudents);


// De structuring by an array - Array destructuring means taking values out of an array and putting them directly into variables.

    // Prefix code snippet:
    // const colors = ["Red", "Green", "Blue"];

    // const first = colors[0];
    // const second = colors[1];
    // const third = colors[2];

    // Array destructuring:
    // const colors = ["Red", "Green", "Blue"];
    // const [first, second, third] = colors;
    // console.log(first);  // Red
    // console.log(second); // Green
    // console.log(third);  // Blue


// Skipping values
    // const colors = ["Red", "Green", "Blue"];
    // const [first, , third] = colors;
    // console.log(first); // Red
    // console.log(third); // Blue



// #. Rest operator: ...rest
// Use ... to collect the remaining values into a new array.
// example:
    // const numbers = [1, 2, 3, 4, 5];
    // const [first, second, ...rest] = numbers;
    // console.log(first);  // 1
    // console.log(second); // 2
    // console.log(rest);   // [3, 4, 5]

// #. Destructuring in a function parameter
function showFirstTwo([first, second]) {
  console.log("First:", first);
  console.log("Second:", second);
}
const numbers = [10, 20, 30];
showFirstTwo(numbers);

// #.  Destructuring a string
const [firstLetter, secondLetter] = "JavaScript";
console.log(firstLetter);  // J
console.log(secondLetter); // a





