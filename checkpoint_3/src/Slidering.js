import React, { Component } from 'react';
import './App.css';
import {Slider} from "react-materialize";
import {Slide} from "react-materialize";
import {MediaBox} from "react-materialize";



class Slidering extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      {/* <MediaBox src="https://lorempixel.com/350/350/nature/1" caption="A demo media box1" width="350"/>*/}
      <Slider>
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="Turn your town into a Team">
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/2"
          title="Find Resources to help solve unmet social needs"
          placement="left">
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/3"
          title="Refer Clients to those who can help"
          placement="right">
        </Slide>
      </Slider>
    </div>
  );
 }
}
export default Slidering;
