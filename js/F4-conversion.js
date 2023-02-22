var year = "2022"
// string + num
console.log(year); //2022
console.log(year + 18);//202218

//type conversion
//string convert to number  using Number(argument)
console.log(Number(year), year); //2022 2022
console.log(Number(year) + 18);// 2040

console.log(Number("vinay")); //NaN
console.log(typeof NaN);//number

console.log(String(18), 18); // 18 18

//type coercion
console.log('Jersey is '+ 18);//Jersey is 18
console.log('22'-'10'-'2');//10
console.log('22'+'10'+'2');//22102
console.log('10'*'2');//20
console.log('10'/'2');//5