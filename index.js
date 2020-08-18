// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 
  1. What is the difference between counter1 and counter2?
    counter 1 is using local block scope to set a variable equal to a function call, counter2 uses a global counter to be referenced in the function call.
 * 2. Which of the two uses a closure? How can you tell?
 *  counterMaker uses a closer because it returns a function which is using the local count variable to increment the count.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter 1 would be preferable if we wanted to make a game with different instances of a counter, counter2 is better because we will not lose track of the counter variable when the function is called.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
console.log(counterMaker());
const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(counter2())

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random()*3)

}
console.log(inning());
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,number){
  let countH = 0;
  let countZ =0;
  function count(number){
     for(let i=0; i<number; i++){
       countH = countH + inning();
       countZ = countZ + inning();

     }
  }
count(number);
return{"Home": countH,
"Away": countZ}
}
console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


const scoreboard =function(innings,number) {
  return innings(number)
}

const getInningScore = function(){
   return Math.floor(Math.random()*3)
}

const inningb = function(number){
  var homeScores = [];
  var awayScores = [];
  for(let i=0; i<number; i++){
  homeScores.push(getInningScore())
  awayScores.push(getInningScore())
  }
  var sum = homeScores.reduce(function(a, b){
    return a + b;
}, 0);
var sumTwo = awayScores.reduce(function(a, b){
  return a + b;
}, 0);
 return `1st inning: awayTeam ${homeScores[0]}- homeTeam${awayScores[0]}
  2nd inning: awayTeam ${homeScores[1]} - homeTeam${awayScores[0]}
  3rd inning: awayTeam ${homeScores[2]} - homeTeam${awayScores[0]}
  4th inning: awayTeam ${homeScores[3]} - homeTeam${awayScores[0]}
  5th inning:  awayTeam ${homeScores[4]} - homeTeam${awayScores[0]}
  6th inning: awayTeam ${homeScores[5]} - homeTeam${awayScores[0]}
  7th inning: awayTeam ${homeScores[6]} - homeTeam${awayScores[0]}
  8th inning: awayTeam ${homeScores[7]} - homeTeam${awayScores[0]}
  9th inning: awayTeam ${homeScores[8]} - homeTeam${awayScores[0]}
  Final Score: awayTeam ${sum} - homeTeam${sumTwo}`
}

console.log(scoreboard(inningb,9))