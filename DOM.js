// https://prettydiff.com/2/guide/unrelated_dom.xhtml

// Methods for Searching the DOM

document.getElementById("idValue");
//returns null or element node

document.getElementsByTagName("div");
//returns a node list
myElementNode.getElementsByTagName("div");
//returns a node list

document.getElementsByClassName("classValueToken");
//returns a node list
myElementNode.getElementsByClassName("classValueToken");
//returns a node list

myElementNode.getAttribute("attributeName");
//returns null or a string

myNode.cloneNode(true);
//returns a copy of a node including all descendants
myNode.cloneNode();
//returns a copy of a node not including descendants


/* -------------------------------------------------------- */


// Walking the DOM

myNode.parentNode;
//returns an element node

myElementNode.childNodes;
//returns a node list

myElementNode.firstChild;
//returns first child node

myElementNode.lastChild;
//returns last child node

myNode.nextSibling;
//returns next adjacent node

myNode.nextElementSibling;
//returns next element sibling

myNode.previousSibling ;
//returns prior adjacent node

myNode.previousElementSibling;
//returns prior element sibling

myElementNode.attributes;
//returns a node list of format: attributeName="value"

myNode.nodeType;
//returns a number 1 - 12
/*
1 ELEMENT_NODE
2 ATTRIBUTE_NODE
3 TEXT_NODE
4 CDATA_SECTION_NODE
5 ENTITY_REFERENCE_NODE
6 ENTITY_NODE
7 PROCESSING_INSTRUCTION_NODE
8 COMMENT_NODE
9 DOCUMENT_NODE
10 DOCUMENT_TYPE_NODE
11 DOCUMENT_FRAGMENT_NODE
12 NOTATION_NODE
*/

myNode.nodeName;
//returns a string of variant definition by node type

myNode.nodeValue;
//returns either null for a string of variant definition by node type


/* -------------------------------------------------------- */


// Changing the DOM

document.createElement("div");
//returns a new element node not bound to the document

document.createTextNode("some text here");
//returns a new text node not bound to the document

myElementNode.appendChild(newNode);
//returns the appended node

myElementNode.insertBefore(referenceNode, newNode);
//returns the newNode

myElementNode.removeChild(anotherNode);
//returns anotherNode
myElementNode.removeChild(myElementNode.lastChild);
//returns myElementNode.lastChild
myElementNode.removeChild(myElementNode.childNodes[3]);
//returns myElementNode.childNodes[3]

myElementNode.replaceChild(newNode, originalNode);
//returns originalNode

myElementNode.removeAttribute("class");
//returns nothing

myElementNode.setAttribute("class", "myAttributeValue");
//returns nothing


/* -------------------------------------------------------- */


// Examples of Method Chaining

document.getElementById("someID").childNodes
//get all child nodes from a targeted element
document.getElementById("someID").childNodes.length
//how many children does the targeted node contain
document.getElementById("someID").getElementsByTagName("p")
//get all p nodes in the tree of a targeted node
document.getElementById("someID").firstChild.nodeType
//determine the type of node of a target elements first child node
document.getElementById("someID").previousSibling.firstChild
//get the first child of a targeted element's previous sibling
document.getElementById("someID").nextSibling.childNodes[2]
//get the third child of a targeted element's next sibling
document.getElementsByTagName("h3")[4].parentNode.parentNode
//find the grandfather element of the fifth h3 element
document.getElementsByTagName("h3")[4].getAttribute("id")
//get the id attribute value of the fifth h3 element in the document