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
                    lat: 55.9019298,
                    lng: -3.4518249,
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name="CAF Care Medical Ltd"
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <p>{this.state.selectedPlace.name}</p>
                        <div style={{
                            borderTop: '1px solid rgb(204, 204, 204)', marginTop: '9px', padding: '6px', fontSize: '13px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'
                        }}>
                            <a href="https://www.google.com/maps/place/CAF+Care+LTD/@55.9019298,-3.4518249,21z/data=!4m12!1m6!3m5!1s0x0:0x66ff00df9332d0c6!2sCAF+Care+LTD!8m2!3d55.9019761!4d-3.4518634!3m4!1s0x0:0x66ff00df9332d0c6!8m2!3d55.9019761!4d-3.4518634" target="_blank" rel="noopener" style={{ cursor: 'pointer', color: 'rgb(66, 127, 237)', textDecoration: 'none' }}>View on Google Maps</a>

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
