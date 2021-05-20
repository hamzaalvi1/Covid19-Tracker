import {Line} from "react-chartjs-2"

const LineChart = ()=>{
    return(
        <Line options={{plugins:{legend:{display:false}}}} width={100} height={50} data={{
            labels:["01/02/2021","05/02/2021","08/02/2021","11/02/2021","13/02/2021"],
            datasets: [{
                label: false,
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        }}
        
        />

        
    )
}
export default LineChart