// Date object to represent a specific moment in time.

// console.log(Date);
// console.log(Math);

// Syntax for Initializing Date Object: 
// new Date(year,month,day);
// new Date(year,month,day,hours,minutes,seconds,ms);


// const date = new Date();  //initialize and current date and time:
// console.dir(date);
// console.dir(date.getDate());
// console.dir(date.getFullYear());
// console.dir(date.getTime());
// console.dir(date.getYear());
// console.dir(date.getDate());


// const date1 = new Date("2023-05-25");
// console.log(date1.getFullYear()); 


// const d = new Date("October 13, 2014 11:13:00");
// console.log(d);


// Set Date 
// let day = new Date();
// console.log(day);
// day = new Date(2000, 11, 22);
// day.setFullYear(2023);
// console.log(day);



// #. JavaScript Date Methods

// 1. new Date() - Creates a new Date object
// 2. getDate() - Returns the day of the month (from 1-31)
// 3. getDay() - Returns the day of the week (from 0-6)
// => getMonth()	Returns the month (from 0-11)
// 4. getFullYear() - Returns the year (four digits for dates between 1000 and 9999)
// 5. getHours() - Returns the hour (from 0-23)
// 6. getMinutes() - Returns the minutes (from 0-59)
// 7. getTime() - Returns the number of milliseconds since January 1, 1970

// 8. setDate() - sets the day of the month(from 1-31)
// 9. setFullYear() - sets the year (four digits for dates between 1000 and 9999)
// 10. setHours() - sets the hour (from 0-23)
// 11. setMinutes() - sets the minutes (from 0-59)
// 12. setTime() - sets the time in milliseconds since January 1, 1970







// JavaScript Timers
// JavaScript timers let you run a function after a delay or repeatedly at fixed intervals.
// setTimeout() - Calls a function after a number of milliseconds,  runs once after a delay.
// setInterval() - Calls a function at specified intervals (in milliseconds)

// clearTimeout() - Cancels a timeout set with setTimeout(), That works when we assign the setTimeout() to a variable and then pass that variable to clearTimeout() to cancel the timeout.
// clearInterval() - Cancels an interval set with setInterval()


// 1. setTimeout()
// setTimeout(function, milliseconds);
// example: 
// setTimeout(function(){
//     console.log("PPM");
// }, 3000);


// console.log("First");
// const mid = ()=>{
//     console.log("setTimeout");
// }
// let clearMid = setTimeout(()=>{
//     console.log("setTimeout");
// }, 3000);
// clearTimeout(clearMid);
// console.log("End");


// 2. setInterval()
// setInterval(functionToRun, delayInMilliseconds);  

// const intervalId = setInterval(() => {
//   console.log("This message appears every 2-second");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(intervalId);
//     console.log("Your setInterval has been cleared after the 10 seconds");
// }, 10000);




