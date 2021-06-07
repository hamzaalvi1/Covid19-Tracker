import React, {useContext} from "react";
import { MapContainer  , TileLayer } from "react-leaflet";
import {CovidContext} from "../CovidContext/GlobalState"
import "leaflet/dist/leaflet.css";


    
 const SecondMap = () =>{  
     const covidCoordinates = useContext(CovidContext)
     
     const {coordinates,covidData} = covidCoordinates
     console.log(covidCoordinates)

     const ZOOM_LEVEL = 4;

    
     return(
         <>
        <MapContainer  center={coordinates} zoom={ZOOM_LEVEL} >
        <TileLayer
       url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution = ' &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
        </MapContainer >
        </>
     )
 }
 export default SecondMap