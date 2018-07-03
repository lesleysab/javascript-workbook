import React, { Component } from 'react';
import './App.css';
import {Input} from "react-materialize";
import {Row} from "react-materialize";
import {Card} from "react-materialize";
import {CardTitle} from "react-materialize";
import {CardPanel} from "react-materialize";
import {Col} from "react-materialize";
import {Slider} from "react-materialize";
import{Slide} from "react-materialize";
import {SideNavItem} from "react-materialize";
import {Button} from "react-materialize";
import {SideNav} from "react-materialize";
import Slidering from './Slidering.js';
import SideNavigation from './SideNavigation.js';



class Carding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <Row>
          <Col s={12} m={5}>
              <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
              </CardPanel>
          </Col>
          <Col s={12} m={7}>
              For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
          </Col>
        </Row>
    </div>
   );
  }
}
export default Carding;
