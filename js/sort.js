function sortArray(arr, order = "asc") {
    return arr.sort((a, b) => {
      if (order === "asc") {
        return a - b;
      } else {
        return b - a;
      }
    });
  }
  
  console.log(sortArray([3, 1, 4, 2])); // [1, 2, 3, 4]
  console.log(sortArray([3, 1, 4, 2], "desc")); // [4, 3, 2, 1]
  
var array = [23,465.0,987,1,-1,0,-9]
  console.log(sortArray(array)); // [1, 2, 3, 4]


  //
var date = new Date();
  var utcDate = new Date(date.toUTCString());
			utcDate.setTime(utcDate.getTime() - 13.5 * 60 * 60 * 1000);
			var usDate = new Date(utcDate);

			var aPrevious = new Date(usDate.toUTCString());
			aPrevious.setTime(aPrevious.getTime() - 30 * 24 * 60 * 60 * 1000);
			var oPreviousDate = new Date(aPrevious);

      console.log(usDate);
      console.log(oPreviousDate);

      

var myTimer = function () {
  console.log(new Date());
}
setInterval(myTimer, 5000);