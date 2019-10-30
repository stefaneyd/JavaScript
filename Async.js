// Promises and async await

console.log('Begin');

async function getData(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done'), 3000);
    });

    let result = await promise;
    console.log(result);
}

getData();

console.log('End');