// Array Literal
const number = [1,4,6,8];
console.log(number);

// Array constructor

const array = new Array([1,2,45,66]);
console.log(array);

const fruits = new Array('Apple','Strowbery','Papaya','Watermelon','Muskmelon');
console.log(`My favorite fruit is ${fruits[2]}`);

const mixed = [12,'Strike',true,null];
console.log(mixed.length);

fruits[fruits.length] = 'Pear';
console.log(fruits);

//............. Methods of Array ........

const group = [12,45,36,88,23,75];

group.push(100);    // add to the last position
console.log(group);

group.pop();    // remove last element
console.log(group);

group.unshift(99);  // add to the 0 th index
console.log(group);

group.shift();
console.log(group); // remove first element

group.reverse();
console.log(group); // reverse the array

console.log(group.includes(88));    //true
console.log(group.includes(102));   //false

console.log(group.indexOf(88)); // gives the index of 88 i.e 2
console.log(group.indexOf(102)); // if value is not present in array it will return -1

console.log(group.slice(1,4));  // it will give element of index start with 1 and less than 4 i.e till index of 3
// But slice will not change the original array

//console.log(group.splice(1,4)); 
// it will return elements start from 1 index and till total 4 elements 
// But splice method change the original array it removes those elements from array

console.log(group);

