// var arr = new Array();
// arr.push("vinay","18");
// console.log(arr);

// var map = new Map();
// map.set("age",18);

// console.log(map.set("age",23));
// console.log(map);
// console.log(map.has("age"));

//  function filter(oEvent) {
//   var oSmartTable = this.getView().byId("idSmartTableMNLoc").getTable(),
//       oQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue"),
//       aFilter = ['ModelNo', 'Prvsy', 'Grvsy', 'ManufacturerNo'].map(field => new Filter(field, FilterOperator.Contains, oQuery.toUpperCase())),
//       oFilter = [new Filter(aFilter, false)];

//   oSmartTable.getBinding("rows").filter(oFilter);
// }

const inrArray = [10, 20, 598, 2000, 78];

// const  usDollars = inrArray.map(function (array_item) {
//     return array_item * 0.012;
// })

const usDollars = inrArray.map((array_item, i) => array_item * 0.012); //[ 0.12, 0.24, 7.176, 24, 0.936 ]
const usDollars2 = inrArray.map(
  (array_item, i) => `Value of array is ${array_item * 0.012} at index ${i}`
)[(0.12, 0.24, 7.176, 24, 0.936)];
// in maps while passing an array, the default two arg/prmss are value  and index of an array

console.log(inrArray); //[10,20,598,2000,78]
console.log(usDollars); //[ 0.12, 0.24, 7.176, 24, 0.936 ]
console.log(usDollars2); //[
//     'Value of array is 0.12 at index 0',
//     'Value of array is 0.24 at index 1',
//     'Value of array is 7.176 at index 2',
//     'Value of array is 24 at index 3',
//     'Value of array is 0.936 at index 4'
//   ]

// const newArray = [];
// for (const usd of inrArray) {
//      var result = usd * 0.012;
// newArray.push(result);
// }
// console.log(newArray);
// [ 0.12, 0.24, 7.176, 24, 0.936 ]

//
// const name = "Kodi Vinay Kumar";
// const userName = name.toLowerCase().split(" ");
// const initialCharcters = userName.map( (item) => item[0].toUpperCase()  ).join("")

// console.log(userName);
// console.log(initialCharcters);

const acc1 = { owner: "vinay kumar", id: "ds" };
const acc2 = { owner: "vinay kohli", id: "sd" };
const acc3 = { owner: "kodi kumar", id: "sed" };
const acc= [];
acc.push(acc1, acc2, acc3);

const createUserName = function (array) {
  array.forEach((obj) => {
    obj.userName = obj.owner
      .toLowerCase()
      .split(" ")
      .map((item) => item[0].toUpperCase())
      .join("");
  });
};
createUserName(acc)
//  var user = name
//     .toLowerCase()
//     .split(" ")
//     .map((item) => item[0].toUpperCase())
//     .join("");
//     return user;
// };

// console.log(createUserName("Virat Kohli"));//VK
// console.log(createUserName("100 850"));//18
// console.log(createUserName("Vinay Kumar"));//VK
// console.log(createUserName("Rohit Sharma"));//RS
// console.log(createUserName("4 5"));//45
console.log(acc);

