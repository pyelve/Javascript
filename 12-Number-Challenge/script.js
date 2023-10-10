// x is a random number between 1 to 100
// y is a random number between 1 to 50
// and print the result of operations between x and y 
// 35 + 15 = 50
// 35 - 15 = 20
// 35 * 15 = 535

const x  = Math.floor(Math.random()*100 +1);

const y = Math.floor(Math.random() * 50 + 1);

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${x} % ${y} = ${x%y}`);