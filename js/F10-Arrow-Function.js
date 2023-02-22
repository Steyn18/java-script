// function sum(a,b){
//     return a+b;
// }

//Arrow function
var  sum = a => a+2;

console.log(sum(1));

//2
const percentageOfWorld3 = (population) => (population / 7900)  * 100; 
 
  const percPortugal3 = percentageOfWorld3(10); 
  const percChina3 = percentageOfWorld3(1441); 
  const percUSA3 = percentageOfWorld3(332); 
  console.log(percPortugal3, percChina3, percUSA3); 


  //3

//   const sum = function (a,b){return a+b;}
  const equation = (a,b) => { return (a*b / 2)  * 100;} 
  var eq1 = equation(2,3);
  console.log(eq1);//300