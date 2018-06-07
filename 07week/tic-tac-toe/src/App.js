

//set up board 9 boxes
//pick a player
//ability to place an X or O on board
//check to see if it's a legal move - box is empty and player didn't just move

import React, { Component } from 'react';
import './App.css';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "X"

  }

    }

// //check to see if it's a legal move - box is empty and player didn't just move
//   isLegalMove() {
//
//
//   }
handleClick = (cell) => {
  const state = {...this.state}

if(!this.state[cell]) {

 state[cell] = this.state.player;
 if(this.checkForWin(state)) {
   console.log('win');
   alert(`Player ${this.state.player} Wins!`)
   this.clearBoard()
 } else {
 state.player = this.state.player === 'X' ? 'O' : 'X';
}
this.setState(state)
}
}

checkForWin = (state) => {
const wins = [
  [0, 1, 2],[3, 4, 5], [6, 7, 8], //horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
  [0, 4, 8], [2, 4, 6] //diagonal
];

  return wins.some(possibleWin => {
     return possibleWin.every(index => {
      return state[`cell${index}`] === state["player"];
    })
  })
}

clearBoard = (state) => {
  const stateKeys = Object.keys(this.state)
  stateKeys.forEach(key => {
    if (key === "player") {
     this.setState({player: "X"})
    }
    else {
      delete this.state[key]
    }
  })

}
  render() {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick = {()=>this.handleClick("cell0")}>{this.state.cell0}</div>
          <div data-cell="1" onClick = {()=>this.handleClick("cell1")}>{this.state.cell1}</div>
          <div data-cell="2" onClick = {()=>this.handleClick("cell2")}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick = {()=>this.handleClick("cell3")}>{this.state.cell3}</div>
          <div data-cell="4" onClick = {()=>this.handleClick("cell4")}>{this.state.cell4}</div>
          <div data-cell="5" onClick = {()=>this.handleClick("cell5")}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick = {()=>this.handleClick("cell6")}>{this.state.cell6}</div>
          <div data-cell="7" onClick = {()=>this.handleClick("cell7")}>{this.state.cell7}</div>
          <div data-cell="8" onClick = {()=>this.handleClick("cell8")}>{this.state.cell8}</div>
        </div>
        <button onClick = {()=>this.clearBoard()}>Clear Board</button>
      </div>
    );
  }
}

export default TicTacToe;
