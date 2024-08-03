import React from 'react';
import Map from 'google-map-react';
import GeoApiWrapper from 'google-map-react';

class SecondMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.goole}
        style={{ width: "100%", height: "100%" }}
        zoom={15}
        center={{ lat: 40.712776, lng: -74.005974 }}
      />
    );
  }
}

export default GeoApiWrapper({
  apiKey: "AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8",
})(SecondMap);
