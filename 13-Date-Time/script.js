let d = new Date();

d = d.toString();
console.log(d);

d = new Date(2021,6,22);
console.log(d);

d = new Date('2023-08-24T12:40:00');
console.log(d);

d = new Date('07/12/2023 12:30:00');
console.log(d);

let x;

d = new Date();

x = d.toString();
x = d.getTime();
console.log(x);
x = d.valueOf();
console.log(x);
x = d.getFullYear();
console.log(x);
x = d.getMonth();
console.log(x);
x = d.getDate();
console.log(x);

x = Intl.DateTimeFormat('en-IN').format(d);
console.log(x);

x = Intl.DateTimeFormat('en-IN',{month:'long'}).format(d);
console.log(x);

x = d.toLocaleString('en-IN',{month:'short'});
console.log(x);

x = d.toLocaleString('default',{ 
    weekday:'long',
    year:'numeric',
    month:"long",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
    timeZone:'America/Los_Angeles',
});

console.log(x);