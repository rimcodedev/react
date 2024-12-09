// const sayHello = (name = 'John', age = 0) => {
//     const greeting = `Hello ${name}, you are ${age} years old`; 
//     console.log(`=== ${greeting} ===`); 
//     return greeting;
// }

const sayHello = (name = 'John', age = 0) => `Hello ${name}, you are ${age} years old`;
const add = (a = 0, b = 0) => a + b;

const result = sayHello('Peter', 22);

console.log(result);
console.log(add(11, 22));