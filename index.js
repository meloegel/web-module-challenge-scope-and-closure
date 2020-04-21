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
 * 
 * 1. What is the difference between counter1 and counter2?
 * the first counter uses closure and second does not. and count has a global scope in the second counter.
 * 2. Which of the two uses a closure? How can you tell?
 * first one uses closeure because it is putting two function together.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *the first is preferable if you would like to apply it to other counters and the 2nd would be better if you needed to access the count in other counters
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}
console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){
let homeScore = numberOfInnings + inning();
let awayScore = numberOfInnings + inning();
let score = {
  "Home": homeScore,
  "Away": awayScore,
}
  return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

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


function getInningScore(eachInning){
  return {
    Home: eachInning(),
    Away: eachInning(),
  }
}



function scoreboard(getInn, inning, numberOfInnings) {
  let arr = []
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    let currentInn = getInn(inning)
    homeScore = homeScore + currentInn.Home
    awayScore = awayScore = currentInn.Away;
    arr.push(`inning ${i + 1}: awayTeam ${currentInn.Away} - homeTeam ${currentInn.Home}`)
  }
  if (homeScore === awayScore) {
    arr.push(`This game will require extra innings: awayTeam ${awayScore} - homeTeam ${homeScore}`)
  } else {
    arr.push(`Final Score: awayTeam ${awayScore} - homeTeam ${homeScore}`)
  }
  return arr;
}

console.log(scoreboard(getInningScore, inning, 9))


