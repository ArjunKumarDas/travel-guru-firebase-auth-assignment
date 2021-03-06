
import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from './mapStyles';
import config from './config';
import './CustomCss.css'
function MapComponent(props) {
  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel)
  const [lat, setLat] = useState(config.lat || 51.4934);
  const [lng, setLng] = useState(config.lng || 0.0098);
  
  return (
    <div className='map'>
        <div className="custom">
        <Map
        google={props.google}
        zoom={zoomLevel}
        styles={mapStyles}
        disableDefaultUI={config.useDefaultUI}
        initialCenter={{
          lat,
          lng
        }}
      >
        <Marker
          position={{ lat: config.latitudeForMarker, lng: config.longitudeForMarker }}
          icon={config.googleMapsMarkerIcon}
        />
      </Map>
        </div>
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent);
