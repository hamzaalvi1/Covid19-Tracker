import {useState,useEffect} from "react"
import axios from "axios"


export const FetchHook = ()=>{
    const [url,setUrl] = useState("worldwide")
    const [covidData,setCovidData]= useState({})
    const [country,setCountry] = useState([])
    const [allCountryData,setAllCountryData] = useState([])
    useEffect(()=>{
        const getCovidData = async ()=>{
         if(url === "worldwide"){
           const response =  await axios.get(`https://disease.sh/v3/covid-19/all`)
          
             await setCovidData(response.data)
        }
        else{
          const response =  await axios.get(`https://disease.sh/v3/covid-19/all`)
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


   return {covidData,setUrl,country,allCountryData} 

}