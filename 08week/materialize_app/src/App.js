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
        <Card header={<CardTitle reveal image={"img/Murphy_Dog.jpg"} waves='light'/>}
            title="Card Title"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
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
