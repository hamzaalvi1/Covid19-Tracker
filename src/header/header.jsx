import {useContext} from "react"
import {CovidContext} from "../CovidContext/GlobalState"
import {MainTitle,CountryDropDown,CountryOption} from '../styleComponents/styledComponents'
const Header = ()=>{
    const {country,setUrl} = useContext(CovidContext)
    const allCountries =  country.flat()
    
    return(
        <div className="app__header">
          <MainTitle>Covid19 Tracker</MainTitle>
          <CountryDropDown onChange = {(evt)=>{setUrl(evt.target.value)}}>
           <CountryOption   value="" >Worldwide</CountryOption>
           
           {
             allCountries.map(country=>{
               return(
                <CountryOption  value={country.name} key={country.alpha3Code}>{country.name}</CountryOption>
                
               )
             })
           }


           

          </CountryDropDown>

        </div>
    )
}
export default Header