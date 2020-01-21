//two ways to create regular exprssion
let re1 = new RegExp("abc");
let re2 = /abc/; //every forward slash will have a back slash in regex

//for special character like +,-,? etc use backlash'/'
let eighteenPlus = /eighteen\+/ ;

//Test method for regex gives a boolean telling about the string match or not.
console.log(/abc/.test("ababdc"));
//false
console.log(/'abde/.test("xacabde"));
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

//to check repeating parts of a pattern
console.log(/'\d+'/.test("'123'")); //string should have some digits whether repeatng or non repeating
console.log(/'\d*'/.test("'1'"));  //string can have 0 or more digits

let ss = /unfortun?ately/;
console.log(ss.test("unfortuately")); // n can occur or not it will print true.

//{1,2} - minimum digits 1 and maximum digits 2
//{5,} - five or more times
let limit1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}-\d{2}/ ;
console.log(limit1.test("1-12-2020 11-30"));

//returns the digit in the statement.
let trst = /\d+/.exec("give the 1");
console.log(trst);

//check if string can have a numbe rthen pig or cow or chicken in lural or singular
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test('23 cows $'));

var ptr = /\b\d*\D\d*(@)\D(.com)\b/;
console.log(ptr.test("2d2@f.com"));






