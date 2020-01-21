//reverse string in js
var str = "i love javascript";
console.log(str.split('').reverse().join(''));
console.log(new Date());

//first letter of string to upper case
const capitalize = ([first, ...rest], lowerRest = false) =>
first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

console.log(capitalize('ggdbcbjxx')); 
console.log(capitalize('dcbcgHH'));

//remove duplicate in array
var x = [3,4,2,1,2,3];

p = new Set(x);
t = [...p];
console.log(t); //prints another array without duplicate values

"l".toUpperCase();

var str = "rapp";
console.log(str.replace("str[0]", str.toUpperCase(str[0])));

