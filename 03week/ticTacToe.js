'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


let playerTurn = 'X';


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}



function horizontalWin() {
  board.forEach(function(item) {
    console.log()
  });
  // Your code here
  //check each array for  3 X or O
  //check 1st array 0 and all elements for x, y. and all positions are returned, then x or y wins
  //check 2nd array 1 and all elements for x, y. and all positions are returned, then x or y wins
  //check 3rd array 2 and all elements for x, y. and all positions are returned, then x or y wins

}

function verticalWin() {

  board.forEach(function(item) {
    console.log()
  });

  // Your code here
  //check each element 0, 1, 2 in each array for 3 x or 3 O
  //check element 0 in array 0 for x, y
  //check element 0 in array 1 for x,y
  //check element 0 in array 2 for xy
  //then x,y wins
  //check element 1 in array 0 for x, y
  //check element 1 in array 1 for x,y
  //check element 1 in array 2 for xy
  //then x,y wins
  //check element 2 in array 0 for x, y
  //check element 2 in array 1 for x,y
  //check element 2 in array 2 for xy
  //then x,y wins
}

function diagonalWin() {

  board.forEach(function(item) {
    console.log()
  });
  // Your code here
  //check element 0 in array 0
  //check element 1 in array 1,
  //check element 2 in array 2
  //then x,y wins
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
  //player 1 places X on board
  //player 2 places O on board, but not where there is an X or an O
  //player 1 places X on board, but not where there is an X or O
  //check to see if a value exists in the cell, if there is not a value, then an x or o can be placed.
  //if an x played last, then play an o.
  //   if (playerTurn = 'X' &&
  //     index === "") {
  //     return "X"
  //   } else {
  //     return "O"
  //   }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}