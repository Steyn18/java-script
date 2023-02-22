"use strict";

var n = 5,
  str ="",space="";
// for (var i = 0; i < n; i++) {
//   for (var j = 0; j < i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);



for (var i = 1; i <= 2*n; i++) {
    var c = i>n ? 2*n-i : i;
    for (var j = 1; j <= c; j++) {
      str += space+"*";
    }
    str += "\n";
    // n++
  }

  console.log(str);
  