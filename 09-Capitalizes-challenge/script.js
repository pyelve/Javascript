//  change given string  developer -> Developer

const str = "developer";
const myNewString = str.charAt(0).toUpperCase() + str.substring(1);
console.log(myNewString);

//solution 2
// const myNewString = str[0].toUpperCase() + str.substring(1);

// solution 3
// myNewString = `${str[0].toUpperCase()}${str.substring(1)}`;