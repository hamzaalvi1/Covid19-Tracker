import {useContext} from "react"
import {CovidContext} from "../CovidContext/GlobalState"
import {MainTitle,CountryDropDown,CountryOption} from '../styleComponents/styledComponents'
const Header = ()=>{
    const {country,setUrl,setCountryCheck} = useContext(CovidContext)
    const allCountries =  country.flat()
    
    const countryPicker = (evt) =>{
      setUrl(evt.target.value)
      evt.target.value ? setCountryCheck(true) : setCountryCheck(false)
      
    }
    return(
        <div className="app__header">
          <MainTitle>Covid19 Tracker</MainTitle>
          <CountryDropDown onChange = {(evt)=>countryPicker(evt)}>
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