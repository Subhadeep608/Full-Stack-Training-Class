// Object Destructuring in JavaScript
// Object destructuring means taking properties out of an object and storing them in variables.

// const student1 = {
//   name: "Ravi",
//   age: 20,
//   city: "Delhi"
// };

// const city = student1.city;
// console.log(city);

// destructuring of object 

// const student = {
//   name: "Ravi",
//   age: 20,
//   city: "Delhi"
// };

// const { name, age, city } = student;

// console.log(name); // Ravi
// console.log(age);  // 20
// console.log(city); // Delhi

// example-2
// const employee = {
//     name: "Ram",
//     age: 22,
//     Email:"ram@gmail.com",
//     emp_ID: "Ram@26",
//     emp_Password: "xyz"
// }

// let { emp_ID: emp_userId, emp_Password = 12345 } = employee;
// console.log(emp_userId);
// console.log(emp_Password);

// Example-3
const [x = "Default", y = "Default"] = [null, undefined];
console.log(x, y);

// Explanation:
// x receives null, so the default value is not used.
// y receives undefined, so the default value is used.

// ** Default values are used only for undefined.**











// #. Spread Operater (...)
