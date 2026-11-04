console.log(`Day 19: "this" Listeners`);

// Event bubbling: 
// Event bubbling is an upward flow of events in the DOM (Document Object Model) where an action on a child element triggers events on its parent elements one by one.

// document.getElementById("parent").addEventListener("click", function () {
//     alert("Parent clicked!");
// });

// document.getElementById("child").addEventListener("click", function (event) {
//     // event.stopPropagation();
//     alert("Child clicked!");
// });

//   When you click the Click Me button:
//     1. Child clicked! appears first.
//     2. Parent clicked! appears next. 
//     Why ? Because the click event bubbles from the child button to the parent < div >.


// How to Stop Event Bubbling ?
// JavaScript provides event.stopPropagation() to stop the event from propagating to parent elements.



// Event delegation: 
// Instead of adding a listener to every item, add one listener to the parent and use event.target.

// const taskList = document.getElementById("taskList");

// taskList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log("You clicked:", event.target.textContent);
//   }
// });