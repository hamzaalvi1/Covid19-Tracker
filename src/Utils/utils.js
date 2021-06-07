import {useContext} from "react"
import {CovidContext} from "../CovidContext/GlobalState"

export const Utils = ()=>{

const newCoordinates = useContext(CovidContext)
const {covidData,coordinates} = newCoordinates
const {countryInfo} = covidData

const newCoordinates = countryInfo ? {...countryInfo} : {...coordinates}




}