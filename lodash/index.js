const _ = require("lodash");

const name = "shreshth"; 

if (_.isString(name)){

    console.log("working");

}
else{

    console.log("not working");

}

console.log(_.upperCase(name)); 
console.log(_.random(0,9));