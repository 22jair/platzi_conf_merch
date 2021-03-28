import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ location }) => {
  
  const API_KEY = 'AIzaSyCIkhCgETSLeme6uVgLlCE73OHPwqpVwLU';

  const mapStyles = {
    height: '58vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: location.lat,    
    lng: location.lng,
    // lat: -13.0703935,
    // lng: -76.3695253
  };


  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap 
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
        >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  ) 
};

export default Map;
