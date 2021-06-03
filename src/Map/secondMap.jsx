import React, { useState,useRef } from "react";
import { MapContainer  , TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

    
 const SecondMap = () =>{
   
const [center, setCenter] = useState({ lat: 30.3753, lng: 69.3451 });
const ZOOM_LEVEL = 9;
const mapRef = useRef();
     return(
        <MapContainer  center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
       url = "https://tile.jawg.io/a571a718-69e3-4e00-9763-7f3e08fb5e83/{z}/{x}/{y}{r}.png?access-token=opfk3DGgjMZEkwdlCCkZt4wi2RsmW9DjqDVwRjV49SDi4MSVFfdfQZx1YpVEOgd6"
   attribution = ' &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
        </MapContainer >
     )
 }
 export default SecondMap