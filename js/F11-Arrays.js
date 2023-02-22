




var arr = ['vinay',18];
arr.push("kohli",45);
// arr.push(...items) – adds items to the end,
console.log(arr);

arr.pop();
// arr.pop() – deletes an item from the end,
console.log(arr);

arr.shift()
// arr.shift() – extracts an item from the beginning
console.log(arr);

arr.unshift("Rohit Sharma");
// arr.unshift("something") – adds items to the beginning.
console.log(arr);

var arrHas = arr.includes("kohli");
//arr.includes(something)-returns true if value is there in an arr
console.log(arrHas);

var arrInd = arr.indexOf(18);
//arr.indexOf returns the index value of 45 in array, if not found returns (-1)
console.log(arrInd);

var arrNe= arr.concat(new Array("dhoni"));
//concats both arrays
console.log(arrNe);

var arrSort = arr.sort();
//sort the  order
console.log(arrSort);

arr.forEach((item, index) => {
// The arr.forEach method allows to run a function for every element of the array.
console.log(`${item} is at index ${index} in ${arr}`);
  });