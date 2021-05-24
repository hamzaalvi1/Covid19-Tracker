import {useState,useEffect} from "react"
import axios from "axios"


export const FetchHook = ()=>{
    const [url,setUrl] = useState("worldwide")
    const [covidData,setCovidData]= useState({})
    const [country,setCountry] = useState([])
    useEffect(()=>{
        const getCovidData = async ()=>{
         if(url === "worldwide"){
           const response =  await axios.get(`https://disease.sh/v3/covid-19/all`)
          
             await setCovidData(response.data)
        }

        }
      getCovidData()  
    },[url,setUrl])

     useEffect(()=>{
        const getCountryDetail = async()=>{
            const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
            await setCountry(response.data)

        }
        getCountryDetail()
    },[])

   return {covidData,setUrl,country} 

}