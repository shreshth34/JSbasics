//reverse string in js
var str = "i love javascript";
console.log(str.split('').reverse().join(''));

console.log(new Date());


//first letter of string to upper case

const capitalize = ([first, ...rest], lowerRest = false) =>
first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

console.log(capitalize('ggdbcbjxx')); 
console.log(capitalize('dcbcgHH'));

