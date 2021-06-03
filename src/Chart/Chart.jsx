import {Line} from "react-chartjs-2"
import {useContext} from "react"
import {CovidContext} from "../CovidContext/GlobalState"

const LineChart = ()=>{

   
   const covidHistoryData = useContext(CovidContext)
   const {historyData,countryCheck} = covidHistoryData

   const {cases,recovered,deaths} = historyData
   const activeCases = [];
   const deathCases = [];
   const recoverCases = [];

   const date = [];
   if(!countryCheck){
     
   
   for(let activecases in cases ){
      let dateObj = {date: activecases}
      date.push(dateObj)
      let caseObj = {cases: cases[activecases]}
      activeCases.push(caseObj)


   }

   for(let recover in recovered ){
       let caseObj = {cases: recovered[recover]}
       recoverCases.push(caseObj)
   }
   for(let dead in deaths ){
    let caseObj = {cases: deaths[dead]}
    deathCases.push(caseObj)}


   }
   else {
      
        let hData = historyData ? historyData : {}
        const {timeline} = hData
        const countryCases = timeline !== undefined ? timeline : {}
        const {cases,recovered} = countryCases
        for(let activecases in cases ){
            let dateObj = {date: activecases}
            date.push(dateObj)
            let caseObj = {cases: cases[activecases]}
            activeCases.push(caseObj)      
         }
         for(let recover in recovered ){
            let caseObj = {cases: recovered[recover]}
            recoverCases.push(caseObj)
        }
        for(let dead in deaths ){
            let caseObj = {cases: deaths[dead]}
            deathCases.push(caseObj)
        }   
     
   }
    return(
        <Line options={{plugins:{legend:{display:false}}}} width={100} height={50} data={{
            labels:date.map((date)=>date.date),
            datasets: [{
                label: "Infected Cases",
                data: activeCases.map((cases)=> cases.cases),
                backgroundColor: "red",       
            
            },
            {
                label: "Recovered Cases",
                data: recoverCases.map((cases)=> cases.cases),
                backgroundColor: "green",

            },
            {
                label: "Deaths",
                data: deathCases.map((cases)=> cases.cases),
                backgroundColor: "blue",

            }]
        }}
        
        />

        
    )
}
export default LineChart