//Write out the user events that you’ll be using
//display an empty text box
//type in empty text box
//a place to store the items in the list
//clear the input field to add another item
//update the list when a new item is added

//Write out what you’ll be storing in the state
//start with storing an empty string
//when typing in the text field, we would store the input
//then we clear the input and set state to empty string
//and then we would update the state aka list with the last item

//Write out where you’ll update the state and with what data
//start with storing an empty string. this is set in the component as this.state
//when typing in the text field, we would store the input. we would update the state with the handleInputChange function that would update the input value.
//then we clear the input and set state to empty string. we would update the state with the handleClearInput function that would update the input value.
//and then we would update the state aka list with the last item.  We would set this.state in component to "createlist: "". We would create a function called handleUpdateList that would take in the inputvalue and set it in the "updatelist" object.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          inputValue: '',
          list: []
      }
  }

handleInputChange(e) {
      this.setState({inputValue: e.target.value})
  }

handleSubmit() {
  const listItem = this.state.inputValue;
  this.setState({
    list: [...this.state.list, listItem],
    inputValue: ""
   })
  //console.log(this.state.list);
  //  const newList = this.state.list;
    //newList.push(this.state.inputValue)
    //this.setState({list: [this.state.list, this.state.inputValue]})
  }

// handleUpdateList = ()=> {
//   const list = this.state.list;
//   list.push(this.state.inputValue)
//   this.setState({list: list, inputValue: ''})
// }

displayList = ()=> {
     let array = this.state.list.map((item, i) => {
      //console.log(item)
    // let singleItem = React.createElement('li', null, item)
      return <li key = {i}>{item}</li>
    })
    //console.log(array)
    return array;
};

  render() {
    // let items=this.state.list.map( (item, i)  => <li key= {i}>{item}</li>)
    return (

        <div>
          <h2>Enter Your To Do List</h2>
          <input value = {this.state.inputValue} onChange={(e)=> this.handleInputChange(e)} />
          <button onClick= {() => this.handleSubmit()}>Submit</button>

          <h2>Your To Do List</h2>
          <ul>{this.displayList()} </ul>

        </div>
    )
  }
}
export default App;
