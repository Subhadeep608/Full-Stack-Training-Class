// 2. Selecting elements with querySelector()
// querySelector() accepts any CSS selector and returns the first matching element.
/*
- Allows us to use any css selectors.
- document.querySelector(<element>, <#id>, <.class>);
- document.querySelector("p");
- document.querySelector("#id");
- document.querySelector(".className");

*/

let para1 = document.querySelector("p");
let para2 = document.querySelector("#myText");
let para3 = document.querySelector(".myClass");
console.dir(para1);
para1.innerText = "this is the teg based dynamic change"
para2.innerText = "this is the id based dynamic change"
para3.innerText = "this is the class based dynamic change"

// Use of innerHTML
const box1 = document.getElementById("box");
console.dir(box1);
box1.innerHTML = "<h2>Hello</h2><p>This is HTML<br> content</p>";

// 3. Changing styles
// Use .style for inline CSS.

let changeColour = document.getElementById("#changeColour");
changeColour.style.color = "red";
changeColour.style.backgroundColor = "black";
changeColour.style.fontSize = "50px";
changeColour.style.textAlign = "center";


// 4. Changing classes
// Use classList to add, remove, or toggle CSS classes.

let changeClass = document.getElementById("text");
changeClass.classList.add("highlight");
// changeClass.classList.remove("highlight");

// Toggle means add if missing, remove if present:
// changeClass.classList.toggle("highlight");


// 5. Creating a new element
// Use document.createElement() to create a new HTML element.


//Add multiple list items
const listItem = ['item1', 'item2', 'item3'];
let list = document.getElementById("list");

listItem.forEach((items) =>{
    let newItem = document.createElement("li");
    newItem.textContent = items;
    newItem.style.color = "green";
    list.appendChild(newItem); // This create a child element('newItem') inside the 'list'
});


// 6.Removing an element
const message = document.getElementById('message');
message.remove();

// Manipulating attributes
let manipAttr = document.querySelector('#manipAttr');
let href = manipAttr.getAttribute('href');
manipAttr.setAttribute('href', 'ppm.com');
let newhref = manipAttr.getAttribute('href');
console.log(newhref);





