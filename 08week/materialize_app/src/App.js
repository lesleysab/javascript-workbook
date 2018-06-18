import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from "react-materialize";
import {Row} from "react-materialize";
import {Card} from "react-materialize";
import {CardTitle} from "react-materialize";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Card className='small'
        header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>"I am a very simple card."
        "I am good at containing small bits of information."
        "I am convenient because I require little markup to use effectively."
      </Card>
      <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
          <Input type="password" label="password" s={12} />
          <Input type="email" label="Email" s={12} />
      </Row>

    </div>
    );
  }
}



export default App;
