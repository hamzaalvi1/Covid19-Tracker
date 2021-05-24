import {useContext} from "react"
import {CovidContext} from "../CovidContext/GlobalState"
import {MainTitle,CountryDropDown,CountryOption} from '../styleComponents/styledComponents'
const Header = ()=>{
    const {country} = useContext(CovidContext)
    const allCountries =  country.flat()
    return(
        <div className="app__header">
          <MainTitle>Covid19 Tracker</MainTitle>
          <CountryDropDown>
           <CountryOption   defaultValue="worldwide" >Worldwide</CountryOption>
           
           {
             allCountries.map(country=>{
               return(
               
                
                <CountryOption value={country.alpha3Code} key={country.alpha3Code}>{country.name}</CountryOption>
              
               )
             })
           }


           

          </CountryDropDown>

        </div>
    )
}
export default Header