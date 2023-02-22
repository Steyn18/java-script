// 1.square pattern
// *****
// *****
// *****
// *****
// *****
// var n=5,string="";
// for(var i = 0; i < n; i++) { 
//   for(var j = 0; j < n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 2. Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

let n = 5; // row or column count
// defining an empty string
let string = "";

for(var i = 0; i < n; i++) { // external loop
  for(var j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);