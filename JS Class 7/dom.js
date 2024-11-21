//The Document Object Model (DOM) is a programming interface that represents structured documents like HTML and XML as a tree of objects.
//It defines how to access, manipulate, and modify document elements using scripting languages like JavaScript.

//Key Points:

//Tree Structure: The DOM represents a document as a hierarchical tree structure, where each node represents an element, attribute, or text content of the document.
//It is an object()
// Objects have properties and methods.

//DOM is created when you load in an HTML document and structgures all the elemens in a tree-llike representation.
//JS can access the DOM to dynamically change, the content, structure, and style of a web page.

console.dir(document);  //Do first
document.title = "This is my DOM page. "; //Do second and watch title change
document.body.style.backgroundColor = "#add8e6"; //Do third and watch bkg change
document.body.getElementById("welcomeMsg");

//Modifying the Webpage through the DOM -------------------------------------

//run the page to see the default title

const username = "Allison Hanna's web page";  // Do this after above section

const welcomeMsg = document.getElementById("welcomeMsg");
welcomeMsg.textContent = "Welcome " + username;
