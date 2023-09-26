// 1. Arithmatic Operators
let x ;

x = 5 + 5;  //10
x = 5 - 5;  //0
x = 5 * 5;  //25
x = 5 / 5;  //1
x = 5 % 5;  //0

console.log(x);
//console.log('5 / 5 = ', x);
//console.log('5 * 5 = ', 5*5);

// concatination

let str = 'Hello' + " " + "world";
console.log(str);

console.log(45+'34'+20);

//Exponent
let num = 2 ** 3;
console.log(num);

//Increment
let sum = 3;
sum++;
//++sum;
console.log(sum);

// Decrement
--sum;
sum--;
console.log(sum);

// 2. Assignment Operator

let num2 = 20;

num2 += 5; // 25
num2 -= 5;  //20;
num2 *= 5;  //100
num2 /= 5;  //20
num2 %= 6;  //2
num2 **= 3; //8 

console.log(num2);

// 3. Comparision Operators
let foo = 2 == 2;
foo = 2 == '2';
foo = 4 == '2';
foo = 4 === 4;
foo = 'sam' == 'sam';
foo = true == 'true';
console.log(foo);