'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {

  let stack1 = stacks.a
  let stack2 = stacks.b
  let stack3 = stacks.c
  let disc1 = "x"



}


// Your code here
//I will use if/else statements to move discs on stacks.
//there are 3 stacks. abc
//startStack is 4 discs 234 start on stack a.
//if startStack is a, else endStack can be stack b or c
//if startStack is b, else end Stack can be stack a or c.
// if startStack is c, then endStack can be a or b.
//large disc cannot be placed on top of a smaller disc. run isLegal
//myArray.push("this"); // push a string on the stack
// var a = myArray.pop(); // pops the last element from the stack
// console.log(a); // prints "!"
// console.log(myArray); // prints ["this", "is", "neat"]





function isLegal() {
  // Your code here
  //a disc can move across any stack
  //large disc cannot be placed on top of a smaller disc.
  //I will need to use an if/else statement to determine if the move is legal or not legal.
  //I will need to use a for loop (forEach) to determine the items in each array.
  // if disc is 1 or 2 or 3 or 4 and stack contains no discs, then move is legal.
  //if disc is 1 and stack contains disc 2 or 3 or 4, then move is legal.
  // if disc is 2 and stack contains disc 1, then move is not legal. If it contains disc 3 or disc 4, then it's legal.
  // if disc is 3 and stack contains disc 1 or disc 2, then move is not legal. If it contains disc 4, then it's legal.
  // if disc is 4 and stack contains 1 or 2 or 3, then move is not legal.
  //Legal move – move one piece at a time, piece can go only on the bigger piece or on the empty spot

}

function checkForWin() {
  // Your code here
  //a win is true when in the stacks variable in object c, 4321 is in the array.
  //I will use an if/else statement to check for true/false and probably need a for loop (forEach) to check for the items in teh array.
  let win = stacks.c.length;
  if (win === 4) {
    return movePiece
  } else {
    //don't allow item to move
  }
}


function towersOfHanoi(startStack, endStack) {
  // Your code here
  //it's a loop that calls movePiece for each element in the stack to the endStack

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}