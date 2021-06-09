import {useState,useContext,useEffect,useCallback}from 'react';
import {CovidContext} from "../CovidContext/GlobalState"
import ReactMapGL ,{ Source, Layer}from 'react-map-gl';
function CovidMap() {
    const covidCoordinates = useContext(CovidContext)
    console.log(covidCoordinates)
    const {coordinates,setCoordinates,url,allCountryData,covidData} = covidCoordinates
    const {active} = covidData
    const geojson = {
      type: 'FeatureCollection',
      features: [
        {type: 'Feature', geometry: {type: 'Point', coordinates: [69.3451, 30.3753]}}
      ]
    };
    
    const layerStyle = {
      id: 'point',
      type: 'circle',
      paint: {
        'circle-radius': active / 500,
        'circle-color': '#ff0000',
        'circle-opacity': 0.4
      }
    };

   
    const getCoordinates = useCallback(()=>{
      
        if(url){
       
          const getCountry = allCountryData.find((country)=>{
               return country.countryInfo.iso3 === url
          })
          
          const {countryInfo} = getCountry

         return countryInfo
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
      >
        <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
        </Source>

        
      </ReactMapGL>
      </div>
      
    );
  }
export default CovidMap