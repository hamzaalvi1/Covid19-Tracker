import {Line} from "react-chartjs-2"
import {useContext,useMemo} from "react"
import {CovidContext} from "../CovidContext/GlobalState"

const LineChart = ()=>{
   
   const covidHistoryData = useContext(CovidContext)
   const {historyData} = covidHistoryData
   const {cases} = historyData
   console.log(historyData)
   const activeCases = [];
   const date = []
   for(let activecases in cases ){
      let dateObj = {date: activecases}
      date.push(dateObj)
      let caseObj = {cases: cases[activecases]}
      activeCases.push(caseObj)


   }

    return(
        <Line options={{plugins:{legend:{display:false}}}} width={100} height={50} data={{
            labels:date.map((date)=>date.date),
            datasets: [{
                label: false,
                data: activeCases.map((cases)=> cases.cases),
                backgroundColor: "red",
                
               
                    
            
            }]
        }}
        
        />

        
    )
}
export default LineChart