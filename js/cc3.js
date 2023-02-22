// Coding Challenge #3 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 

// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 😉 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy 
// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
 
// GOOD LUCK 😀 
 
 

var avgDol1 = average(96,108,89),avgKol1 = average(88,91,110);
var avgDol2 = average(97,112,101),avgKol2 = average(109,95,123);
var avgDol3 = average(97,112,101),avgKol3 = average(109,95,106);

high(avgDol1,avgKol1);
high(avgDol2,avgKol2);
high(avgDol3,avgKol3);

 function average(a,b,c){
    return ((a+b+c)/3) ;
 }
 
  
function high(a,b) {
    if (a>b && a>=100) {
        return console.log( "Dolphins  Won");
    } else if(b>a && b>=100) {
        return console.log("Koalas Won");
    }
    else if(a === b && a>=100 && b>=100 ){ 
        return console.log("Both team wins");
    } else  {
        console.log("No team wins");
    }
}