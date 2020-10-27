import React, { Component } from 'react';
import {
  Map, GoogleApiWrapper, InfoWindow, Marker,
} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false, // Hides or the shows the infoWindow
      activeMarker: {}, // Shows the active marker upon click
      selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) => this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

    onClose = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
        });
      }
    };

    render() {
      return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{
                  lat: 55.888998,
                  lng: -3.429127,
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name="Driver Medical Fitness"
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <p>{this.state.selectedPlace.name}</p>
                        <div style={{
                          borderTop: '1px solid rgb(204, 204, 204)', marginTop: '9px', padding: '6px', fontSize: '13px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
                        }}>
                            <a href="https://www.google.com/maps/place/D+J+Carnochan+Joinery/@55.8889898,-3.4295142,19z/data=!3m1!4b1!4m5!3m4!1s0x4887db5f9ce805b5:0xf1e47f64946b425d!8m2!3d55.888989!4d-3.428967" target="_blank" rel="noopener" style={{ cursor: 'pointer', color: 'rgb(66, 127, 237)', textDecoration: 'none' }}>View on Google Maps</a>

                        </div>
                        <div style={{
                          borderBottom: '1px solid rgb(204, 204, 204)', marginTop: '2px', padding: '6px', fontSize: '13px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
                        }}>
                            <a href="https://www.google.com/maps/dir//D+J+Carnochan+Joinery,+Braekirk+Gardens,+Kirknewton+EH27+8BT/@55.8889898,-3.4295142,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4887db5f9ce805b5:0xf1e47f64946b425d!2m2!1d-3.428967!2d55.888989!3e0" target="_blank" rel="noopener" style={{ cursor: 'pointer', color: 'rgb(66, 127, 237)', textDecoration: 'none' }}>Get Directions</a>
                        </div>

                    </div>
                </InfoWindow>
            </Map >
      );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIBx99qXm0z_EDVfW8rGe1n1YYq01sdUQ',
})(MapContainer);
