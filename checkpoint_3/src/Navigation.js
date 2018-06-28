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
        <Navbar brand='logo' left>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
    </div>
    );
  }
 }




export default Navigation;
