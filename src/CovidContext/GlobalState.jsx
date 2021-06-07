import {createContext,useState} from "react"
import {FetchHook} from "../FetchHook/FetchHook"
export const CovidContext =  createContext()
export const CovidProvider = ({children})=>{
    const [countryCheck,setCountryCheck] = useState(false) 
    const [coordinates,setCoordinates] = useState({lat: -34,lng:-64 }) 

    const {covidData,setUrl,country,allCountryData,historyData} = FetchHook()
    return(
        <CovidContext.Provider value={{setUrl,covidData,country,allCountryData,historyData,countryCheck,setCountryCheck,coordinates,setCoordinates}}>
            {children}
        </CovidContext.Provider>
    )
}