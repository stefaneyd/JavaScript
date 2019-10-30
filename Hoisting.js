// Hoisting
// hoists function and variable declarations to the top

sayName(); // Function declaration is hoisted to the top, so the function can be called before it is declared

//sayAge(); // This will throw an error, we are calling a function but it is a variable that has not yet been set

console.log(name);

var name = 'Ed';  // variable declaration is hoisted to the top by the interpreter, but the variable is set after the console.log is called

function sayName(){
    console.log('Hello there');
}

var sayAge = function(){
    console.log('35');
}

sayAge();

////////////////////////////////////////////

//console.log(name2); // Not going to work
const name2 = 'Ed';

//console.log(name3); // Not going to work
let name3 = 'Ed';