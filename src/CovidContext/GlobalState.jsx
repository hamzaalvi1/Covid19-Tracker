import {createContext,useState,} from "react"
import {FetchHook} from "../FetchHook/FetchHook"
export const CovidContext =  createContext()
export const CovidProvider = ({children})=>{
    const [countryCheck,setCountryCheck] = useState(false) 
    const [coordinates,setCoordinates] = useState({width: `100%`,
    height: 520,
    latitude: 30.3753,
    longitude: 69.3451,
    zoom: 4 }) 



    const {covidData,setUrl,country,allCountryData,historyData,url} = FetchHook()
    return(
        <CovidContext.Provider value={{url,setUrl,covidData,country,allCountryData,historyData,countryCheck,setCountryCheck,coordinates,setCoordinates}}>
            {children}
        </CovidContext.Provider>
    )
}