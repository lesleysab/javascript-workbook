'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function rockPaperScissors(hand1, hand2) {


  // Write code here
  // version 1



  if (hand1.toLowerCase().replace(/ /g, '') === "rock" && hand2.toLowerCase().replace(/ /g, '') === "scissors") {
    // If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
    return "Hand one wins!";
  } else
  if (hand1.toLowerCase().replace(/ /g, '') === "paper" && hand2.toLowerCase().replace(/ /g, '') === "rock") {
    // If User1 input is 'paper' and User2 input is 'rock', User1 wins.
    return "Hand one wins!!";
  } else if (hand1.toLowerCase().replace(/ /g, '') === "scissors" && hand2.toLowerCase().replace(/ /g, '') === "paper") {
    // If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
    return "Hand one wins!";
  } else if (hand1.toLowerCase().replace(/ /g, '') === "scissors" && hand2.toLowerCase().replace(/ /g, '') === "rock") {
    // If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
    return "Hand two wins!";
  } else if (hand1.toLowerCase().replace(/ /g, '') === "paper" && hand2.toLowerCase().replace(/ /g, '') === "scissors") {
    // If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
    return "Hand two wins!";
  } else if (hand1.toLowerCase().replace(/ /g, '') === "rock" && hand2.toLowerCase().replace(/ /g, '') === "paper") {
    // If User1 input is 'rock' and User2 input is 'paper', User2 wins.
    return "Hand two wins!";
  } else if (hand1.toLowerCase().replace(/ /g, '') === hand2.toLowerCase().replace(/ /g, '')) {
    return "It's a tie!";
  }
}

// function trim(rock) {
//   return rock.replace(/^\s+|\s+$/g, "");
// }
//
// function trim(paper) {
//   return paper.replace(/^\s+|\s+$/g, "");
// }
//
// function trim(scissors) {
//   return scissors.replace(/^\s+|\s+$/g, "");
// }

// version 2
// if (hand1 === "rock" && hand2 === "scissors") {
//   // If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
//   return "Hand one wins!";
// } else if (hand1 === "paper" && hand2 === "rock") {
//   // If User1 input is 'paper' and User2 input is 'rock', User1 wins.
//   return "Hand one wins!";
// } else if (hand1 === "scissors" && hand2 === "paper") {
//
//   // If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
//   return "Hand one wins!";
// } else if (hand1 === "scissors" && hand2 === "rock") {
//   // If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
//   return "Hand two wins!";
// } else if (hand1 === "paper" && hand2 === "scissors") {
//   // If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
//   return "Hand two wins!";
// } else if (hand1 === "rock" && hand2 === "paper") {
//
//   // If User1 input is 'rock' and User2 input is 'paper', User2 wins.
//   return "Hand two wins!";
// } else if (hand1 === hand2) {
//   return "It's a tie!";
// }
// version 3
// if (hand1 === "rock") {
//   if (hand2 === "scissors") {
//     //rock wins - hand1
//     return "Hand one wins!";
//   } else {
//     //paper wins - hand2
//     return "Hand two wins!";
//   }
// }
//
//
// if (hand1 === "paper") {
//   if (hand2 === "rock") {
//     //paper wins-hand1
//     return "Hand one wins!";
//   } else {
//     //rock wins - hand2
//     return "Hand two wins!";
//   }
// }
//
//
// if (hand1 === "scissors") {
//   if (hand2 === "rock") {
//     //rock wins - hand2
//     return "Hand two wins!";
//   } else {
//     //scissors wins - hand1
//     return "Hand one wins!";
//   }
// }






function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}