import React from 'react'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
function CovidMap() {
   
    const [viewport, setViewport] = useState({
      width: `100%`,
      height: 520,
      latitude: 30.3753,
      longitude: 69.3451,
      zoom: 5
    });
  
    return (
     <div className="mapWrapper">
      <ReactMapGL
      className = "map"
       mapStyle="mapbox://styles/hamza-alvi/ckoywbr372air17o2mux5kdb1"
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
      </div>
      
    );
  }
export default CovidMap