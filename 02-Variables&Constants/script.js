// ways to declare variables
// var , let , const

let firstName = "Naruto";

let lastName = "Uzumaki";

console.log(firstName,lastName);

let age = 25;

console.log(age);

//naming conventions
// - Only letters , numbers , underscopes and doller sign allowed
// - Can't start with a number

//Multi-word Formatting
// firstName = camelCase
// last_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assingning variables

const arr = [1,2,3,4];

//arr = [1,2,3,4,5];  // it will give an error

arr.push(5);

console.log(arr);

const person = {name:"Kakashi"};

person.name = "Aasuma";

person.email = "Asuma@gmail.com";

console.log(person);