//two ways to create regular exprssion
let re1 = new RegExp("abc");

let re2 = /abc/; //every forward slash will have a back slash in regex



//for special character like +,-,? etc use backlash'/'
let eighteenPlus = /eighteen\+/ ;



//Test method for regex gives a boolean telling about the string match or not.
console.log(/abc/.test("ababdc"));
//false
console.log(/abde/.test("xacabde"));
//true



//string contains digit or not
console.log(/[0123456789]/.test("in 1992"));
//true
console.log(/[0-6]/.test("in 9999"));
//false



//to check a validity of date or any digit us '\d'
let birthDate = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(birthDate.test("26-03-1998 12:00"));
//true



