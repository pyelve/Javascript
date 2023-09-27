let x;
const name = 'Neji';
const age = 25;

x = 'Hello, My name is '+name+' and I am '+ age +' years old';

console.log(x);

// Teplate Literals
x = `Hello, my name is ${name} and I am ${age} yaers old`;
console.log(x);

// properties and methods
const s = "Hello World";
x = s.length;
console.log(x);

x = s.__proto__;
console.log(x);

x = s.toUpperCase();
console.log(x);

x = s.toLowerCase();
console.log(x);

x = s[0];
console.log(x);

x = s.indexOf('e');
console.log(x);

x = s.charAt(0);
console.log(x);

x = s.substring(1,5);
console.log(x);

x = "   Hey There  ";
x = x.trim();   // remove white spaces
console.log(x);

x = s.replace("World","JimJam");
console.log(x);

x = s.includes('ello');
console.log(x);

x = s.valueOf();
console.log(x);

x = s.split(' ');
console.log(x);

x = s.split('');
console.log(x);