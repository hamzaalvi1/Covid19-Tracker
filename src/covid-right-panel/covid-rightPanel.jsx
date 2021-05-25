import React , {useContext} from 'react'
import {RightMainCard,MainHeading,CasesTable,TableRow,TableData,GraphCard} from "../styleComponents/styledComponents"
import LineChart from "../Chart/Chart"
import {CovidContext} from "../CovidContext/GlobalState"
import CountUp from "react-countup"
const  CovidRightPanel = () => {
    const covidData = useContext(CovidContext)
    const {allCountryData} = covidData
    const allLiveCases = allCountryData.sort((a,b)=> { return b.cases - a.cases})
    
    
    return (
        <div className="app__right__panel">
             <RightMainCard>
             <MainHeading>
                 World Wide Cases
             </MainHeading>
             <CasesTable className = "cases__table">
               <tbody>
                {allLiveCases.map((country)=>{
                  return(
                    <TableRow key = {country.country}>
                    <TableData>
                     {country.country}
                    </TableData>
                    <TableData>
                    <CountUp start = {0} end= {country.cases} separator = "," duration ={3}/>
                    </TableData>
                </TableRow>
                  ) 
                })} 
              
             
              </tbody>
             </CasesTable>
              
             

            </RightMainCard>
            <GraphCard>
            <LineChart/>
            </GraphCard>
        </div>
    )
}

export default CovidRightPanel
