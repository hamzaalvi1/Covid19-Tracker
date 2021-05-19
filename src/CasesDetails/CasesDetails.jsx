import {CasesCard,AnotherCard,CasesSubTitle,CasesNumbers,CasesPara} from '../styleComponents/styledComponents'

const CasesDetails = ()=>{
    return(
        <div className="app__cases__details">
            <CasesCard infected>
                <CasesSubTitle>No of Infected Cases</CasesSubTitle>
                <CasesNumbers>11,257</CasesNumbers> 
                <CasesPara>Infected cases details</CasesPara>  
            </CasesCard>
            <CasesCard>
            <CasesSubTitle>No of Recovered  Cases</CasesSubTitle>
            <CasesNumbers>5,678</CasesNumbers>   
            <CasesPara>Recovered cases details</CasesPara>  



            </CasesCard>
            <AnotherCard>
            <CasesSubTitle>No of Deaths </CasesSubTitle>
                <CasesNumbers>900</CasesNumbers> 
                <CasesPara>Deaths details</CasesPara>  



            </AnotherCard>


        </div>
    )
}

export default CasesDetails