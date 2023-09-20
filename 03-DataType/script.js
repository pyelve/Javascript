//String

const firstName = "Baldev";

console.log(firstName , typeof firstName);

//Number

const age = 30;

console.log(age , typeof age);

//float -> number

const num = 34.5;
console.log(num , typeof num);

//boolean
const flag = true;
console.log(flag , typeof flag);

//undefined

let score;
console.log("score", typeof score);

//symbol
const id = Symbol("id");
console.log(id , typeof id);

//BigInt
const no = 9007199254740991n;
console.log(no , typeof no);

// Reference type object
const array = [1,2,3,4];
console.log(array , typeof array);

const person = {name:'Kakashi'};
console.log(person , typeof person);

function sayHello() { 
console.log("Hello hey there!");
}

console.log(sayHello , typeof sayHello);