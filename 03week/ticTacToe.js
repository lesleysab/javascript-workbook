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
  if (board.includes("X", [0, 0], [0, 1], [0, 2])) {
    return true;
  } else if (board.includes("X", [1, 0], [1, 1], [1, 2])) {
    return true;
  } else if (board.includes("X", [2, 0], [2, 1], [2, 2])) {
    return true;
  }
  // Your code here
  //check each array for  3 X or O
  //check 1st array 0 and all elements for x, y. and all positions are returned, then x or y wins
  //check 2nd array 1 and all elements for x, y. and all positions are returned, then x or y wins
  //check 3rd array 2 and all elements for x, y. and all positions are returned, then x or y wins


  // winner combos is array 0 in 0 1 2 || array 1 in 0, 1, 2 || in array 2 in 0, 1, 2
  // console.log(board[0][0])

}

function verticalWin() {
  if (board.includes("X", [0, 0], [1, 0], [2, 0])) {
    return true;
  } else if (board.includes("X", [0, 1], [1, 1], [2, 1])) {
    return true;
  } else if (board.includes("X", [0, 2], [1, 2], [2, 2])) {
    return true;
  }


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

  // winner combos in array 0 index 0 + in array 1 index 0 + array 2 index 0 || array 0 index 1 + array 1  index 1 + array 2 index 1 || array 0 index 2 + array 1 index 2 + array 2 index 2

}

function diagonalWin() {
  if (board.includes("X", [0, 0], [1, 1], [2, 2])) {
    return true;
  } else if (board.includes("X", [2, 0], [1, 1], [0, 2])) {
    return true;
  }


  // Your code here
  //check element 0 in array 0
  //check element 1 in array 1,
  //check element 2 in array 2
  //then x,y wins
}

function checkForWin() {
  if (horizontalWin(), true) {
    return true;
    console.log("You Win");
  } else if (verticalWin(), true) {
    return true;
    console.log("You Win");
  } else if (diagonalWin(), true) {
    return true;
    console.log("You Win");
  }
}



function ticTacToe(row, column) {

  if (!playerTurn) {
    let playerTurn = "O"
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

    //is space empty? if yes, place x or o.
    // board[0][0] = 'X'
  }
  checkForWin()
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