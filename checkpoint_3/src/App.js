import React, { Component } from 'react';
import {Input} from "react-materialize";
import {Button} from "react-materialize";
import Navigation from './Navigation.js';
import Slidering from './Slidering.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: null
    };
  }

  componentDidMount() {
    const mapCenter = new window.google.maps.LatLng(-33.8617374,151.2021291);
    this.map = new window.google.maps.Map(document.getElementById('map'), {
       center: mapCenter,
       zoom: 15
     });
    this.service = new window.google.maps.places.PlacesService(this.map);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.children[0].value;

    const request = {
      query,
      fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
   }
   return this.service.findPlaceFromQuery(request, this.receivePlaceInfo);
  }

  receivePlaceInfo = (results, status) => {
    // console.log(results);
    this.setState({
      addresses: results
    })
  }

  render() {
    return (
    <div>
      <Navigation />
      <Slidering />
        <div>
            <h4>Search for a Place</h4>
            <form className="form" onSubmit={this.onSubmit}>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          {this.state.addresses ? (
          <div>
              <ul>
                {this.state.addresses.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{`Name: ${item.name}`}</p>
                      <p>{`Address: ${item.formatted_address}`}</p>
                      <button type = "submit">Contact</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default App;
