// Callbacks

// Callback Synchronous
const sayName = (name, callBackFunction) => {
    console.log(`Variable value: ${name}`);
    callBackFunction();
}

function someCallBackFunction(){
    console.log('This function ran at the end');
}

sayName('Ed', someCallBackFunction);

// Callback Asynchronous
console.log('first');

setTimeout(anotherCallBackFunction, 3000);

function anotherCallBackFunction(){
    console.log('Async callback')
}

console.log('last');

// http://latentflip.com/loupe/