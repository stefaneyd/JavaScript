// SCOPE

// GLOBAL SCOPE
const name = 'Ed';
const age = 45; // Top level, finally if variable was not found it checks this level

console.log(name);

function sayName(){
    const age = 35; // second level, then checks if variable exists on second level
    console.log(`Hello there my name is ${name}`);
    sayAge();

    function sayAge(){
        const age = 25;// third level, first check if variable exists on this level
        console.log(`My age is ${age}`);
    }
}

sayName();

// FUNCTION SCOPE

function sayFullName(){
    const first = 'Jesse';
    const second = 'Pinkman';

    console.log(`${first} ${second}`);
}

sayFullName();

//console.log(first); Not going to work