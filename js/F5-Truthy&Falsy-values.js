// 5 falsy values: "", null , undefined, 0, NaN

console.log(Boolean(""));//false
console.log(Boolean("Vinay"));//true

console.log(Boolean(0));//false
console.log(Boolean(1));//true

console.log(Boolean(null));//false
console.log(Boolean(!null));//true

console.log(Boolean(undefined));//false
console.log(Boolean(!undefined));//true

console.log(Boolean(NaN));//false
console.log(Boolean(!NaN));//true

console.log(Boolean({}));//true


var age  = "18";
if (age == 18) {
    console.log("age");  //18
}
if ("18" === 18) {
    console.log("age");// returns nothing
}

var value = prompt("Your number?");
console.log(value);