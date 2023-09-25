// variables store on stack are

let name = 'Rachel';
let age = 30;

let newName = name;
console.log(name , newName);

// reference variable store on heap
const person = {name:'Rachel' , age:30};
newName = person;
console.log(person , newName);

newName.name = 'Monica';

console.log(person , newName);