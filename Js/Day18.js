// DOM Events
// A DOM event is something that happens in the browser, such as a click, typing, form submission, or key press.
//  JavaScript listens for these events using addEventListener().
// Syntax:
// element.addEventListener("eventName", function () {
//   // code to run when event happens
// });

// 1. Click event
// let clickButton = document.getElementById("myButton");
// let message = document.getElementById("message");
// clickButton.addEventListener("click", function(){
//     message.textContent = "Button was clicked!";
// });

// event object

// let button = document.getElementById("myButton1");
// button.addEventListener("click", (event) => {
//     console.log(event); // MouseEvent object
//   console.log(event.type);   // click
//   console.log(event.target); // the button element
// });



// 2. Input Event
// Examle: Print the input value in the out put
// const nameInput = document.getElementById("nameInput");
// const output = document.getElementById("output");

// nameInput.addEventListener("input", () => {
//   output.textContent = `Hello, ${nameInput.value}`;
// });


// 3. Reading input values
// For a checkbox, use .checked:
// const agree = document.getElementById("agree");
// agree.addEventListener("change", () => {
//   console.log(agree.checked);
// });


// 4. Form submission\
// const form = document.getElementById("myForm");
// const username = document.getElementById("username");
// const result = document.getElementById("result");
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // this preventDefault() method prevents the form from submitting and refreshing the page
//   result.textContent = `Welcome, ${username.value}`;
// });


// 5. Keyboard events : Common keyboard events: keydown — key is pressed. and keyup — key is released.
// let keyboardInput = document.getElementById("keyboardInput");
// let keyboardOutput = document.getElementById("keyboardOutput");

// keyboardInput.addEventListener("keyup", (event)=>{
//     // console.log(`Key pressed: ${event.key}`);
//     if(event.key === "Enter"){
//         keyboardOutput.textContent = keyboardInput.value;
//     }else{
//         keyboardOutput.textContent = "please press enter key to submit";
//     }
// });

//6. Mouse events
/*
    onclick- When an element is clicked
    ondblclick - When an element is double-clicked
    onmousedown - When a mouse button is pressed
    onmouseup - When a mouse button is released
    onmouseover - When the mouse enters an element
    onmouseout - When the mouse leaves an element
    onmouseenter - When the mouse enters an element
    onmouseleave - When the mouse leaves an element
*/

let on_click = document.getElementById("on_click");
// on_click.onclick = ()=>{
//     alert("Button was clicked!");
// }
// on_click.ondblclick = ()=>{
//     alert("Button was clicked! 2 times");
// }
// on_click.onmouseover = ()=>{
//     alert("Button was onmouseover!");
// }

// Used addEventListener to add multiple event listeners to the same element without overwriting existing ones.
// on_click.addEventListener("dblclick", ()=>{
//     alert("Button was clicked!");
// });

// let on_click = function(){
//     alert("Button was clicked!");
// } 





// Questions: Generate a random color ?
// let btn = document.getElementById("generateColor");
// btn.addEventListener("click", ()=>{
//     let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     console.log(randomColor);
//     let colorDisplay = document.getElementById("colorDisplay");
//     colorDisplay.style.backgroundColor = randomColor;
//     colorDisplay.textContent = randomColor;
// });

