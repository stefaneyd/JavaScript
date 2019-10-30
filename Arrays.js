// filter, map, find, forEach, some, every, reduce, includes

const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25}
]

// filter
const filteredItems = items.filter((item) => {
    return item.price <= 100
});
console.log(filteredItems);

// map
const itemsNames = items.map((item) => {
    return item.name
});
console.log(itemsNames);

// find
const foundItem = items.find((item) => {
    return item.name === 'Book'
});
console.log(foundItem);

// forEach
items.forEach((item) => {
    console.log(item.price)
});

// some
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
});
console.log(hasInexpensiveItems);

// every
const hasLogicForEveryItems = items.every((item) => {
    return item.price <= 1000
});
console.log(hasLogicForEveryItems);

// reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0);
console.log(total);

// includes
const numberArray = [1,2,3,4,5,6,7,8,9,10];
var includesTwo = numberArray.includes(2);
console.log(includesTwo);