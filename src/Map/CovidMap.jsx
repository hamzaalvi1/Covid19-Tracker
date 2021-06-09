import {useState,useContext,useEffect,useCallback}from 'react';
import {CovidContext} from "../CovidContext/GlobalState"
import ReactMapGL from 'react-map-gl';
function CovidMap() {
    const covidCoordinates = useContext(CovidContext)
    const {coordinates,setCoordinates,url,allCountryData} = covidCoordinates
   
    const getCoordinates = useCallback(()=>{
      
        if(url){
       
          const getCountry = allCountryData.find((country)=>{
               return country.countryInfo.iso3 === url
          })
          
          const {countryInfo} = getCountry
          console.log(countryInfo)

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
          setCoordinates({...coordinates,latitude:lat,longitude:long})
      
       
    }
  },[url,getCoordinates,setCoordinates])
  
    return (
     <div className="mapWrapper">
      <ReactMapGL
      className = "map"
       mapStyle="mapbox://styles/hamza-alvi/ckoywbr372air17o2mux5kdb1"
        mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`}
        {...coordinates}
        onViewportChange={nextViewport => setCoordinates(nextViewport)}
      />
      </div>
      
    );
  }
export default CovidMap