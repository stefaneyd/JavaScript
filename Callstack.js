// Callstack

function sayHello(){
    console.log('Hello my name is Ed');
}

function sayAge(){
    console.log('My age is 35');
}

function sayAll(){
    sayHello();
    sayAge();
}

sayAll();

console.log('Final');

/* The Callstack */
// The first thing on the stack is method called main() that runns everything 
/*
1.    main()
2.    sayAll()
2.1   sayHello()
2.1.1 console.log
      console.log taken off the stack
      sayHello taken off the stack
2.2   sayAge()
2.2.1 console.log
      console.log taken off the stack
      sayAge taken off the stack
      sayAll taken off the stack
3.    console.log
      console.log taken off the stack
      main taken off the stack
*/