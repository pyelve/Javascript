let x;

const num = 5.43221;

x = num.toString();
console.log(x);

x = num.toString().length;
console.log(x);

x = num.toFixed(2);
console.log(x);

x = num.toPrecision(5);
console.log(x);

x = num.toExponential(2);
console.log(x);

x = num.toLocaleString("en-US");
console.log(x);

x = num.valueOf();
console.log(x);