'use strict';

const React = require('react');
const ReactDOM = require('react-dom');


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: null
    };
  }

  componentDidMount() {
    const mapCenter = new google.maps.LatLng(-33.8617374,151.2021291);
    this.map = new google.maps.Map(document.getElementById('map'), {
       center: mapCenter,
       zoom: 15
     });
    this.service = new google.maps.places.PlacesService(this.map);
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
    console.log(results);
    this.setState({
      addresses: results
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Site template</h1>
          <p>Cell:</p>
          <form className="form" onSubmit={this.onSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
          {this.state.addresses ? (
            <div className ="map">
              <ul>
                {this.state.addresses.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{`Name: ${item.name}`}</p>
                      <p>{`Address: ${item.formatted_address}`}</p>
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

module.exports = Home;
