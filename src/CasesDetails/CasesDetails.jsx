import {CasesCard,AnotherCard,CasesSubTitle,CasesNumbers,CasesPara} from '../styleComponents/styledComponents'
import  {useContext} from "react"
import  {CovidContext} from "../CovidContext/GlobalState"
import CountUp from "react-countup"
const CasesDetails = ()=>{
    const CovidCases = useContext(CovidContext)
    const {covidData} = CovidCases
    return(
        <div className="app__cases__details">
            <CasesCard infected>
                <CasesSubTitle>No of Infected Cases</CasesSubTitle>
                <CasesNumbers><CountUp start = {0} end= {covidData.cases ? covidData.cases : 0} separator = "," duration ={3}/></CasesNumbers> 
                <CasesPara>Infected cases details</CasesPara>  
            </CasesCard>
            <CasesCard>
            <CasesSubTitle>No of Recovered  Cases</CasesSubTitle>
            <CasesNumbers><CountUp start = {0} end= {covidData.recovered ? covidData.recovered : 0} separator = "," duration ={3}/></CasesNumbers>   
            <CasesPara>Recovered cases details</CasesPara>  



            </CasesCard>
            <AnotherCard>
            <CasesSubTitle>No of Deaths </CasesSubTitle>
                <CasesNumbers><CountUp start = {0} end= {covidData.deaths ? covidData.deaths: 0} separator = "," duration ={3}/></CasesNumbers> 
                <CasesPara>Deaths details</CasesPara>  



            </AnotherCard>


        </div>
    )
}

export default CasesDetails