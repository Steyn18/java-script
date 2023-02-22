// Function is a piece of code, which we can use again and again in our code.

'use  strict';

function sum(a,b){
    return a+b;
}
// calling/running/ invoking function as :
console.log(sum(1,2));

// eg:2-Birthday code
// function Declaration 
function birthDay(name, age , year){
    return `Happy Birthday to ${name}, your age is ${age}  and year is ${year} `;
}

console.log(birthDay('vinay',18,2000));
console.log(birthDay("virat",20,2023));
console.log(birthDay("kohli",32,2023));


// function expression
var add = function (a,b){
    return a+b;
}
console.log(add(1,3));
