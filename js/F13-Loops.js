// for (let index = 0; index <= 100; index++) {
//     if (index>50) {
//         console.log(`(${index}). Value is ${index}`);   
//         continue
//     }
// }


//for of loop
// var  array = ["vinay",18,183,"kohli",["javascript","js","script"]];
// var arrType = [];
// for (var i of array) {
//         arrType[i]= typeof array[i];
// }
// console.log(arrType);


// for in loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

var n = 5; // row or column count
// defining an empty string
var string = "";

for(var i = 0; i < n; i++) { // external loop
  for(var j = 0; j < n; j++) { // internal loop
    string += "a";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);