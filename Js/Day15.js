// DOM ( Document Object Model)
// The DOM is the browser’s representation of your HTML page as a tree like structure.
//JavaScript uses the DOM to find HTML elements, change their text, styles, classes, and respond to user actions such as clicks.

// HTML file → Browser creates DOM tree → JavaScript changes the DOM → Page updates



// => In js has inbuild JS-Object. that is Window Object, Document Object.

// => How we access this objects?
/* Open Console -> Type 'window' -> Enter */
/* Open Console -> Type 'console.dir(document)' -> Enter */



// #. Selecting an element

// 1. Selecting an element by Id
// Use document.getElementById() when an element has an id.

// E.g - 1
    // let title = document.getElementById("title");
    // console.dir(title);
    // title.innerText = "Welcome to DOM 1"; // Change its text by 'textContent', 'innerText','innerHTML' 
    // console.log(title);
    // console.log(title.baseURI);

//2. Selecting an element by ClassName
// Use document.getElementsByClassName() when an element has an clssName. 

// eg - 1
let nameElement = document.getElementsByClassName("name");
console.dir(nameElement);
nameElement[0].innerHTML = 'PPM-Infotech';
console.log(nameElement);


// 2. Selecting elements with querySelector()
// querySelector() accepts any CSS selector and returns the first matching element.