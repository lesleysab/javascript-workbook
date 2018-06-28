import React, { Component } from 'react';
import './App.css';
import {Input} from "react-materialize";
import {Row} from "react-materialize";
import {Card} from "react-materialize";
import {CardTitle} from "react-materialize";
import {Slider} from "react-materialize";
import{Slide} from "react-materialize";
import {SideNavItem} from "react-materialize";
import {Button} from "react-materialize";
import {SideNav} from "react-materialize";
import Slidering from './Slidering.js';
import SideNavigation from './SideNavigation.js';



class Former extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Row>
        <Input type="textquery" placeholder= "Organization Name"  s={60} />
      </Row>
    </div>
  );
 }
}

export default Former;
