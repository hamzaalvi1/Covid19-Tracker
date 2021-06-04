import React, { useState,useEffect,useCallback} from "react";
import { MapContainer  , TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import  {useContext} from "react"
import  {CovidContext} from "../CovidContext/GlobalState"

    
 const SecondMap = () =>{  

    
    const [center, setCenter] = useState({ lat: 30.3753, lng: 69.3451 });
    const CovidCases = useContext(CovidContext)
    const {covidData} = CovidCases
     
     const changeCenter =(evt)=>{
          setCenter({lng:-34,lat:+evt.target.value })
         console.log(center)
     }
   
const ZOOM_LEVEL = 5;
     return(
         <>
         <input type="text" onChange = {(evt)=>changeCenter(evt) } />
        <MapContainer  center={center} zoom={ZOOM_LEVEL} >
        <TileLayer
       url = "https://tile.jawg.io/a571a718-69e3-4e00-9763-7f3e08fb5e83/{z}/{x}/{y}{r}.png?access-token=opfk3DGgjMZEkwdlCCkZt4wi2RsmW9DjqDVwRjV49SDi4MSVFfdfQZx1YpVEOgd6"
   attribution = ' &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
        </MapContainer >
        </>
     )
 }
 export default SecondMap