import React, {useContext,useEffect,useCallback} from "react";
import { MapContainer  , TileLayer } from "react-leaflet";
import {CovidContext} from "../CovidContext/GlobalState"
// import "leaflet/dist/leaflet.css";


    
 const SecondMap = () =>{  
     const covidCoordinates = useContext(CovidContext)
     
     const {coordinates,covidData,allCountryData,url,setCoordinates} = covidCoordinates
     const ZOOM_LEVEL = 4;

     const getCoordinates = useCallback(()=>{
        if(url){
            const getCountry = allCountryData.find((country)=>{
                 return country.country === url
            })
            const {countryInfo} = getCountry

           return countryInfo
        } 
        else{
           console.log("no url")
        }
        return

     },[url,allCountryData])

     
     useEffect(()=>{
       const getCood =  getCoordinates()
       if(url){
           const {lat,long} = getCood
           setCoordinates({lat:lat,lng:long})
       }
     },[url,getCoordinates])

    
     return(
      
        <MapContainer  center={coordinates} zoom={ZOOM_LEVEL} >
        <TileLayer
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution = ' &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       />
        </MapContainer >
        
     )
 }
 export default SecondMap