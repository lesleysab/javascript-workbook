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
          title="This is our big Tagline!">
          'Here is our small slogan.'
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/2"
          title="Left aligned Caption"
          placement="left">
          'Here is our small slogan.'
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/3"
          title="Right aligned Caption"
          placement="right">
          'Here is our small slogan.'
        </Slide>
      </Slider>
    </div>
  );
 }
}
export default Slidering;
