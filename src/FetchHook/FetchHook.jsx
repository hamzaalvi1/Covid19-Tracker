import {useState,useEffect} from "react"
import axios from "axios"


export const FetchHook = ()=>{
    const [url,setUrl] = useState("")
    const [covidData,setCovidData]= useState({})
    const [country,setCountry] = useState([])
    const [allCountryData,setAllCountryData] = useState([])
    const [historyData,setHistoryData] = useState({})
    useEffect(()=>{
        const getCovidData = async ()=>{
         if(!url){
           const response =  await axios.get(`https://disease.sh/v3/covid-19/all`)
          
             await setCovidData(response.data)
        }
        else{
          const response =  await axios.get(`https://disease.sh/v3/covid-19/countries/${url}`)
         
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
     
    useEffect(()=>{
      const getCountryData = async ()=>{
        const response = await axios.get(`https://disease.sh/v3/covid-19/countries`)
         await setAllCountryData(response.data)
      }
      getCountryData()
    },[])
    useEffect(()=>{
      const historyData = async () =>{

      
      if(!url){
        const response =  await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=60`)
        await setHistoryData(response.data)

      }
      else{
        const response =  await axios.get(`https://disease.sh/v3/covid-19/historical/${url}?lastdays=60`)
        await setHistoryData(response.data)

      }
    }
    historyData()

    },[url,setUrl])


   return {covidData,setUrl,country,allCountryData,historyData} 

}