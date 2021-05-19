import {MainTitle,CountryDropDown,CountryOption} from '../styleComponents/styledComponents'
const Header = ()=>{
    return(
        <div className="app__header">
          <MainTitle>Covid19 Tracker</MainTitle>
          <CountryDropDown>
           <CountryOption  selected value="worldwide">Worldwide</CountryOption>
           <CountryOption value="pakistan">Pakistan</CountryOption>
           <CountryOption  value="india">India</CountryOption>


           

          </CountryDropDown>

        </div>
    )
}
export default Header