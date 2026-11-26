// Execution Context - 
// Execution context is like a box where JavaScript keeps track of variables and executes your code.
// Whenever JavaScript runs code, it creates an execution context.
// This is a hypotetical scenario 

// This is a process where it can work 2 different phase memory phase and execution phase.
    // 1. Types of Execution Context
    // JavaScript has three main types of execution context:
        // 1. Global Execution Context (GEC)
        // 2. Function Execution Context (FEC)
        // 3. Eval Execution Context


// #this keywords

// #Asynchronus Nature


//JavaScript Promises
// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.


async function getUsers() {
    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        console.log(users);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();