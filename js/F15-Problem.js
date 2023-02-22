"use strict";

var temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 3];
var temp2 = [3, -2, 8, -1, "error", 9, 13, 18, 15, 14, 9, 3];
console.log(temp);

//1
var findAmplitude = function (arr) {
  var max = arr[0];
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    var curTemp = arr[i];
    if (typeof curTemp !== "number") continue;
    if (arr[i] > max) max = curTemp; //finds  max  value in array
    if (arr[i] < min) min = curTemp; //finds  min value in array
    // return  max-min;
  }
  var diff = max - min;
  return diff;
};

console.log(findAmplitude(temp));

//2
var arr2 = temp.concat(temp2);
console.log(arr2);
console.log(findAmplitude(arr2));
