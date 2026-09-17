// #. Array
// Arrays are used to store multiple values in one variable.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
// #. Empty array - let arry = [];
// #. Length of empty array is 0.
// #. Array is mutable. that means we can change ofter creation.




// let StudentArray = ["subhadeep", "pinku", "deba", "asha", "rahul"];
// console.log(StudentArray);
// StudentArray[0] = "abc"
// console.log(StudentArray[0]);
// console.log(StudentArray);
// console.log(StudentArray.length);
// let Array1 = ['Apple', "Banana", 'Mango', 'Orange', true];
// console.log(Array1);

// console.log(Array1[0])
// console.log(Array1[1])
// console.log(Array1[2])
// console.log(Array1[3])
// console.log(Array1[4])
// Value       Apple    Banana    Mango    Orange
// Index          0         1        2         3


// Methods of Array 

//1. Length Of An Array - It returns total number of an element in an array.
// console.log(Array1.length);
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[fruits.length - 1]); // Mango


//2. push() - Adding items to end of an array.
//3. pop() - Delete items from end of an array.   
//4. unshift() - adds one or more items to the beginning of an array.
//5. shift() - removes the first item from an array and returns the removed item.
//6. indexOf() - return index of something.
//7. include() - serarch for an array element and return true/false.
//8. concat() - Merge 2 array and return the new merge array.
//9. reverse() - reverse the item of an array.
//10. slice(start, end) - It copies a specific part of an array and returns a new array, but do not change the original array.
//11. sort() - sorts the elements of an array in place and returns the reference to the same array, now sorted. By default, the sorting order is ascending, built upon converting the elements into strings.

// Example - 

// let num = [1, 2, 3, 4, 5];
// console.log(num); //(5) [1, 2, 3, 4, 5]
// num.push(6);
// num.push(7,8,9);
// console.log(num); // ((9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// num.unshift(-2, -1, 0);
// console.log("this is unshift, adding multiple value"+ " " + num); // this is unshift, adding multiple value -2,-1,0,1,2,3,4,5,6,7,8,9

// num.pop();
// console.log("this is pop" + " " +num); // (6) [0, 1, 2, 3, 4, 5]
// num.shift();
// console.log("this is shift"+ " "+num); // (5) [1, 2, 3, 4, 5]


// let number = ["one", "two", "three", "four", "five"];
// console.log(number.indexOf("three"));// 2
// console.log(number.includes("one"));// true

// let number1 = ["six", "seven", "eight"];

// let newConcatArray = number.concat(number1);
// console.log(newConcatArray);// (8) ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

// console.log(newConcatArray.reverse());

// let sliceArraySize3 = newConcatArray.slice(0, 3);
// console.log(sliceArraySize3); //(3) ['eight', 'seven', 'six']
// console.log(`this is the new slice array - size is '3' ${sliceArraySize3}`);  //this is the new slice array - size is '3' eight,seven,six

// let alphabet = ['f', 'a', 'd', 'c','e', 'b']
// console.log(alphabet.sort());  //(6) ['a', 'b', 'c', 'd', 'e', 'f']










