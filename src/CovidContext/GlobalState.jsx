import {createContext} from "react"
import {FetchHook} from "../FetchHook/FetchHook"
export const CovidContext =  createContext()
export const CovidProvider = ({children})=>{
    const {covidData,setUrl,country,allCountryData} = FetchHook()
    return(
        <CovidContext.Provider value={{setUrl,covidData,country,allCountryData}}>
            {children}
        </CovidContext.Provider>
    )
}