// Coding Challenge #4 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%. 
// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement π (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: βThe bill was 275, the tip was 41.25, and the total value 
// 316.25β 
// Test data: 
// Β§ Data 1: Test for bill values 275, 40 and 430 
// Hints: 
// Β§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// Β§ Value X is between 50 and 300, if it's >= 50 && <= 300 π 
 
// GOOD LUCK π

var bill = 250;
var tip1 = finalValue(250);
var tip2 = finalValue(301);
var tip3 = finalValue(275);

function finalValue(a){
return finalvalue =  a >= 50 && a<=300 ? console.log(a+(a*0.15)) : console.log(a+(a*0.2));
}