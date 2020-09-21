/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// Output: is a sequence of throws 
// Input: is the number of throws
// Constraits:
// Edge cases:

var rockPaperScissors = function (numOfRoundsNThrows) {
  let gameRounds = [];
  let throwOptions = ['R', 'P', 'S'];
  for(let numOfRounds=0;numOfRounds<numOfRoundsNThrows;numOfRounds++){
    for(let throws=0;throws<numOfRoundsNThrows;throws++){
      randomThrow = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      gameRounds.push(randomThrow);
    }
  }
  return gameRounds;
};
