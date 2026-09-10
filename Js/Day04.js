// (||=) means:- If the variable has a falsy value, Then assign to the new value.
// let score = 0;
// score ||= 10; 
// // score = score || 10;
// console.log(score);


// Alert and prompt
// alert("This is alert!");
// let age = prompt("please enter your age");
// console.log(age);


{/* < Some methods of string > */}

// Access Format: - stringName.mathod();

// 1.[ .trim(); ] 
// let msg_old = "    This is my First message     ";
// console.log(msg_old);
// let msg_new = msg_old.trim();
// console.log(msg_new);

// 2. [ length ]
// The length property tells us how many characters are in a string.
// let msg = "good morning"
// console.log(msg.length);//12

//3. toUpperCase() , toLowerCase()
// let lowerName = "subhadeep";
// let upperName = "SUBHADEEP"
// console.log(lowerName.toUpperCase());   //SUBHADEEP
// console.log(upperName.toLowerCase());   //subhadeep

//4. charAt() - The charAt() method return us a character at a specific position. 
// let name = "subhadeep";
// let indexValueOfString = name.charAt(10);
// console.log(indexValueOfString);

//5. slice(); - Slice() return a part of the origenal string as a new string.

let str = "i love coding";
// let newStr = str.slice(5);
// i love co d  i  n  g
// 123456789 10 11 12 13
//      . . .  -3 -2 -1
console.log(str.slice(5)); // (e coding)- string is returned from index number 5 to end of index number.
console.log(str.slice(2,5)); // (lov)- return new string from index number 2 to 5 
console.log(str.slice(-5));  // (oding)- 
