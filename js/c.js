var sMsg='Model No. A1784 assigned to product MN4P2LL/A.Entry will be created with Model No. A1784.'

var newMsg = sMsg.split("Model No. ");
console.log(newMsg);
var sErrorMsg = newMsg[newMsg.length-1].split(".");
console.log(sErrorMsg);