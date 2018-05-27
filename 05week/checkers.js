'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  class Player {
    constructor(name, color) {
      this.name = name;
      this.color = color;
      this.startBoard = [
        [, , , , , , , ],
        [, , , , , , , ],
        [, , , , , , , ],
        [, , , , , , , ],
        [, , , , , , , ],
        [, , , , , , , ],
        [, , , , , , , ]
      ];
    }

  }
  checkforWin = () => {
    if (!player1.startBoard.length) {
      return "player2 wins"
    } else {
      return "player1 wins"
    }
    this.grid = []
  }

  // Your code here
  const player1 = new Player(Player1, red, startBoard["", "", "", "", "", "", "", ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], ["O", , "0", , "O", , "O", ], [, "O", , "O", , "O", , "O"], ["O", , "0", , "O", , "O", ]];
);
const player2 = new Player(Player2, black, startBoard["X", , "X", , "X", , "X", ], [, "X", , "X", , "X", , "X"], ["X", , "X", , "X", , "X", ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ], [, , , , , , , ]];
);

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    moveChecker(whichPiece, toWhere {
        let piece = whichPiece.splice()
        let where = toWhere.splice()
      }

      isValid = row is 0 - 7, column 0 - 7
      // isLegalMove = (whichPiece, toWhere) => {
      //   whichPiece belongs to other player
      //   toWhere is = null &&
      //     is(+1 rows || -1 rows indexes in the array) && (+1 columns || -1 columns indexes in the array)
      //   is killMove = toWhere is = the other players piece &&
      //     is(+2 rows || -2 rows indexes in the array) && (+2 columns || -2 columns indexes in the array)
      // if isKillMove, then remove the piece from the board
      // }
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}