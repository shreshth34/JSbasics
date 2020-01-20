//Higher order functions
repeat = (n, action) => {

    for (let i=0; i<n ; i++){
        action(i);
    }
}
repeat(3, console.log);

let labels = [];
repeat(5, (i) => {

    labels.push(`Unit ${i+1}`);

});
console.log(labels)

greaterThan = (n) =>{

    return m => m>n;

}
let greaterthan10 = greaterThan(10);
console.log(greaterthan10(11));
  


const companies = [

{name: "one", category: "finance", start: "1998"},
{name: "two", category: "design", start: "1911"},
{name: "three", category: "SEO", start: "1908"},
{name: "four", category: "marketing", start: "1928"},
{name: "five", category: "finance", start: "1930"},
{name: "six", category: "legal", start: "1940"},
{name: "seven", category: "media", start: "1994"}

];

const ages = [22,34,24,55,64,54,45,97,33,29,5,45,53,67,89,25]; 

companies.forEach(function(company){

    console.log(company.category);

});

//attempt 1
ages.forEach(function(e){

    if(e>22){
        console.log(e);
    }


});

//alternative for attempt 1
const canDrink = ages.filter(e => e>=22);
console.log(canDrink);

const finance1 = companies.filter(e => e.category == "finance");
console.log(finance1);

printSome = (n) => {

return m => m+" "+n;

}

const jump = printSome("cool");
console.log(jump("something"));