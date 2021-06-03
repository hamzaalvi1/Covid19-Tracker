import {createContext,useState} from "react"
import {FetchHook} from "../FetchHook/FetchHook"
export const CovidContext =  createContext()
export const CovidProvider = ({children})=>{
    const [countryCheck,setCountryCheck] = useState(false) 
    const {covidData,setUrl,country,allCountryData,historyData} = FetchHook()
    return(
        <CovidContext.Provider value={{setUrl,covidData,country,allCountryData,historyData,countryCheck,setCountryCheck}}>
            {children}
        </CovidContext.Provider>
    )
}