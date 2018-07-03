import React, { Component } from 'react';
import './App.css';
import {Navbar} from "react-materialize";
import {NavItem} from "react-materialize";




class Navigation extends Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
    <div>
        <Navbar brand='Team Town' left>
          <NavItem href='get-started.html'>Home</NavItem>
          <NavItem href='components.html'>Search</NavItem>
        </Navbar>
    </div>
    );
  }
 }




export default Navigation;
