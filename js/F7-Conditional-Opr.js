

var a = 10, b =5;
var a2 = 110, b2 =225;

 a > b ? console.log(a) : console.log(b);
 a2 > b2 ? console.log(a2) : console.log(b2);


// population example
 var country = "India", population = [300, 31, 35];
 for (let index = 0; index < population.length; index++) {
     console.log( 
        `${country}'s population is ${population[index] > 33 ? 'above' :  'below'} average`, ); 
 }
//  India's population is above average
// India's population is below average
// India's population is above average
 

//ipl team example
 var team = ["CSK","RCB",'MI'];

for (let index = 0; index < team.length; index++) {
    console.log(` ${team[index] === "RCB" ? `I will play only for ${team[index]}`:" I don't  play"}`);
    
 } 
// I don't  play
// I will play only for RCB
//  I don't  play