//change string to a number

let amount = '100';

//amount = parseInt(amount);

//amount = parseFloat(amount);

//amount = +amount;

amount = Number(amount);

console.log(amount , typeof amount);

// convert Number to string
let num = 200;
//num = num.toString();
//num = String(num);
console.log(num, typeof num);

// convert number to boolean
// 0 -> always false 
// anyother number -> always true 
let flag = 34;
flag = Boolean(flag);
console.log(flag , typeof flag);

// convert string which is not a number in to number
// it will give NaN i.e Not a  Number
let name = 'Dev';
name = parseInt(name);
console.log(name , typeof name);

// operations which return NaN 
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('foo'/3);